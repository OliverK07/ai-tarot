# AI 塔羅占卜

一個精美的 AI 驅動塔羅占卜網頁應用程式,使用 Next.js 建構,提供完整的塔羅牌閱讀體驗。

## 🌐 線上體驗

**GitHub Pages:** https://oliverk07.github.io/ai-tarot/

應用程式已部署至 GitHub Pages,可直接線上使用。GitHub Pages 版本使用內建牌義進行解讀(不依賴伺服器 API)。

## ✨ 功能特色

### 🎴 完整的塔羅牌系統
- **78 張塔羅牌** - 包含 22 張大阿爾克那與 56 張小阿爾克那
- **正位與逆位** - 每張牌都有正位和逆位的完整牌義
- **繁體中文** - 所有牌卡名稱、關鍵詞和牌義均為繁體中文(台灣)
- **雙語支援** - 卡牌同時顯示中文和英文名稱

### 🔮 三種牌陣選擇
1. **單張牌** - 快速獲得當下的指引
2. **三張牌:過去/現在/未來** - 了解時間線上的發展
3. **五張牌:情境分析** - 深入分析當前狀態、挑戰、建議、近期未來和最終結果

### 🤖 AI 解讀 (選用)
- 使用 OpenAI API 生成個人化、富有洞察力的解讀
- 如未設定 API key,自動使用內建的高品質牌義解讀
- 無縫降級機制,確保應用始終可用

### 💫 精美的使用者介面
- **神秘美學** - 深紫色、靛藍色調配金色點綴
- **流暢動畫** - 洗牌、抽牌、翻牌動畫效果
- **響應式設計** - 完美適配手機、平板和桌面設備
- **星空背景** - 動態星空效果營造神秘氛圍

### 📚 歷史記錄
- 自動儲存最近 10 次占卜記錄
- 使用瀏覽器本地儲存,資料私密安全
- 可隨時查看、重新閱讀或刪除歷史記錄

## 🚀 快速開始

### 前置需求
- Node.js 18.0 或更高版本
- npm 或 yarn

### 安裝步驟

1. **安裝依賴套件**
   ```bash
   npm install
   ```

2. **設定環境變數 (選用)**
   
   複製環境變數範例檔案:
   ```bash
   cp .env.example .env
   ```
   
   編輯 `.env` 檔案,設定 OpenAI API key (如果您想使用 AI 生成解讀):
   ```env
   OPENAI_API_KEY=your_api_key_here
   ```
   
   **注意:** 如果不設定 API key,應用程式仍可正常運作,會使用內建的牌義進行解讀。

3. **啟動開發伺服器**
   ```bash
   npm run dev
   ```
   
   在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 即可開始使用。

### 建置生產版本

```bash
npm run build
npm start
```

## 🌐 部署

### GitHub Pages (當前部署)

本專案已設定自動部署至 GitHub Pages:

- **線上網址:** https://oliverk07.github.io/ai-tarot/
- 推送到 `main` 分支時自動部署
- 使用 GitHub Actions 建置和部署
- 純靜態網站,使用內建牌義(不需要伺服器)

GitHub Pages 版本特點:
- ✅ 完全離線可用
- ✅ 不需要 API key
- ✅ 載入速度快
- ⚠️ 解讀使用內建牌義(無 AI 生成)

### 部署到 Vercel (支援 AI 功能)

如需 AI 生成的個人化解讀,可部署到 Vercel:

1. 將專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 匯入專案
3. 在 Vercel 的環境變數設定中加入 `OPENAI_API_KEY`
4. 部署!

Vercel 版本可使用 OpenAI API 生成更深入、個人化的解讀。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/OliverK07/ai-tarot)

## ⚙️ 環境變數

| 變數名稱 | 說明 | 必需 | 預設值 |
|---------|------|------|--------|
| `OPENAI_API_KEY` | OpenAI API 金鑰,用於生成 AI 解讀 | 否 | - |
| `OPENAI_API_BASE` | OpenAI API 基礎 URL (可設定相容服務) | 否 | `https://api.openai.com/v1` |
| `OPENAI_MODEL` | 使用的 OpenAI 模型 | 否 | `gpt-4o-mini` |

## 📖 使用說明

1. **輸入問題** - 在首頁輸入您的問題(選填),或直接選擇牌陣
2. **選擇牌陣** - 根據您的需求選擇單張牌、三張牌或五張牌陣
3. **洗牌抽牌** - 點擊「抽牌」按鈕,觀看精美的抽牌動畫
4. **閱讀解讀** - 查看牌卡和詳細解讀
5. **查看歷史** - 隨時回顧過往的占卜記錄

## 🛠️ 技術架構

### 核心技術
- **Next.js 15** - React 框架,使用 App Router
- **TypeScript** - 型別安全
- **Tailwind CSS** - 實用優先的 CSS 框架

### 專案結構
```
ai-tarot/
├── app/
│   ├── api/
│   │   └── reading/        # AI 解讀 API 路由
│   ├── globals.css         # 全域樣式
│   ├── layout.tsx          # 根佈局
│   └── page.tsx            # 首頁
├── components/
│   ├── CardDraw.tsx        # 抽牌元件
│   ├── HistoryPanel.tsx    # 歷史記錄面板
│   ├── QuestionForm.tsx    # 問題表單
│   ├── ReadingDisplay.tsx  # 解讀顯示
│   └── TarotCard.tsx       # 塔羅牌卡片
├── data/
│   ├── spreads.ts          # 牌陣定義
│   └── tarotDeck.ts        # 完整 78 張塔羅牌資料
├── lib/
│   └── tarotUtils.ts       # 工具函式
├── types/
│   └── tarot.ts            # TypeScript 型別定義
└── public/                 # 靜態資源

```

### 資料模型

#### TarotCard (塔羅牌)
```typescript
interface TarotCard {
  id: string;
  name: { zh: string; en: string };
  suit: 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';
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
```

#### Spread (牌陣)
```typescript
interface Spread {
  id: string;
  name: string;
  positions: string[];
  description: string;
}
```

#### Reading (占卜記錄)
```typescript
interface Reading {
  id: string;
  question: string;
  spread: Spread;
  cards: DrawnCard[];
  interpretation: string;
  timestamp: number;
}
```

## 🎨 自訂與擴展

### 新增牌陣

編輯 `data/spreads.ts`:

```typescript
{
  id: 'custom-spread',
  name: '自訂牌陣',
  positions: ['位置一', '位置二', '位置三'],
  description: '這是一個自訂牌陣的描述',
}
```

### 調整樣式

- 全域樣式: `app/globals.css`
- Tailwind 配置: `tailwind.config.ts`
- 顏色主題: 修改 CSS 變數 `--background` 和 `--foreground`

### 更換 AI 模型

在 `.env` 中設定不同的模型:

```env
OPENAI_MODEL=gpt-4
```

或使用相容 OpenAI 格式的其他服務:

```env
OPENAI_API_BASE=https://your-alternative-api.com/v1
OPENAI_MODEL=your-model-name
```

## 🔒 隱私與安全

- **本地儲存** - 所有占卜記錄僅儲存在您的瀏覽器本地,不會上傳到任何伺服器
- **API 安全** - OpenAI API key 僅在伺服器端使用,不會暴露給前端
- **無追蹤** - 應用程式不包含任何追蹤或分析程式碼

## 📄 授權

MIT License - 詳見 LICENSE 檔案

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request!

## 📧 聯絡

如有問題或建議,歡迎開啟 Issue。

---

**享受您的塔羅之旅! 🌟**
