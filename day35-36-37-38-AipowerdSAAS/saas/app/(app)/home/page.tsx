"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import VideoCard from "@/components/VideoCard";
import { Video } from "@/types";

function Home() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVideos = useCallback(async () => {
    try {
      const response = await axios.get("/api/videos");
      if (Array.isArray(response.data)) {
        setVideos(response.data);
      } else {
        throw new Error(" Unexpected response format");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch videos");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  // === Blob-based download (same approach as social-share) ===
  const handleDownload = useCallback(
    async (url: string | null, title: string) => {
      if (!url) {
        console.warn("No video URL available to download:", title);
        return;
      }

      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`Failed to fetch video: ${response.status}`);

        const blob = await response.blob();
        const objectUrl = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = `${title || "video"}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // cleanup
        window.URL.revokeObjectURL(objectUrl);
      } catch (err) {
        console.error("Download failed:", err);
      }
    },
    []
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      {/* Hero / Header */}
      <section className="text-center py-12 bg-base-300 shadow-sm">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          Video Library
        </h1>
        <p className="text-lg text-base-content/70">
          Browse, watch and download your favorite videos
        </p>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        {error && (
          <div className="alert alert-error mb-6 shadow-lg">
            <span>{error}</span>
          </div>
        )}

        {videos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-2xl font-semibold text-base-content/70 mb-2">
              No videos available
            </div>
            <p className="text-base-content/50">
              Check back later or upload your first video
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onDownload={() => handleDownload(video.videoUrl, video.title)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
