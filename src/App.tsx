import React, { useState } from 'react';
import Header from './components/Header';
import StepIndicator from './components/StepIndicator';
import TextToImageStep from './components/TextToImageStep';
import ImageToVideoStep from './components/ImageToVideoStep';
import ResultsGallery from './components/ResultsGallery';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [generatedImage, setGeneratedImage] = useState<string>('');
  const [generatedVideo, setGeneratedVideo] = useState<string>('');

  const handleImageGenerated = (imageUrl: string) => {
    setGeneratedImage(imageUrl);
    setCurrentStep(2);
  };

  const handleVideoGenerated = (videoUrl: string) => {
    setGeneratedVideo(videoUrl);
    setCurrentStep(3);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setGeneratedImage('');
    setGeneratedVideo('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <StepIndicator currentStep={currentStep} />
          
          <div className="space-y-12">
            {currentStep === 1 && (
              <TextToImageStep onImageGenerated={handleImageGenerated} />
            )}
            
            {currentStep === 2 && generatedImage && (
              <ImageToVideoStep
                imageUrl={generatedImage}
                onVideoGenerated={handleVideoGenerated}
              />
            )}
            
            {currentStep === 3 && (
              <ResultsGallery
                imageUrl={generatedImage}
                videoUrl={generatedVideo}
              />
            )}
          </div>
          
          {currentStep > 1 && (
            <div className="text-center mt-12">
              <button
                onClick={handleReset}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 AI Media Studio. Powered by advanced AI technology.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;