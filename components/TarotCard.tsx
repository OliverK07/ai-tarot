'use client';

import { TarotCard as TarotCardType } from '@/types/tarot';

interface TarotCardProps {
  card: TarotCardType;
  isReversed: boolean;
  isRevealed: boolean;
}

export default function TarotCard({
  card,
  isReversed,
  isRevealed,
}: TarotCardProps) {
  const keywords = isReversed ? card.keywords.reversed : card.keywords.upright;

  return (
    <div className="relative w-40 h-64 perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${
          isRevealed ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isRevealed ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className="absolute inset-0 card-back rounded-xl flex items-center justify-center shadow-xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-6xl opacity-50">🌙</div>
        </div>

        <div
          className={`absolute inset-0 card-front rounded-xl p-4 flex flex-col items-center justify-between shadow-2xl ${
            isReversed ? 'transform rotate-180' : ''
          }`}
          style={{
            backfaceVisibility: 'hidden',
            transform: isReversed
              ? 'rotateY(180deg) rotate(180deg)'
              : 'rotateY(180deg)',
          }}
        >
          <div className="text-center">
            <div className="text-xs text-purple-300 mb-2">{card.name.en}</div>
            <div className="text-lg font-bold text-yellow-400 mb-3">
              {card.name.zh}
            </div>
            <div className="text-4xl mb-3">
              {card.suit === 'major' && '✨'}
              {card.suit === 'wands' && '🔥'}
              {card.suit === 'cups' && '💧'}
              {card.suit === 'swords' && '⚔️'}
              {card.suit === 'pentacles' && '🪙'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-purple-200 space-y-1">
              {keywords.slice(0, 3).map((keyword, i) => (
                <div key={i}>{keyword}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
