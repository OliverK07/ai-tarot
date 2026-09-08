'use client';

import { useEffect, useState } from 'react';
import { Reading } from '@/types/tarot';
import { getReadings, deleteReading } from '@/lib/tarotUtils';

interface HistoryPanelProps {
  onClose: () => void;
  onViewReading: (reading: Reading) => void;
}

export default function HistoryPanel({
  onClose,
  onViewReading,
}: HistoryPanelProps) {
  const [readings, setReadings] = useState<Reading[]>([]);

  useEffect(() => {
    setReadings(getReadings());
  }, []);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('確定要刪除這次占卜記錄嗎?')) {
      deleteReading(id);
      setReadings(getReadings());
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-purple-900/90 to-indigo-900/90 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-purple-500/50">
        <div className="p-6 border-b border-purple-500/30 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-purple-200">歷史記錄</h2>
          <button
            onClick={onClose}
            className="text-purple-300 hover:text-white text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-5rem)]">
          {readings.length === 0 ? (
            <div className="text-center py-12 text-purple-300">
              <div className="text-5xl mb-4">🌙</div>
              <p>還沒有占卜記錄</p>
            </div>
          ) : (
            <div className="space-y-4">
              {readings.map((reading) => (
                <div
                  key={reading.id}
                  onClick={() => onViewReading(reading)}
                  className="bg-black/30 rounded-lg p-4 border border-purple-500/30 hover:border-purple-400 hover:bg-black/40 transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="text-sm text-purple-300 mb-1">
                        {formatDate(reading.timestamp)}
                      </div>
                      <div className="text-lg font-semibold text-white mb-1">
                        {reading.spread.name}
                      </div>
                      {reading.question && (
                        <div className="text-sm text-purple-200 line-clamp-2">
                          {reading.question}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={(e) => handleDelete(reading.id, e)}
                      className="text-red-400 hover:text-red-300 ml-4"
                    >
                      刪除
                    </button>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {reading.cards.map((drawnCard, i) => (
                      <div
                        key={i}
                        className="text-xs bg-purple-900/50 px-2 py-1 rounded"
                      >
                        {drawnCard.card.name.zh}
                        {drawnCard.isReversed && ' 逆'}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
