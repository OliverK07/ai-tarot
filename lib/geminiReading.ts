import { DrawnCard } from '@/types/tarot';

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta';
const GEMINI_MODEL = 'gemini-2.0-flash-exp';

export function getGeminiApiKey(): string | null {
  if (typeof window === 'undefined') return null;
  
  // Try localStorage first
  const storedKey = localStorage.getItem('gemini-api-key');
  if (storedKey) return storedKey;
  
  // Fall back to build-time env var
  return process.env.NEXT_PUBLIC_GEMINI_API_KEY || null;
}

export function setGeminiApiKey(key: string): void {
  if (typeof window === 'undefined') return;
  if (key.trim()) {
    localStorage.setItem('gemini-api-key', key.trim());
  } else {
    localStorage.removeItem('gemini-api-key');
  }
}

export async function generateGeminiReading(
  question: string,
  spreadName: string,
  cards: DrawnCard[]
): Promise<string> {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error('No Gemini API key available');
  }

  const prompt = buildGeminiPrompt(question, spreadName, cards);
  
  const response = await fetch(
    `${GEMINI_API_BASE}/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 2048,
        }
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error('Gemini API error:', error);
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!text) {
    throw new Error('No text in Gemini response');
  }

  return text;
}

function buildGeminiPrompt(
  question: string,
  spreadName: string,
  cards: DrawnCard[]
): string {
  let prompt = `你是一位經驗豐富、充滿智慧的塔羅占卜師。請用繁體中文（台灣）為以下塔羅占卜提供深入、有洞察力的解讀。\n\n`;
  
  if (question) {
    prompt += `**問卜者的問題:** ${question}\n\n`;
  } else {
    prompt += `**問卜者沒有特定問題，尋求一般性指引**\n\n`;
  }
  
  prompt += `**牌陣:** ${spreadName}\n\n`;
  prompt += `**抽取的牌卡:**\n`;
  
  cards.forEach((drawnCard) => {
    const { card, position, isReversed } = drawnCard;
    const orientation = isReversed ? '逆位' : '正位';
    const meaning = isReversed ? card.meanings.reversed : card.meanings.upright;
    const keywords = isReversed ? card.keywords.reversed : card.keywords.upright;
    
    prompt += `\n位置: ${position}\n`;
    prompt += `牌卡: ${card.name.zh} (${card.name.en}) - ${orientation}\n`;
    prompt += `關鍵詞: ${keywords.join('、')}\n`;
    prompt += `基本牌義: ${meaning}\n`;
  });
  
  prompt += `\n**解讀要求:**\n`;
  prompt += `1. 針對問題（如有）提供具體的洞察和建議\n`;
  prompt += `2. 將各張牌的意義串聯起來，形成完整的故事\n`;
  prompt += `3. 在綜合解讀中明確提到抽中的牌卡名稱，說明它們如何相互作用\n`;
  prompt += `4. 語氣溫暖、富有同理心，但也要誠實直接\n`;
  prompt += `5. 鼓勵問卜者思考和採取行動\n`;
  prompt += `6. 不要編造任何引用或來源\n\n`;
  prompt += `請分段呈現：先逐一解讀每個位置的牌卡，最後提供一個綜合解讀，將所有牌卡和問題整合在一起。`;
  
  return prompt;
}
