'use client';

import { useState, useEffect } from 'react';
import { getGeminiApiKey, setGeminiApiKey } from '@/lib/geminiReading';

interface SettingsPanelProps {
  onClose: () => void;
}

export default function SettingsPanel({ onClose }: SettingsPanelProps) {
  const [apiKey, setApiKeyLocal] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const key = getGeminiApiKey();
    if (key) {
      // Show masked version
      setApiKeyLocal(key.substring(0, 8) + '...' + key.substring(key.length - 4));
    }
  }, []);

  const handleSave = () => {
    setGeminiApiKey(apiKey);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1500);
  };

  const handleClear = () => {
    setGeminiApiKey('');
    setApiKeyLocal('');
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-purple-900/90 to-indigo-900/90 rounded-2xl max-w-md w-full shadow-2xl border border-purple-500/50">
        <div className="p-6 border-b border-purple-500/30 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-purple-200">設定</h2>
          <button
            onClick={onClose}
            className="text-purple-300 hover:text-white text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Gemini API Key (選用)
            </label>
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKeyLocal(e.target.value)}
              placeholder="AIza..."
              className="w-full px-4 py-2 bg-black/30 border border-purple-500/50 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <p className="text-xs text-purple-300 mt-2">
              設定 API key 可使用 Gemini AI 生成更豐富的解讀。
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline ml-1"
              >
                免費取得 API key
              </a>
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all shadow-lg"
            >
              {saved ? '✓ 已儲存' : '儲存'}
            </button>
            <button
              onClick={handleClear}
              className="bg-black/30 hover:bg-black/40 text-purple-200 font-semibold py-2 px-4 rounded-lg transition-all border border-purple-500/50 hover:border-purple-400"
            >
              清除
            </button>
          </div>

          <div className="bg-purple-900/30 rounded-lg p-3 text-xs text-purple-200">
            <p className="font-medium mb-1">💡 提示:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>API key 僅儲存在您的瀏覽器本地</li>
              <li>未設定時使用內建牌義解讀</li>
              <li>設定後可獲得 AI 個人化解讀</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
