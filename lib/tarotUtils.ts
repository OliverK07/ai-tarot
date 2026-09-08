import { TarotCard, DrawnCard, Reading } from '@/types/tarot';
import { tarotDeck } from '@/data/tarotDeck';

export function shuffleDeck(): TarotCard[] {
  const deck = [...tarotDeck];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function drawCards(count: number): DrawnCard[] {
  const shuffled = shuffleDeck();
  const drawn: DrawnCard[] = [];
  
  for (let i = 0; i < count; i++) {
    const card = shuffled[i];
    const isReversed = Math.random() < 0.5;
    drawn.push({
      card,
      position: '',
      isReversed,
    });
  }
  
  return drawn;
}

export function saveReading(reading: Reading): void {
  const readings = getReadings();
  readings.unshift(reading);
  const limited = readings.slice(0, 10);
  localStorage.setItem('tarot-readings', JSON.stringify(limited));
}

export function getReadings(): Reading[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('tarot-readings');
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function deleteReading(id: string): void {
  const readings = getReadings();
  const filtered = readings.filter(r => r.id !== id);
  localStorage.setItem('tarot-readings', JSON.stringify(filtered));
}

export function generateLocalReading(
  question: string,
  spreadName: string,
  cards: DrawnCard[]
): string {
  let interpretation = question 
    ? `針對你的問題:「${question}」\n\n` 
    : '根據你抽取的牌卡:\n\n';

  cards.forEach((drawnCard, index) => {
    const { card, position, isReversed } = drawnCard;
    const orientation = isReversed ? '逆位' : '正位';
    const meaning = isReversed ? card.meanings.reversed : card.meanings.upright;
    const keywords = isReversed ? card.keywords.reversed : card.keywords.upright;

    interpretation += `**${position}:${card.name.zh}(${orientation})**\n`;
    interpretation += `關鍵詞:${keywords.join('、')}\n`;
    interpretation += `${meaning}\n\n`;
  });

  interpretation += '**綜合解讀**\n';
  interpretation += '這次占卜顯示了你當前處境的多個面向。';
  
  if (cards.length === 1) {
    interpretation += `${cards[0].card.name.zh}為你指出了${cards[0].isReversed ? '需要注意的挑戰' : '前進的方向'}。`;
  } else if (cards.length === 3) {
    interpretation += `從過去到未來,這些牌卡揭示了一條清晰的道路。過去的經驗影響著現在,而你目前的選擇將塑造未來。`;
  } else {
    interpretation += `從當前狀態到最終結果,這些牌卡為你描繪了一幅完整的圖景,幫助你理解挑戰、把握機會,並朝著最佳的結果前進。`;
  }

  return interpretation;
}
