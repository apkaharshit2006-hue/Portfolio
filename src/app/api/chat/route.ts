import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES } from '@/lib/data';

export const runtime = 'edge';

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY ?? process.env.OPENAI_API_KEY ?? '',
  baseURL: 'https://api.groq.com/openai/v1',
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `
You are the AI Executive Assistant for Harshit Kumar Sinha. Your task is to accurately, concisely, and persuasively answer recruiter, manager, and investor questions about Harshit's qualifications, projects, skills, and background.

HARSHIT'S PROFILE:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Contact: ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}
- Location: ${PERSONAL_INFO.location}
- Education: ${PERSONAL_INFO.education.degree} at ${PERSONAL_INFO.education.institution} (${PERSONAL_INFO.education.period})
- Summary: ${PERSONAL_INFO.summary}

KEY PROJECTS:
${PROJECTS.map(p => `- ${p.title}: ${p.subtitle}. Built with ${p.techStack.join(', ')}. Impact: ${p.businessImpact.join('; ')}`).join('\n')}

EXPERIENCE & INTERNSHIPS:
${EXPERIENCES.map(e => `- ${e.role} at ${e.organization} (${e.period}): ${e.description}`).join('\n')}

TONE & STYLE INSTRUCTIONS:
- Tone: Highly articulate, confident, precise, executive-level (Apple/Stripe caliber).
- Keep responses focused on quantifiable results, technical depth, and strategic value.
- Direct users to ${PERSONAL_INFO.email} for interview scheduling.
`;

    const result = streamText({
      model: groq('llama-3.3-70b-versatile'),
      system: systemPrompt,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    return new Response(JSON.stringify({ error: 'AI Stream initialisation failed.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
