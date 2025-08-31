"use client";
import React, { useState, useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";

const socialFormats = {
  "Instagaram Square (1:1)": { width: 1080, height: 1080, aspectRatio: "1:1" },
  "Instagaram Portrait (4:5)": {
    width: 1080,
    height: 1350,
    aspectRatio: "4:5",
  },
  "X Post (16:9)": { width: 1200, height: 675, aspectRatio: "16:9" },
  "X Header (3:1)": { width: 1500, height: 500, aspectRatio: "3:1" },
  "Meta Cover(205:78)": { width: 820, height: 312, aspectRatio: "205:78" },
};
type SocialFormat = keyof typeof socialFormats;

export default function SocialShare() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<SocialFormat>(
    "Instagaram Square (1:1)"
  );
  const [isUploading, setIsUploading] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (uploadedImage) {
      setIsTransforming(true);
    }
  }, [selectedFormat, uploadedImage]);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/image-upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Failed to upload image");

      const data = await response.json();
      setUploadedImage(data.publicId);
    } catch (error) {
      console.log(error);
      alert("Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownload = () => {
    if (!imageRef.current) return;

    fetch(imageRef.current.src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${selectedFormat
          .replace(/\s+/g, "_")
          .toLowerCase()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          🎨 Social Media Image Creator
        </h1>

        {/* Upload Section */}
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-medium">
              Upload an image file
            </span>
            <input
              type="file"
              onChange={handleFileUpload}
              className="mt-2 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0
                         file:text-sm file:font-semibold
                         file:bg-indigo-600 file:text-white
                         hover:file:bg-indigo-700"
            />
          </label>

          {isUploading && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="bg-indigo-600 h-2 animate-pulse"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Uploading...</p>
            </div>
          )}
        </div>

        {/* Format + Preview */}
        {uploadedImage && (
          <div className="mt-10 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Choose Social Media Format
              </h2>
              <select
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-500"
                value={selectedFormat}
                onChange={(e) =>
                  setSelectedFormat(e.target.value as SocialFormat)
                }
              >
                {Object.keys(socialFormats).map((format) => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative bg-gray-50 rounded-lg shadow-inner p-4">
              <h3 className="text-lg font-semibold text-gray-600 mb-3">
                Preview
              </h3>
              <div className="flex justify-center">
                {isTransforming && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/70 rounded-lg">
                    <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <CldImage
                  width={socialFormats[selectedFormat].width}
                  height={socialFormats[selectedFormat].height}
                  src={uploadedImage}
                  sizes="100vw"
                  alt="transformed image"
                  crop="fill"
                  aspectRatio={socialFormats[selectedFormat].aspectRatio}
                  gravity="auto"
                  ref={imageRef}
                  className="rounded-lg shadow-md"
                  onLoad={() => setIsTransforming(false)}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                onClick={handleDownload}
              >
                Download for {selectedFormat}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
