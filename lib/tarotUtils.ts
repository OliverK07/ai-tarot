import { DrawnCard, Reading } from '@/types/tarot';
import { tarotDeck } from '@/data/tarotDeck';

export function shuffleDeck() {
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

function extractThemesFromCards(cards: DrawnCard[]): string[] {
  const allKeywords = cards.flatMap(c => 
    c.isReversed ? c.card.keywords.reversed : c.card.keywords.upright
  );
  return [...new Set(allKeywords)].slice(0, 6);
}

function inferQuestionTheme(question: string): string {
  const lower = question.toLowerCase();
  if (/工作|職業|事業|career|job|work/.test(lower)) return '事業發展';
  if (/感情|愛情|戀愛|關係|love|relationship/.test(lower)) return '感情關係';
  if (/金錢|財富|financial|money/.test(lower)) return '財務狀況';
  if (/決定|選擇|decision|choice/.test(lower)) return '決策方向';
  if (/健康|health/.test(lower)) return '健康狀況';
  if (/家庭|family/.test(lower)) return '家庭關係';
  return '人生方向';
}

function synthesizeReading(question: string, cards: DrawnCard[]): string {
  const themes = extractThemesFromCards(cards);
  const cardNames = cards.map(c => c.card.name.zh);
  const questionTheme = question ? inferQuestionTheme(question) : '當前狀態';
  
  let synthesis = '';
  
  // Opening that references specific cards
  if (cards.length === 1) {
    const card = cards[0];
    const orientation = card.isReversed ? '逆位' : '正位';
    synthesis = `${card.card.name.zh}以${orientation}出現，`;
    if (card.isReversed) {
      synthesis += `提醒你注意可能的阻礙或需要調整的地方。`;
    } else {
      synthesis += `為你指出了清晰的方向。`;
    }
    synthesis += `在${questionTheme}方面，這張牌帶來${themes.slice(0, 2).join('與')}的訊息。`;
  } else if (cards.length === 3) {
    synthesis = `從${cardNames[0]}到${cardNames[1]}再到${cardNames[2]}，`;
    synthesis += `這三張牌為你的${questionTheme}描繪了一條清晰的路徑。`;
    synthesis += `${cardNames[0]}顯示了過去的基礎與經驗，`;
    synthesis += `${cardNames[1]}揭示當前的核心議題在於${themes[0]}，`;
    synthesis += `而${cardNames[2]}則預示著未來將朝向${themes[1]}的方向發展。`;
  } else {
    // 5-card spread
    synthesis = `從${cardNames[0]}作為當前狀態，經過${cardNames[1]}的挑戰，`;
    synthesis += `到${cardNames[2]}提供的建議，這個完整的牌陣為你的${questionTheme}提供了深入的洞察。`;
    synthesis += `${cardNames[3]}顯示近期的發展將帶來${themes[0]}的契機，`;
    synthesis += `最終${cardNames[4]}指向${themes[1]}的結果。`;
  }
  
  // Add question-specific guidance
  if (question) {
    synthesis += `\n\n`;
    if (cards.some(c => !c.isReversed)) {
      synthesis += `針對你的問題，牌卡建議你把握住${themes[0]}帶來的機會。`;
    }
    if (cards.some(c => c.isReversed)) {
      synthesis += `同時也要注意${themes[cards.findIndex(c => c.isReversed)]}可能帶來的挑戰，`;
      synthesis += `保持警覺並做好準備。`;
    }
  }
  
  // Closing
  synthesis += `\n\n`;
  synthesis += `整體而言，這些牌卡的組合`;
  if (cards.filter(c => !c.isReversed).length > cards.length / 2) {
    synthesis += `顯示出積極正向的能量，鼓勵你勇敢前進。`;
  } else {
    synthesis += `提醒你需要更多的內省與調整，以找到最適合的道路。`;
  }
  
  return synthesis;
}

export function generateLocalReading(
  question: string,
  spreadName: string,
  cards: DrawnCard[]
): string {
  let interpretation = '';
  
  // Header
  if (question) {
    interpretation = `針對你的問題：「${question}」\n\n`;
  } else {
    interpretation = '根據你抽取的牌卡：\n\n';
  }

  // Per-position interpretation
  cards.forEach((drawnCard) => {
    const { card, position, isReversed } = drawnCard;
    const orientation = isReversed ? '逆位' : '正位';
    const meaning = isReversed ? card.meanings.reversed : card.meanings.upright;
    const keywords = isReversed ? card.keywords.reversed : card.keywords.upright;

    interpretation += `**${position}: ${card.name.zh} (${orientation})**\n`;
    interpretation += `關鍵詞: ${keywords.join('、')}\n`;
    interpretation += `${meaning}\n\n`;
  });

  // Synthesized interpretation - SPECIFIC to these cards
  interpretation += '**綜合解讀**\n';
  interpretation += synthesizeReading(question, cards);

  return interpretation;
}
