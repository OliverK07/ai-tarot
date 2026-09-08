'use client';

import { useState } from 'react';
import { Spread } from '@/types/tarot';

interface QuestionFormProps {
  onStart: (question: string, spread: Spread) => void;
  spreads: Spread[];
  onShowHistory: () => void;
}

export default function QuestionForm({
  onStart,
  spreads,
  onShowHistory,
}: QuestionFormProps) {
  const [question, setQuestion] = useState('');
  const [selectedSpread, setSelectedSpread] = useState<Spread | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSpread) {
      onStart(question, selectedSpread);
    }
  };

  return (
    <div className="max-w-2xl mx-auto animate-slide-up">
      <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-500/30">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="question"
              className="block text-lg font-medium text-purple-200 mb-3"
            >
              你想問什麼? <span className="text-sm text-purple-300">(選填)</span>
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="輸入你的問題或疑惑..."
              className="w-full px-4 py-3 bg-black/30 border border-purple-500/50 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              rows={4}
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-purple-200 mb-3">
              選擇牌陣
            </label>
            <div className="space-y-3">
              {spreads.map((spread) => (
                <button
                  key={spread.id}
                  type="button"
                  onClick={() => setSelectedSpread(spread)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedSpread?.id === spread.id
                      ? 'bg-purple-600/30 border-purple-400 shadow-lg'
                      : 'bg-black/20 border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-900/20'
                  }`}
                >
                  <div className="font-semibold text-white mb-1">
                    {spread.name}
                  </div>
                  <div className="text-sm text-purple-200">
                    {spread.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={!selectedSpread}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              開始占卜
            </button>
            <button
              type="button"
              onClick={onShowHistory}
              className="bg-black/30 hover:bg-black/40 text-purple-200 font-semibold py-3 px-6 rounded-lg transition-all border border-purple-500/50 hover:border-purple-400"
            >
              歷史記錄
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
