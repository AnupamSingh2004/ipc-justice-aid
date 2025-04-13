import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Invalid prompt provided" },
        { status: 400 },
      );
    }

    // First API call to get penal codes
    const penalCodesResponse = await fetch(
      "http://localhost:11434/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "kartikm7/indian-lawen2-1.5b",
          prompt: `Analyze the following case and provide applicable Indian Penal Code sections with detailed descriptions. For each section, include:
1. The section number
2. The title of the section
3. A detailed explanation of the section
4. How it applies to this specific case
5. Potential penalties

Format each section clearly as "Section XXX: Title - Description" and make sure to separate each section with a clear delimiter.
Ensure each section follows the format:
Section [NUMBER]: [TITLE] - [SHORT DESCRIPTION]
Explanation: [DETAILED DESCRIPTION]
Application to this case: [CASE APPLICATION]
Penalties: [PENALTIES INFORMATION]

Case details: ${prompt}`,
          stream: false,
        }),
      },
    );

    if (!penalCodesResponse.ok) {
      throw new Error(
        `Ollama API responded with status: ${penalCodesResponse.status}`,
      );
    }

    const penalCodesData = await penalCodesResponse.json();
    console.log("Penal codes response:", penalCodesData);

    // Second API call to get defense strategies
    const defenseResponse = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "kartikm7/indian-lawen2-1.5b",
        prompt: `Based on the following case, provide:
1. A list of applicable defense strategies using relevant Indian Penal Code sections
2. Detailed explanation of each defense strategy
3. A list of specific precautions and recommendations for the defense
4. Any potential weaknesses in the prosecution's case

Format defense strategies clearly as:
Section [NUMBER]: [TITLE] - [DEFENSE STRATEGY]
Explanation: [DETAILED EXPLANATION]

Format precautions as a numbered list with the heading "Precautions and recommendations:"
Format prosecution weaknesses as a numbered list with the heading "Potential weaknesses in the prosecution's case:"

Case details: ${prompt}`,
        stream: false,
      }),
    });

    if (!defenseResponse.ok) {
      throw new Error(
        `Ollama API responded with status: ${defenseResponse.status}`,
      );
    }

    const defenseData = await defenseResponse.json();
    console.log("Defense response:", defenseData);

    // Make sure both responses contain the expected properties
    if (!penalCodesData.response || !defenseData.response) {
      console.error("Incomplete API responses:", {
        penalCodesData,
        defenseData,
      });
      return NextResponse.json(
        { error: "Invalid responses from Ollama API" },
        { status: 500 },
      );
    }

    // Process and structure the penal code data for better parsing
    const formattedPenalCodes = penalCodesData.response
      .split(/Section \d+/)
      .filter((item: unknown): item is string => Boolean(item))
      .map((section: string) => {
        return "Section " + section.trim();
      })
      .join("\n\n");

    // Process and structure the defense data for better parsing
    const formattedDefense = defenseData.response
      .split(/Section \d+/)
      .filter((item: unknown): item is string => Boolean(item))
      .map((section: string) => {
        return "Section " + section.trim();
      })
      .join("\n\n");

    return NextResponse.json({
      penalCodes: formattedPenalCodes,
      defense: formattedDefense,
    });
  } catch (error) {
    console.error("Error calling Ollama:", error);
    return NextResponse.json(
      {
        error: "Failed to process legal query",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
