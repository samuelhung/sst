import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

export function QinHanLogo({ className }: { className?: string }) {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedLogo = localStorage.getItem('qinhan_logo');
    if (cachedLogo) {
      setLogoUrl(cachedLogo);
      setLoading(false);
      return;
    }

    async function generateLogo() {
      try {
        // @ts-ignore
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
          console.error("GEMINI_API_KEY is not set");
          setLoading(false);
          return;
        }

        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: 'A minimalist, modern app icon for an AI platform called "尚书台" (Shangshu Tai). The design must be inspired by Qin and Han dynasty culture (秦汉文化), incorporating elements like a stylized ancient seal (印章), bamboo slips (竹简), or Han dynasty architecture eaves, but with a sleek, high-tech, AI-driven twist. The icon should be a single, centered graphic on a dark background (#0B0C10), elegant, flat vector art style, simple, clean, and highly recognizable.',
          config: {
            // @ts-ignore
            imageConfig: {
              aspectRatio: "1:1"
            }
          }
        });
        
        // @ts-ignore
        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            const url = `data:image/png;base64,${base64Data}`;
            setLogoUrl(url);
            localStorage.setItem('qinhan_logo', url);
            break;
          }
        }
      } catch (error) {
        console.error("Failed to generate logo:", error);
      } finally {
        setLoading(false);
      }
    }

    generateLogo();
  }, []);

  if (loading) {
    return (
      <div className={`animate-pulse bg-[#2A2B30] rounded-full flex items-center justify-center text-white font-bold ${className}`}>
        尚
      </div>
    );
  }

  if (logoUrl) {
    return <img src={logoUrl} alt="尚书台 Logo" className={`rounded-full object-cover ${className}`} referrerPolicy="no-referrer" />;
  }

  return (
    <div className={`bg-white text-black rounded-full flex items-center justify-center font-bold ${className}`}>
      尚
    </div>
  );
}
