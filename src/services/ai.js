
const API_KEY = "AIzaSyDKTyPLJbzoBkb5Agthyd4CaTOUoByt3pU";
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export const getChatResponse = async (message) => {
    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: `Provide a concise, intelligent, and helpful response to: ${message}` }]
                }]
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || "API Error");
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("AI API Error:", error);
        return `Error: ${error.message || "Something went wrong"}`;
    }
};
