'use client';

import { useState } from 'react';
import QuestionForm from '@/components/QuestionForm';
import CardDraw from '@/components/CardDraw';
import ReadingDisplay from '@/components/ReadingDisplay';
import HistoryPanel from '@/components/HistoryPanel';
import { spreads } from '@/data/spreads';
import { Spread, Reading, DrawnCard } from '@/types/tarot';
import { drawCards, saveReading, generateLocalReading } from '@/lib/tarotUtils';

export default function Home() {
  const [step, setStep] = useState<'question' | 'draw' | 'reading'>('question');
  const [question, setQuestion] = useState('');
  const [selectedSpread, setSelectedSpread] = useState<Spread | null>(null);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [currentReading, setCurrentReading] = useState<Reading | null>(null);
  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const handleStartReading = (q: string, spread: Spread) => {
    setQuestion(q);
    setSelectedSpread(spread);
    setStep('draw');
  };

  const handleCardsDrawn = async (cards: DrawnCard[]) => {
    setDrawnCards(cards);
    setLoading(true);

    try {
      const response = await fetch('/api/reading', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          spreadName: selectedSpread?.name,
          cards,
        }),
      });

      let interpretation: string;
      if (response.ok) {
        const data = await response.json();
        interpretation = data.interpretation;
      } else {
        interpretation = generateLocalReading(
          question,
          selectedSpread?.name || '',
          cards
        );
      }

      const reading: Reading = {
        id: Date.now().toString(),
        question,
        spread: selectedSpread!,
        cards,
        interpretation,
        timestamp: Date.now(),
      };

      saveReading(reading);
      setCurrentReading(reading);
      setStep('reading');
    } catch (error) {
      const interpretation = generateLocalReading(
        question,
        selectedSpread?.name || '',
        cards
      );

      const reading: Reading = {
        id: Date.now().toString(),
        question,
        spread: selectedSpread!,
        cards,
        interpretation,
        timestamp: Date.now(),
      };

      saveReading(reading);
      setCurrentReading(reading);
      setStep('reading');
    } finally {
      setLoading(false);
    }
  };

  const handleNewReading = () => {
    setStep('question');
    setQuestion('');
    setSelectedSpread(null);
    setDrawnCards([]);
    setCurrentReading(null);
  };

  const handleViewReading = (reading: Reading) => {
    setCurrentReading(reading);
    setQuestion(reading.question);
    setSelectedSpread(reading.spread);
    setDrawnCards(reading.cards);
    setStep('reading');
    setShowHistory(false);
  };

  return (
    <main className="relative min-h-screen">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            AI 塔羅占卜
          </h1>
          <p className="text-lg text-purple-200">
            探索你的內在智慧,尋找生命的指引
          </p>
        </header>

        {step === 'question' && (
          <QuestionForm
            onStart={handleStartReading}
            spreads={spreads}
            onShowHistory={() => setShowHistory(true)}
          />
        )}

        {step === 'draw' && selectedSpread && (
          <CardDraw
            spread={selectedSpread}
            onCardsDrawn={handleCardsDrawn}
            question={question}
          />
        )}

        {step === 'reading' && currentReading && (
          <ReadingDisplay
            reading={currentReading}
            onNewReading={handleNewReading}
            loading={loading}
          />
        )}

        {showHistory && (
          <HistoryPanel
            onClose={() => setShowHistory(false)}
            onViewReading={handleViewReading}
          />
        )}
      </div>
    </main>
  );
}
