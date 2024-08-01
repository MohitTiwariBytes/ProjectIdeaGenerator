import { GoogleGenerativeAI } from "https://cdn.jsdelivr.net/npm/@google/generative-ai@0.16.0/dist/index.min.js";

const apiKey = "AIzaSyAVwAMLrUiaSUuZvm5-WM4TNdKNsXOKCL4";

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getIdea() {
    try {
        const result = await model.generateContent("a random project idea for hackclub arcade");
        const response = result.response;
        const text = await response.text();
        console.log(text);
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

getIdea();
