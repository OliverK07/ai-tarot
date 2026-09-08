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

function inferQuestionContext(question: string): {
  theme: string;
  verb: string;
  focus: string;
} {
  const lower = question.toLowerCase();
  
  if (/工作|職業|事業|career|job|work/.test(lower)) {
    return { theme: '事業發展', verb: '建立', focus: '職業道路' };
  }
  if (/感情|愛情|戀愛|關係|love|relationship/.test(lower)) {
    return { theme: '感情關係', verb: '培養', focus: '情感連結' };
  }
  if (/金錢|財富|financial|money/.test(lower)) {
    return { theme: '財務狀況', verb: '管理', focus: '資源配置' };
  }
  if (/決定|選擇|decision|choice/.test(lower)) {
    return { theme: '決策時刻', verb: '選擇', focus: '最佳路徑' };
  }
  if (/健康|health/.test(lower)) {
    return { theme: '健康狀況', verb: '照顧', focus: '身心平衡' };
  }
  if (/家庭|family/.test(lower)) {
    return { theme: '家庭關係', verb: '維繫', focus: '家人互動' };
  }
  if (/學習|學業|study|education/.test(lower)) {
    return { theme: '學習成長', verb: '探索', focus: '知識進展' };
  }
  
  return { theme: '人生方向', verb: '探索', focus: '內在成長' };
}

function getCardEnergy(card: DrawnCard): {
  keywords: string[];
  tone: 'positive' | 'cautious' | 'transformative';
  action: string;
} {
  const keywords = card.isReversed 
    ? card.card.keywords.reversed 
    : card.card.keywords.upright;
  
  // Determine tone from keywords
  const positiveWords = ['成功', '喜悅', '完成', '成就', '豐盛', '愛', '和諧', '力量'];
  const cautiousWords = ['挑戰', '困難', '失衡', '衝突', '限制', '恐懼', '混亂'];
  
  const hasPositive = keywords.some(k => positiveWords.some(p => k.includes(p)));
  const hasCautious = keywords.some(k => cautiousWords.some(c => k.includes(c)));
  
  let tone: 'positive' | 'cautious' | 'transformative' = 'transformative';
  if (hasPositive && !hasCautious) tone = 'positive';
  else if (hasCautious && !hasPositive) tone = 'cautious';
  
  // Generate action based on keywords
  const action = keywords[0] || '探索';
  
  return { keywords, tone, action };
}

