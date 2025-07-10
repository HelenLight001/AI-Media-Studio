import React, { useState } from 'react';
import { Send, Loader2, Wand2 } from 'lucide-react';

interface TextToImageStepProps {
  onImageGenerated: (imageUrl: string) => void;
}

export default function TextToImageStep({ onImageGenerated }: TextToImageStepProps) {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerateImage = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call - replace with actual AI service
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // For demo, using a placeholder image
    const demoImageUrl = `https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`;
    onImageGenerated(demoImageUrl);
    
    setIsGenerating(false);
  };

  const promptSuggestions = [
    "A futuristic cityscape at sunset with flying cars",
    "A serene mountain lake with crystal clear water",
    "A magical forest with glowing mushrooms and fireflies",
    "An astronaut floating in space with Earth in the background"
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Wand2 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Describe Your Vision</h2>
        <p className="text-gray-600">Enter a detailed description of the image you want to create</p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Image Description
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            disabled={isGenerating}
          />
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">Quick Suggestions:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {promptSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setPrompt(suggestion)}
                className="text-left p-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                disabled={isGenerating}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleGenerateImage}
          disabled={!prompt.trim() || isGenerating}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating Image...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Generate Image
            </>
          )}
        </button>
      </div>
    </div>
  );
}