# AI 塔羅占卜

一個精美的 AI 驅動塔羅占卜網頁應用程式,使用 Next.js 建構,提供完整的塔羅牌閱讀體驗。

## 🌐 線上體驗

**GitHub Pages:** https://oliverk07.github.io/ai-tarot/

應用程式已部署至 GitHub Pages,可直接線上使用。GitHub Pages 版本使用內建牌義進行解讀(不依賴伺服器 API)。

## ✨ 功能特色

### 🎴 完整的塔羅牌系統
- **78 張塔羅牌** - 包含 22 張大阿爾克那與 56 張小阿爾克那
- **真實牌卡藝術** - 使用 1909 年公有領域 Rider-Waite-Smith 牌卡插畫
- **正位與逆位** - 每張牌都有正位和逆位的完整牌義
- **繁體中文** - 所有牌卡名稱、關鍵詞和牌義均為繁體中文(台灣)
- **雙語支援** - 卡牌同時顯示中文和英文名稱

### 🔮 三種牌陣選擇
1. **單張牌** - 快速獲得當下的指引
2. **三張牌:過去/現在/未來** - 了解時間線上的發展
3. **五張牌:情境分析** - 深入分析當前狀態、挑戰、建議、近期未來和最終結果

### 🎯 智慧解讀系統
- **預設:本地智慧解讀** - 無需 API key,完全在瀏覽器中運作
  - 根據抽中的牌卡名稱、正逆位、關鍵詞生成專屬解讀
  - 自動偵測問題類型(事業/感情/決策等)並調整語氣
  - 每次抽牌都產生不同的綜合解讀,絕不使用固定模板
- **選用:Gemini AI 增強** - 可選擇啟用 Google Gemini 2.0 Flash 獲得更豐富的解讀
  - 免費 API key 可從 [Google AI Studio](https://aistudio.google.com/app/apikey) 取得
  - 在瀏覽器中直接調用,API key 儲存在本地,完全隱私
  - 適用於 GitHub Pages 靜態部署(無需伺服器)

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
- ✅ 本地智慧解讀 - 完全免設定,開箱即用
- ✅ 卡牌專屬綜合分析 - 根據實際抽中的牌卡生成解讀
- ✅ 選用 Gemini AI 增強 - 設定免費 API key 後可啟用
- ✅ 載入速度快,完全隱私安全

### 部署到 Vercel (可選)

您也可以將專案部署到 Vercel:

1. 將專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 匯入專案
3. (選用) 在 Vercel 的環境變數設定中加入 `NEXT_PUBLIC_GEMINI_API_KEY` 作為預設 API key
4. 部署!

**注意:** 現在使用 Gemini AI 解讀,無論部署在何處都能正常運作(包括 GitHub Pages)。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/OliverK07/ai-tarot)

## ⚙️ 環境變數與設定

### Gemini API Key 設定 (推薦)

本應用使用 **Google Gemini 2.0 Flash** 進行 AI 解讀。您可以透過兩種方式設定 API key:

1. **應用程式內設定 (推薦)**
   - 點擊右上角的 ⚙️ 設定按鈕
   - 輸入您的 Gemini API key
   - API key 僅儲存在您的瀏覽器本地 (localStorage)
   - 免費取得 API key: [Google AI Studio](https://aistudio.google.com/app/apikey)

2. **建置時環境變數**
   
   在 `.env.local` 檔案中設定:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   **注意:** 以 `NEXT_PUBLIC_` 開頭的變數會在建置時嵌入靜態檔案中,因此應用程式內設定更加安全。

### 環境變數參考

| 變數名稱 | 說明 | 必需 | 預設值 |
|---------|------|------|--------|
| `NEXT_PUBLIC_GEMINI_API_KEY` | Google Gemini API 金鑰 (建置時預設值) | 否 | - |
| `OPENAI_API_KEY` | ⚠️ 已棄用 - 舊版 OpenAI 整合,僅用於 Vercel 等有伺服器的部署 | 否 | - |

## 📖 使用說明

1. **輸入問題** - 在首頁輸入您的問題(選填),或直接選擇牌陣
2. **選擇牌陣** - 根據您的需求選擇單張牌、三張牌或五張牌陣
3. **洗牌抽牌** - 點擊「抽牌」按鈕,觀看精美的抽牌動畫
4. **閱讀解讀** - 查看牌卡和專屬的綜合解讀
   - 📖 **預設:本地智慧解讀** - 根據您抽中的牌卡、問題類型生成專屬解讀,每次都不同
   - ✨ **選用:Gemini AI 增強** - 點擊右上角 ⚙️ 設定免費 [API key](https://aistudio.google.com/app/apikey) 可啟用更豐富的 AI 解讀
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
│   ├── SettingsPanel.tsx   # 設定面板 (API key 管理)
│   └── TarotCard.tsx       # 塔羅牌卡片
├── data/
│   ├── spreads.ts          # 牌陣定義
│   └── tarotDeck.ts        # 完整 78 張塔羅牌資料
├── lib/
│   ├── geminiReading.ts    # Gemini AI 整合
│   └── tarotUtils.ts       # 工具函式與本地解讀
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

### (選用) 取得免費 Gemini API Key 以啟用 AI 增強解讀

**預設的本地解讀已經很好用!** 如果您想體驗更豐富、更流暢的 AI 生成解讀,可以啟用 Gemini:

1. 前往 [Google AI Studio](https://aistudio.google.com/app/apikey)
2. 使用您的 Google 帳號登入
3. 點擊「Create API Key」
4. 複製產生的 API key
5. 在應用程式中點擊右上角 ⚙️,貼上 API key 並儲存

**注意:** 
- 無需 API key 即可使用完整功能,本地解讀已包含卡牌專屬綜合分析
- Gemini API 提供免費額度,適合個人使用
- API key 僅儲存在您的瀏覽器本地,不會上傳到任何伺服器
- 您隨時可以在設定中清除或更換 API key

## 🔒 隱私與安全

- **本地儲存** - 所有占卜記錄僅儲存在您的瀏覽器本地,不會上傳到任何伺服器
- **API Key 安全** - Gemini API key 僅儲存在您的瀏覽器 localStorage 中,僅您自己的裝置可存取
- **直接通訊** - AI 請求從您的瀏覽器直接發送到 Google,不經過本應用的伺服器
- **無追蹤** - 應用程式不包含任何追蹤或分析程式碼
- **開源透明** - 完整原始碼公開,可自行檢視和審核

## 🎨 牌卡藝術版權聲明

本應用使用的塔羅牌圖像來自 **1909 年 Rider-Waite-Smith 塔羅牌**,由藝術家 **Pamela Colman Smith** 繪製。這些圖像在美國屬於公有領域(public domain)。

- **來源**: [Wikimedia Commons - Rider-Waite Tarot](https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck)
- **藝術家**: Pamela Colman Smith (1878-1951)
- **出版年份**: 1909
- **授權**: 公有領域 / Public Domain

圖像檔案位於 `public/cards/` 目錄下,所有 78 張牌卡均來自 Wikimedia Commons 的公開檔案庫。

## 📄 授權

MIT License - 詳見 LICENSE 檔案

### 第三方內容授權

- **塔羅牌圖像**: 公有領域 (Public Domain) - Pamela Colman Smith, 1909 Rider-Waite-Smith Tarot

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request!

## 📧 聯絡

如有問題或建議,歡迎開啟 Issue。

---

**享受您的塔羅之旅! 🌟**