function synthesizeReading(question: string, cards: DrawnCard[]): string {
  const context = question ? inferQuestionContext(question) : null;
  const cardNames = cards.map(c => c.card.name.zh);
  const energies = cards.map(getCardEnergy);
  
  let synthesis = '\n';
  
  // Opening paragraph - different for each spread type
  if (cards.length === 1) {
    const energy = energies[0];
    const orientation = cards[0].isReversed ? '逆位' : '正位';
    
    if (question) {
      synthesis += `在你關於${context?.theme}的提問中，${cardNames[0]}以${orientation}出現，`;
      synthesis += `帶來了「${energy.keywords[0]}」的核心訊息。`;
    } else {
      synthesis += `${cardNames[0]}${orientation}的出現，為你的當前狀態帶來「${energy.keywords[0]}」的指引。`;
    }
    
    if (energy.tone === 'positive') {
      synthesis += `這是一個充滿可能性的時刻，`;
      synthesis += `牌卡鼓勵你把握${energy.keywords[1] || '機會'}，朝著目標前進。`;
    } else if (energy.tone === 'cautious') {
      synthesis += `這張牌提醒你需要謹慎面對眼前的${energy.keywords[1] || '挑戰'}，`;
      synthesis += `保持清醒的判斷，不要輕易做出決定。`;
    } else {
      synthesis += `這是一個轉變的時期，你需要以開放的心態接受新的可能，`;
      synthesis += `允許舊有的模式逐漸轉化。`;
    }
    
  } else if (cards.length === 3) {
    // Three-card spread - past, present, future narrative
    const [past, present, future] = cards;
    const [e1, e2, e3] = energies;
    
    if (question) {
      synthesis += `針對你在${context?.theme}上的疑問，這三張牌揭示了一個完整的時間線索。`;
    } else {
      synthesis += `從過去到未來，這三張牌為你描繪了一幅清晰的圖景。`;
    }
    
    synthesis += `\n\n`;
    synthesis += `${cardNames[0]}${past.isReversed ? '逆位' : '正位'}顯示，你的根基建立在「${e1.keywords[0]}」之上`;
    
    if (past.isReversed) {
      synthesis += `——這可能代表過去的${e1.keywords[1] || '經驗'}還需要被重新理解或整合`;
    } else {
      synthesis += `——這份${e1.keywords[1] || '經驗'}為你累積了寶貴的資源`;
    }
    synthesis += `。`;
    
    synthesis += `${cardNames[1]}${present.isReversed ? '逆位' : '正位'}點出當前的核心主題是「${e2.keywords[0]}」`;
    if (question) {
      synthesis += `，這正是你在${context?.theme}中最需要關注的面向`;
    }
    synthesis += `。`;
    
    synthesis += `展望未來，${cardNames[2]}${future.isReversed ? '逆位' : '正位'}預示著「${e3.keywords[0]}」的發展`;
    if (e3.tone === 'positive') {
      synthesis += `，這是一個令人期待的方向`;
    } else if (e3.tone === 'cautious') {
      synthesis += `，你需要為可能的${e3.keywords[1] || '挑戰'}做好準備`;
    } else {
      synthesis += `，帶來深刻的轉化與成長`;
    }
    synthesis += `。`;
    
  } else {
    // Five-card spread - situation analysis
    const [current, challenge, advice, nearFuture, outcome] = cards;
    const [e1, e2, e3, e4, e5] = energies;
    
    if (question) {
      synthesis += `這個完整的牌陣為你在${context?.theme}上的處境提供了深入的洞察。`;
    } else {
      synthesis += `五張牌共同揭示了你當前狀況的多個層面。`;
    }
    
    synthesis += `\n\n`;
    synthesis += `${cardNames[0]}${current.isReversed ? '逆位' : '正位'}描繪當前狀態的核心是「${e1.keywords[0]}」`;
    synthesis += `，而${cardNames[1]}${challenge.isReversed ? '逆位' : '正位'}則指出你面臨的挑戰在於「${e2.keywords[0]}」。`;
    
    synthesis += `面對這個局面，${cardNames[2]}${advice.isReversed ? '逆位' : '正位'}給出的建議是透過「${e3.keywords[0]}」的方式來應對`;
    if (e3.keywords[1]) {
      synthesis += `，特別是要注意${e3.keywords[1]}的重要性`;
    }
    synthesis += `。`;
    
    synthesis += `\n\n`;
    synthesis += `在近期未來，${cardNames[3]}${nearFuture.isReversed ? '逆位' : '正位'}顯示「${e4.keywords[0]}」的能量將會浮現，`;
    synthesis += `最終${cardNames[4]}${outcome.isReversed ? '逆位' : '正位'}指向「${e5.keywords[0]}」的結果。`;
    
    if (e5.tone === 'positive') {
      synthesis += `這是一個值得期待的發展方向，只要你能整合這些洞察。`;
    } else if (e5.tone === 'cautious') {
      synthesis += `這提醒你需要在過程中保持警覺，並做好萬全準備。`;
    } else {
      synthesis += `這將是一段深刻的轉化旅程，需要你的勇氣與智慧。`;
    }
  }
  
  // Closing guidance
  synthesis += `\n\n`;
  
  const reversedCount = cards.filter(c => c.isReversed).length;
  const positiveCount = energies.filter(e => e.tone === 'positive').length;
  
  if (positiveCount > cards.length / 2) {
    synthesis += `整體而言，牌面的能量是積極向上的，`;
    if (question) {
      synthesis += `建議你對${context?.theme}保持信心，`;
    }
    synthesis += `把握當前的機會，勇敢地向前邁進。`;
  } else if (reversedCount > cards.length / 2) {
    synthesis += `牌面顯示當前有較多需要調整的地方，`;
    if (question) {
      synthesis += `在${context?.theme}上，`;
    }
    synthesis += `建議你先放慢腳步，仔細審視內在的聲音，等待更清晰的方向再行動。`;
  } else {
    synthesis += `牌面呈現出平衡的能量，`;
    if (question) {
      synthesis += `在${context?.theme}的議題上，`;
    }
    synthesis += `你需要同時看見光明與陰影，在兩者之間找到智慧的平衡點。`;
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
  interpretation += '**綜合解讀**';
  interpretation += synthesizeReading(question, cards);

  return interpretation;
}
