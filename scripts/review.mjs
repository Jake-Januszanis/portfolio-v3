import fs from "fs";
import { execSync } from "child_process";
import dotenv from 'dotenv';
import OpenAI from "openai";
import { publishPRReview } from "./github.mjs";

const EXCLUDED_FILES = [
    "package-lock.json",
];

dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function main() {
    const prompt = fs.readFileSync("prompts/review.md", "utf-8");
    const diff = getDiff();

    if (!diff.trim()) {
        console.log("No changes found to review.");
        return;
    }

    const review = await reviewDiff(prompt, diff);
    await publishPRReview(review);
}

main().catch(console.error);



function getDiff() {
    const baseBranch = process.env.BASE_BRANCH || "origin/master";

    const excludeArgs = EXCLUDED_FILES.map((file) => `':(exclude)${file}'`).join(" ");

    const diffCommand = 
        process.env.BASE_SHA && process.env.HEAD_SHA 
            ? `git diff ${process.env.BASE_SHA} ${process.env.HEAD_SHA} -- . ${excludeArgs}`
            : `git diff ${baseBranch}...HEAD -- . ${excludeArgs}`;

    try {
        return execSync(diffCommand, {
            encoding: "utf-8",
            maxBuffer: 10 * 1024 * 1024 // 10 MB
        });
    } catch (error) {
        throw new Error(`Failed to generate git diff using "${diffCommand}": ${error.message}`);
    }

}

async function reviewDiff(prompt, diff) {

    const response = await client.responses.create({
        model: process.env.OPENAI_MODEL || "gpt-5-mini",
        input: [
            { role: "system", content: prompt },
            { role: "user", content: diff}
        ]
    })

    return response.output_text;
}