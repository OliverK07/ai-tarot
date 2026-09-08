'use client';

import { useState } from 'react';
import QuestionForm from '@/components/QuestionForm';
import CardDraw from '@/components/CardDraw';
import ReadingDisplay from '@/components/ReadingDisplay';
import HistoryPanel from '@/components/HistoryPanel';
import SettingsPanel from '@/components/SettingsPanel';
import { spreads } from '@/data/spreads';
import { Spread, Reading, DrawnCard } from '@/types/tarot';
import { saveReading, generateLocalReading } from '@/lib/tarotUtils';
import { generateGeminiReading, getGeminiApiKey } from '@/lib/geminiReading';

export default function Home() {
  const [step, setStep] = useState<'question' | 'draw' | 'reading'>('question');
  const [question, setQuestion] = useState('');
  const [selectedSpread, setSelectedSpread] = useState<Spread | null>(null);
  const [currentReading, setCurrentReading] = useState<Reading | null>(null);
  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [useAI, setUseAI] = useState(false);

  const handleStartReading = (q: string, spread: Spread) => {
    setQuestion(q);
    setSelectedSpread(spread);
    setStep('draw');
  };

  const handleCardsDrawn = async (cards: DrawnCard[]) => {
    setLoading(true);

    let interpretation: string;
    let isAIGenerated = false;

    // Try Gemini first if API key is available
    const hasGeminiKey = getGeminiApiKey();
    if (hasGeminiKey) {
      try {
        interpretation = await generateGeminiReading(
          question,
          selectedSpread?.name || '',
          cards
        );
        isAIGenerated = true;
      } catch (error) {
        console.error('Gemini generation failed, falling back to local:', error);
        interpretation = generateLocalReading(
          question,
          selectedSpread?.name || '',
          cards
        );
      }
    } else {
      // Use improved local reading
      interpretation = generateLocalReading(
        question,
        selectedSpread?.name || '',
        cards
      );
    }

    setUseAI(isAIGenerated);

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
    setLoading(false);
  };

  const handleNewReading = () => {
    setStep('question');
    setQuestion('');
    setSelectedSpread(null);
    setCurrentReading(null);
    setUseAI(false);
  };

  const handleViewReading = (reading: Reading) => {
    setCurrentReading(reading);
    setQuestion(reading.question);
    setSelectedSpread(reading.spread);
    setStep('reading');
    setShowHistory(false);
  };

  return (
    <main className="relative min-h-screen">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex justify-between items-center max-w-4xl mx-auto mb-4">
            <div className="flex-1"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 flex-1">
              AI 塔羅占卜
            </h1>
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setShowSettings(true)}
                className="text-purple-300 hover:text-white text-2xl transition-colors"
                title="設定"
              >
                ⚙️
              </button>
            </div>
          </div>
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
            isAIGenerated={useAI}
          />
        )}

        {showHistory && (
          <HistoryPanel
            onClose={() => setShowHistory(false)}
            onViewReading={handleViewReading}
          />
        )}

        {showSettings && (
          <SettingsPanel onClose={() => setShowSettings(false)} />
        )}
      </div>
    </main>
  );
}
