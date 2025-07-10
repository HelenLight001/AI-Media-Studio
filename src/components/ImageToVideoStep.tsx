import React, { useState } from 'react';
import { Play, Loader2, Upload, Download } from 'lucide-react';

interface ImageToVideoStepProps {
  imageUrl: string;
  onVideoGenerated: (videoUrl: string) => void;
}

export default function ImageToVideoStep({ imageUrl, onVideoGenerated }: ImageToVideoStepProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoGenerated, setVideoGenerated] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  
  const handleGenerateVideo = async () => {
    setIsGenerating(true);
    
    // Simulate API call - replace with actual AI service
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // For demo, using a placeholder video
    const demoVideoUrl = `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`;
    setVideoUrl(demoVideoUrl);
    onVideoGenerated(demoVideoUrl);
    setVideoGenerated(true);
    
    setIsGenerating(false);
  };

  const handleNewImage = () => {
    // Reset for new image upload
    setVideoGenerated(false);
    setVideoUrl('');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Play className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Animate Your Image</h2>
        <p className="text-gray-600">Transform your generated image into a dynamic video</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Preview */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Source Image</h3>
          <div className="relative">
            <img
              src={imageUrl}
              alt="Generated image"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <button
              onClick={handleNewImage}
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              <Upload className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Generation */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Generated Video</h3>
          
          {!videoGenerated ? (
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              {isGenerating ? (
                <div className="text-center">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-500 mx-auto mb-2" />
                  <p className="text-gray-600">Creating video...</p>
                  <p className="text-sm text-gray-500 mt-1">This may take a few moments</p>
                </div>
              ) : (
                <div className="text-center">
                  <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Click below to generate video</p>
                </div>
              )}
            </div>
          ) : (
            <div className="relative">
              <video
                src={videoUrl}
                controls
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <button
                onClick={() => window.open(videoUrl, '_blank')}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Video Settings</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">Duration</label>
              <select className="w-full p-2 border border-blue-200 rounded focus:ring-2 focus:ring-blue-500">
                <option>3 seconds</option>
                <option>5 seconds</option>
                <option>10 seconds</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">Motion</label>
              <select className="w-full p-2 border border-blue-200 rounded focus:ring-2 focus:ring-blue-500">
                <option>Subtle</option>
                <option>Moderate</option>
                <option>Dynamic</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">Style</label>
              <select className="w-full p-2 border border-blue-200 rounded focus:ring-2 focus:ring-blue-500">
                <option>Natural</option>
                <option>Cinematic</option>
                <option>Artistic</option>
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={handleGenerateVideo}
          disabled={isGenerating || videoGenerated}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating Video...
            </>
          ) : videoGenerated ? (
            <>
              <Play className="w-5 h-5" />
              Video Generated!
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Generate Video
            </>
          )}
        </button>
      </div>
    </div>
  );
}