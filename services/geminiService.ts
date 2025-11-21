import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { Message } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChatResponse = async (history: Message[], userMessage: string): Promise<string> => {
  try {
    // Convert internal message format to Gemini API format if needed, 
    // but for a simple single-turn or context-window approach, we can just append.
    // Using the generateContent with systemInstruction is best.

    // Construct a simple chat history string to pass context if we aren't using the ChatSession object persistently
    // For a robust React implementation without complex state management of the ChatSession object, 
    // we will pass the relevant context in the prompt or use a fresh Chat session each time 
    // (not ideal for long conversations) OR keep the Chat object in a Ref.
    // Here, we will use a single generation call with history context formatted as text for simplicity and statelessness reliability.
    
    // Better approach for this demo: Use the chat model properly.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text || "I apologize, I'm having trouble connecting to the sun right now. Please try again or call us directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please call us at 702-473-5181 for immediate assistance.";
  }
};