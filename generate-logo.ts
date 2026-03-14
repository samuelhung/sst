import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generate() {
  try {
    console.log("Generating image...");
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: 'A minimalist, modern app icon for an AI platform. The design must be inspired by Qin and Han dynasty culture (秦汉文化), incorporating elements like a stylized ancient seal (印章) or bamboo slips (竹简), but with a sleek, high-tech, AI-driven twist. The icon should be a single, centered graphic on a dark background (#0B0C10), elegant, flat vector art style, simple, clean, and highly recognizable.',
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir);
        }
        fs.writeFileSync(path.join(publicDir, 'logo.png'), base64Data, 'base64');
        console.log('Logo generated and saved to public/logo.png');
        return;
      }
    }
    console.log('No image found in response');
  } catch (e) {
    console.error("Error generating image:", e);
  }
}

generate();
