import { NextResponse } from 'next/server';
import { systemPrompt } from './utils/instr';
import { writingSamples } from './utils/samples';

// AI/ML API access to 200+ AI models with one API endpoint
const apiKey = process.env.NEXT_PUBLIC_AIML_API_KEY;

export async function POST(request: Request) {
    try {
        console.log("=====================================");
        console.log("POST /api/humanaize");
        const { aiText } = await request.json();
        console.log("User text: ", aiText);

        const response = await fetch("https://api.aimlapi.com/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: systemPrompt },
                    ...writingSamples,
                    { role: "user", content: aiText },
                ],
                max_tokens: 512,
            }),
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch completion data" }, { status: response.status });
        }

        const data = await response.json();
        console.log("output data: ", data);
        const assistantResponse = data.choices[0]?.message?.content || "No response available";
        console.log("assistantResponse: ", assistantResponse);

        return NextResponse.json({ message: assistantResponse });
    } catch (error) {
        console.error("Error fetching the data:", error);
        return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 });
    }
}