'use client';

import { useState, useEffect } from 'react';
import { Spread, DrawnCard } from '@/types/tarot';
import { drawCards } from '@/lib/tarotUtils';
import TarotCard from './TarotCard';

interface CardDrawProps {
  spread: Spread;
  onCardsDrawn: (cards: DrawnCard[]) => void;
  question: string;
}

export default function CardDraw({
  spread,
  onCardsDrawn,
  question,
}: CardDrawProps) {
  const [phase, setPhase] = useState<'shuffle' | 'draw' | 'reveal'>('shuffle');
  const [cards, setCards] = useState<DrawnCard[]>([]);
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('draw');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDraw = () => {
    const drawn = drawCards(spread.positions.length);
    const cardsWithPositions = drawn.map((card, index) => ({
      ...card,
      position: spread.positions[index],
    }));
    setCards(cardsWithPositions);
    setPhase('reveal');
    setTimeout(() => {
      revealCards(cardsWithPositions);
    }, 500);
  };

  const revealCards = (cardsToReveal: DrawnCard[]) => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setRevealedCount(count);
      if (count >= cardsToReveal.length) {
        clearInterval(interval);
        setTimeout(() => {
          onCardsDrawn(cardsToReveal);
        }, 1000);
      }
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        {question && (
          <div className="mb-6">
            <p className="text-purple-200 text-lg mb-2">你的問題:</p>
            <p className="text-white text-xl font-medium">{question}</p>
          </div>
        )}
        <h2 className="text-2xl font-bold text-purple-300 mb-2">
          {spread.name}
        </h2>
        <p className="text-purple-200">{spread.description}</p>
      </div>

      {phase === 'shuffle' && (
        <div className="text-center py-20">
          <div className="inline-block animate-pulse">
            <div className="text-6xl mb-4">🔮</div>
            <p className="text-xl text-purple-200">洗牌中...</p>
          </div>
        </div>
      )}

      {phase === 'draw' && (
        <div className="text-center py-20">
          <button
            onClick={handleDraw}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl py-4 px-12 rounded-full transition-all shadow-2xl hover:shadow-purple-500/50 animate-glow"
          >
            抽牌
          </button>
        </div>
      )}

      {phase === 'reveal' && (
        <div className="grid gap-6 justify-items-center"
          style={{
            gridTemplateColumns: `repeat(${Math.min(cards.length, 3)}, 1fr)`,
          }}
        >
          {cards.map((drawnCard, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-3">
                <p className="text-sm text-purple-300 font-medium">
                  {drawnCard.position}
                </p>
              </div>
              <TarotCard
                card={drawnCard.card}
                isReversed={drawnCard.isReversed}
                isRevealed={index < revealedCount}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
