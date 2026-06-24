import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  "AQ.Ab8RN6IQUkcIBYZYGnatfvBPomXM87uQwRvBdu6d22rhC6LNsA"
);

export async function generateContent(topic) {

  try {

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(
      `Write a professional blog about ${topic}`
    );

    return result.response.text();

  } catch (error) {

    console.log(error);

    return "AI generation failed.";
  }
}