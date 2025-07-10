import React from 'react';
import { Download, Share2, Heart } from 'lucide-react';

interface ResultsGalleryProps {
  imageUrl?: string;
  videoUrl?: string;
}

export default function ResultsGallery({ imageUrl, videoUrl }: ResultsGalleryProps) {
  if (!imageUrl && !videoUrl) return null;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Creations</h2>
        <p className="text-gray-600">Download, share, or create variations of your generated media</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {imageUrl && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Generated Image</h3>
            <div className="relative group">
              <img
                src={imageUrl}
                alt="Generated image"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {videoUrl && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Generated Video</h3>
            <div className="relative group">
              <video
                src={videoUrl}
                controls
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-2">
                  <button className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200">
          Create Another
        </button>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
          Generate Variations
        </button>
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
          Save to Gallery
        </button>
      </div>
    </div>
  );
}