"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface AppScreenProps {
  imageUrl: string;
  title: string;
}

export function AppScreen({ imageUrl, title }: AppScreenProps) {
  const [opacity, setOpacity] = useState(1);
  const [currentImage, setCurrentImage] = useState(imageUrl);

  useEffect(() => {
    // Fade out
    setOpacity(0);

    // Wait for fade out, then change image and fade in
    const timeout = setTimeout(() => {
      setCurrentImage(imageUrl);
      setOpacity(1);
    }, 300);

    return () => clearTimeout(timeout);
  }, [imageUrl]);

  return (
    <div className="relative w-full max-w-[300px] h-[650px] bg-gray-800 rounded-[40px] border-[14px] border-gray-800 shadow-2xl mx-auto">
      {/* Notch (entalhe superior do iPhone) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-10"></div>

      {/* Screen */}
      <div className="w-full h-full rounded-[26px] overflow-hidden bg-white">
        <Image
          src={currentImage}
          alt={`Tela do aplicativo - ${title}`}
          width={300}
          height={650}
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity }}
          priority
        />
      </div>
    </div>
  );
}
