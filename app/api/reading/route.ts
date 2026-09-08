import { NextRequest, NextResponse } from 'next/server';
import { DrawnCard } from '@/types/tarot';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { question, spreadName, cards } = await request.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 400 }
      );
    }

    const baseUrl = process.env.OPENAI_API_BASE || 'https://api.openai.com/v1';
    const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

    const prompt = buildPrompt(question, spreadName, cards);

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content: '你是一位經驗豐富、充滿智慧的塔羅占卜師。你的解讀深刻、富有同理心,能夠將牌卡的象徵意義與問卜者的實際情況相結合,提供有洞察力的指引。請用繁體中文(台灣)回答。',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.8,
        max_tokens: 1500,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      return NextResponse.json(
        { error: 'Failed to generate reading' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const interpretation = data.choices[0]?.message?.content || '';

    return NextResponse.json({ interpretation });
  } catch (error) {
    console.error('Error generating reading:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function buildPrompt(
  question: string,
  spreadName: string,
  cards: DrawnCard[]
): string {
  let prompt = `請為以下塔羅占卜提供一個深入、有洞察力的解讀:\n\n`;
  
  if (question) {
    prompt += `**問卜者的問題:** ${question}\n\n`;
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
  
  prompt += `\n請提供一個連貫、有深度的解讀,將這些牌卡與問卜者的問題(如有)相結合。`;
  prompt += `解讀應該:\n`;
  prompt += `1. 針對問題提供具體的洞察和建議\n`;
  prompt += `2. 說明各張牌之間的關聯和整體訊息\n`;
  prompt += `3. 語氣溫暖、富有同理心,但也要誠實直接\n`;
  prompt += `4. 鼓勵問卜者思考和採取行動\n`;
  prompt += `5. 使用優美的繁體中文(台灣)\n\n`;
  prompt += `請直接開始解讀,不要重複問題或牌卡列表。`;
  
  return prompt;
}
