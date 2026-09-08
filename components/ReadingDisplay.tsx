'use client';

import { Reading } from '@/types/tarot';
import TarotCard from './TarotCard';

interface ReadingDisplayProps {
  reading: Reading;
  onNewReading: () => void;
  loading: boolean;
}

export default function ReadingDisplay({
  reading,
  onNewReading,
  loading,
}: ReadingDisplayProps) {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-500/30">
        <div className="text-center mb-8">
          {reading.question && (
            <div className="mb-6">
              <p className="text-purple-200 text-sm mb-2">你的問題:</p>
              <p className="text-white text-xl font-medium">
                {reading.question}
              </p>
            </div>
          )}
          <h2 className="text-2xl font-bold text-purple-300 mb-2">
            {reading.spread.name}
          </h2>
        </div>

        <div
          className="grid gap-6 mb-8 justify-items-center"
          style={{
            gridTemplateColumns: `repeat(${Math.min(
              reading.cards.length,
              3
            )}, 1fr)`,
          }}
        >
          {reading.cards.map((drawnCard, index) => (
            <div key={index} className="text-center">
              <div className="mb-3">
                <p className="text-sm text-purple-300 font-medium mb-2">
                  {drawnCard.position}
                </p>
                <TarotCard
                  card={drawnCard.card}
                  isReversed={drawnCard.isReversed}
                  isRevealed={true}
                />
                <p className="text-xs text-purple-200 mt-2">
                  {drawnCard.isReversed ? '逆位' : '正位'}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-purple-500/30 pt-8">
          <h3 className="text-xl font-bold text-purple-300 mb-4">解讀</h3>
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-pulse">
                <div className="text-4xl mb-3">🔮</div>
                <p className="text-purple-200">正在解讀牌義...</p>
              </div>
            </div>
          ) : (
            <div className="prose prose-invert prose-purple max-w-none">
              <div className="text-purple-100 leading-relaxed whitespace-pre-line">
                {reading.interpretation}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onNewReading}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            再次占卜
          </button>
        </div>
      </div>
    </div>
  );
}
