import { AnswerData } from "../types";

interface AzureOpenAIConfig {
  endpoint: string;
  apiKey: string;
  deploymentName: string;
  apiVersion: string;
}

const getConfig = (): AzureOpenAIConfig => {
  return {
    endpoint: import.meta.env.VITE_AZURE_OPENAI_ENDPOINT || '',
    apiKey: import.meta.env.VITE_AZURE_OPENAI_API_KEY || '',
    deploymentName: import.meta.env.VITE_AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4',
    apiVersion: import.meta.env.VITE_AZURE_OPENAI_API_VERSION || '2024-02-15-preview',
  };
};

export const fetchBookAnswer = async (question: string): Promise<AnswerData> => {
  const config = getConfig();

  // If API Key is present, try to use Azure OpenAI
  if (config.apiKey && config.endpoint) {
    try {
      const url = `${config.endpoint}/openai/deployments/${config.deploymentName}/chat/completions?api-version=${config.apiVersion}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': config.apiKey,
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `You are "The Book of Answers". Provide mysterious, short, philosophical answers.
Always respond in valid JSON format: { "answer": "...", "interpretation": "..." }
The answer should be max 10 words.
The interpretation should be max 20 words explaining why this is the answer.
Language: Chinese.`
            },
            {
              role: 'user',
              content: question
            }
          ],
          temperature: 0.8,
          max_tokens: 150,
          response_format: { type: "json_object" }
        }),
      });

      if (!response.ok) {
        throw new Error(`Azure OpenAI API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;

      if (content) {
        return JSON.parse(content) as AnswerData;
      }
    } catch (e) {
      console.warn("API call failed, falling back to oracle mode", e);
    }
  }

  // Fallback / Hardcoded Mock
  await new Promise(resolve => setTimeout(resolve, 1500));

  console.log(`Question asked (Mock): ${question}`);

  return {
    answer: "一切都会好的",
    interpretation: "说明一切都可以放心"
  };
};
