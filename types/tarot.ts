export interface TarotCard {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  suit?: 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';
  number?: number;
  keywords: {
    upright: string[];
    reversed: string[];
  };
  meanings: {
    upright: string;
    reversed: string;
  };
}

export interface Spread {
  id: string;
  name: string;
  positions: string[];
  description: string;
}

export interface DrawnCard {
  card: TarotCard;
  position: string;
  isReversed: boolean;
}

export interface Reading {
  id: string;
  question: string;
  spread: Spread;
  cards: DrawnCard[];
  interpretation: string;
  timestamp: number;
}
