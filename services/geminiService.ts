
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

export const getSpiritualGuidance = async (history: Message[], userInput: string) => {
  // Creating a new instance before call ensures we use the latest injected API KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    You are the 'Prophetic AI Assistant' for Joseph Akowuah Ministries, founded by Apostle Joseph Akwasi Akowuah.
    Your identity: You represent the spiritual wisdom and biblical foundation of this ministry.
    Tone: Spiritual, authoritative, deeply encouraging, and biblically grounded.
    Instructions:
    - Always provide at least one relevant Bible verse (KJV or NIV).
    - If the user is facing a challenge, offer a short, powerful prophetic prayer.
    - Mention Apostle Joseph Akwasi Akowuah as a spiritual father and guide.
    - For physical location or counseling, point them to the Ministry Center in Kumasi, Ghana.
    - Direct contact: WhatsApp +233 24 017 1460.
    - Closing: Always end with a blessing like "The grace of the Lord be with you. Shalom." or "May your testimony manifest soon. Remain blessed."
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: "SYSTEM INSTRUCTION: " + systemInstruction }] },
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Spiritual Connection Error:", error);
    return "The spiritual atmosphere is being refreshed. Please try again in a moment, or reach out to our prayer line at +233 24 017 1460 for immediate intercession.";
  }
};
