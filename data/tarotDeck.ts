import { TarotCard } from '@/types/tarot';

export const tarotDeck: TarotCard[] = [
  // Major Arcana (大阿爾克那)
  {
    id: 'major-00',
    name: { zh: '愚者', en: 'The Fool' },
    suit: 'major',
    number: 0,
    keywords: {
      upright: ['新開始', '純真', '自發性', '自由精神'],
      reversed: ['魯莽', '冒險', '愚蠢', '缺乏方向'],
    },
    meanings: {
      upright: '愚者代表新的開始、純真無邪的冒險精神。這是一個充滿可能性的時刻，你準備踏上新的旅程，帶著信心和好奇心向前邁進。這張牌鼓勵你保持開放的心態，勇於嘗試新事物，不要被恐懼束縛。',
      reversed: '逆位的愚者警告你可能過於魯莽或缺乏計劃。你可能正在做出不負責任的決定，或是缺乏必要的準備就貿然行動。需要更加謹慎地評估風險，並培養更好的判斷力。',
    },
  },
  {
    id: 'major-01',
    name: { zh: '魔術師', en: 'The Magician' },
    suit: 'major',
    number: 1,
    keywords: {
      upright: ['顯化', '資源', '力量', '行動'],
      reversed: ['操縱', '缺乏能量', '溝通不良'],
    },
    meanings: {
      upright: '魔術師象徵著將想法轉化為現實的能力。你擁有所需的所有資源和技能來實現目標。這張牌提醒你專注於自己的意圖，運用智慧和創造力來顯化夢想。現在是採取行動的時候。',
      reversed: '逆位的魔術師可能表示你在濫用自己的天賦，或是缺乏信心來發揮潛力。可能存在欺騙或操縱的情況，或者你感到能量分散、難以集中注意力。',
    },
  },
  {
    id: 'major-02',
    name: { zh: '女祭司', en: 'The High Priestess' },
    suit: 'major',
    number: 2,
    keywords: {
      upright: ['直覺', '神聖知識', '潛意識', '內在智慧'],
      reversed: ['隱藏的秘密', '缺乏中心', '壓抑的情感'],
    },
    meanings: {
      upright: '女祭司代表直覺、內在智慧和神秘知識。她鼓勵你傾聽內心的聲音，相信自己的直覺。現在不是急於行動的時候，而是要向內探索，讓潛意識的智慧浮現。',
      reversed: '逆位的女祭司暗示你可能忽視了自己的直覺，或是有重要的信息被隱藏。你可能感到與內在自我脫節，或是壓抑了真實的情感和想法。',
    },
  },
  {
    id: 'major-03',
    name: { zh: '皇后', en: 'The Empress' },
    suit: 'major',
    number: 3,
    keywords: {
      upright: ['豐饒', '創造', '滋養', '大自然'],
      reversed: ['創意受阻', '依賴', '空虛'],
    },
    meanings: {
      upright: '皇后象徵豐盛、創造力和母性能量。這張牌預示著成長、繁榮和豐收的時期。她鼓勵你滋養自己和他人，表達創造力，並與自然連結。',
      reversed: '逆位的皇后可能表示創意受阻或感到空虛。你可能過度依賴他人，或是在照顧自己方面有所不足。需要重新連接你的創造力和自我關懷。',
    },
  },
  {
    id: 'major-04',
    name: { zh: '皇帝', en: 'The Emperor' },
    suit: 'major',
    number: 4,
    keywords: {
      upright: ['權威', '結構', '掌控', '父性'],
      reversed: ['專制', '僵化', '缺乏紀律'],
    },
    meanings: {
      upright: '皇帝代表權威、結構和穩定。他象徵著建立秩序、設定界限和負責任的領導。這張牌鼓勵你運用邏輯思維，建立穩固的基礎，並掌控局面。',
      reversed: '逆位的皇帝暗示可能存在過度控制或濫用權力的情況。你可能過於僵化、缺乏彈性，或是在紀律和結構方面有所不足。',
    },
  },
  {
    id: 'major-05',
    name: { zh: '教皇', en: 'The Hierophant' },
    suit: 'major',
    number: 5,
    keywords: {
      upright: ['傳統', '順從', '道德', '知識'],
      reversed: ['反叛', '非正統', '自由'],
    },
    meanings: {
      upright: '教皇象徵傳統價值觀、精神智慧和正統教育。這張牌鼓勵你尊重傳統、尋求指導，並在既定的結構中學習。它也代表信仰和道德準則。',
      reversed: '逆位的教皇表示你可能在挑戰傳統或尋求另類的道路。你渴望打破常規，以自己的方式探索精神和道德問題。',
    },
  },
  {
    id: 'major-06',
    name: { zh: '戀人', en: 'The Lovers' },
    suit: 'major',
    number: 6,
    keywords: {
      upright: ['愛', '和諧', '關係', '選擇'],
      reversed: ['不平衡', '失調', '價值觀衝突'],
    },
    meanings: {
      upright: '戀人代表深刻的連結、和諧的關係和重要的選擇。這張牌象徵著愛、價值觀的一致和心靈的結合。它鼓勵你做出與你的價值觀一致的選擇。',
      reversed: '逆位的戀人暗示關係中的不和諧或價值觀的衝突。你可能面臨困難的選擇，或是在關係中感到失衡和不滿足。',
    },
  },
  {
    id: 'major-07',
    name: { zh: '戰車', en: 'The Chariot' },
    suit: 'major',
    number: 7,
    keywords: {
      upright: ['意志', '控制', '勝利', '決心'],
      reversed: ['缺乏方向', '失控', '侵略'],
    },
    meanings: {
      upright: '戰車象徵勝利、決心和自我控制。這張牌表示通過專注和意志力克服障礙。你正在朝著目標前進，保持方向和紀律將帶來成功。',
      reversed: '逆位的戰車暗示缺乏方向或失去控制。你可能感到分散注意力，或是過於激進。需要重新找回焦點和平衡。',
    },
  },
  {
    id: 'major-08',
    name: { zh: '力量', en: 'Strength' },
    suit: 'major',
    number: 8,
    keywords: {
      upright: ['勇氣', '耐心', '慈悲', '內在力量'],
      reversed: ['自我懷疑', '弱點', '不安全感'],
    },
    meanings: {
      upright: '力量代表內在的勇氣、耐心和慈悲。這張牌鼓勵你以溫柔而堅定的方式面對挑戰，運用內在的力量而非外在的強迫。真正的力量來自於自我控制和同理心。',
      reversed: '逆位的力量暗示自我懷疑或內在的弱點。你可能缺乏信心，或是在情緒上感到不穩定。需要重建自信和內在的平衡。',
    },
  },
  {
    id: 'major-09',
    name: { zh: '隱者', en: 'The Hermit' },
    suit: 'major',
    number: 9,
    keywords: {
      upright: ['內省', '尋求真理', '內在指引', '孤獨'],
      reversed: ['孤立', '逃避', '失去方向'],
    },
    meanings: {
      upright: '隱者象徵內省、靈性追尋和內在智慧。這張牌鼓勵你退後一步，向內探索，尋找真理和啟蒙。獨處的時光是必要的，以便獲得更深的理解。',
      reversed: '逆位的隱者暗示過度孤立或逃避現實。你可能感到迷失或與世界脫節。需要找到內在探索和社交連結之間的平衡。',
    },
  },
  {
    id: 'major-10',
    name: { zh: '命運之輪', en: 'Wheel of Fortune' },
    suit: 'major',
    number: 10,
    keywords: {
      upright: ['變化', '循環', '命運', '轉折點'],
      reversed: ['厄運', '抗拒變化', '失控'],
    },
    meanings: {
      upright: '命運之輪代表生命的循環、變化和新的機會。這張牌表示命運的轉折點，提醒你變化是不可避免的。接受生命的起伏，並相信宇宙的安排。',
      reversed: '逆位的命運之輪暗示不幸或抗拒變化。你可能感到失控或陷入負面循環。需要接受變化並尋找新的視角。',
    },
  },
  {
    id: 'major-11',
    name: { zh: '正義', en: 'Justice' },
    suit: 'major',
    number: 11,
    keywords: {
      upright: ['公平', '真理', '因果', '法律'],
      reversed: ['不公正', '失衡', '逃避責任'],
    },
    meanings: {
      upright: '正義象徵公平、真理和因果法則。這張牌表示誠實和正直將獲得回報。它鼓勵你做出公正的決定，並對自己的行為負責。',
      reversed: '逆位的正義暗示不公正或缺乏平衡。你可能面臨不公平的對待，或是在逃避應負的責任。需要重新審視情況並尋求真相。',
    },
  },
  {
    id: 'major-12',
    name: { zh: '吊人', en: 'The Hanged Man' },
    suit: 'major',
    number: 12,
    keywords: {
      upright: ['暫停', '臣服', '新視角', '犧牲'],
      reversed: ['拖延', '抗拒', '停滯'],
    },
    meanings: {
      upright: '吊人代表暫停、臣服和從新角度看待事物。這張牌鼓勵你放手、接受當前的情況，並從不同的視角獲得洞察。有時候，不行動比行動更有智慧。',
      reversed: '逆位的吊人暗示抗拒或不必要的拖延。你可能陷入停滯，或是不願意改變視角。需要突破僵局並採取行動。',
    },
  },
  {
    id: 'major-13',
    name: { zh: '死神', en: 'Death' },
    suit: 'major',
    number: 13,
    keywords: {
      upright: ['結束', '轉變', '過渡', '重生'],
      reversed: ['抗拒變化', '停滯', '無法放手'],
    },
    meanings: {
      upright: '死神象徵結束、轉變和新的開始。這張牌並非字面意義的死亡，而是代表生命中某個階段的結束，為新事物騰出空間。擁抱變化，放下過去。',
      reversed: '逆位的死神暗示抗拒必要的變化。你可能緊抓著已經過時的事物，害怕放手。需要接受轉變並向前邁進。',
    },
  },
  {
    id: 'major-14',
    name: { zh: '節制', en: 'Temperance' },
    suit: 'major',
    number: 14,
    keywords: {
      upright: ['平衡', '耐心', '和諧', '中庸'],
      reversed: ['失衡', '過度', '缺乏和諧'],
    },
    meanings: {
      upright: '節制代表平衡、耐心和溫和的方法。這張牌鼓勵你尋找中間路線，融合對立面，並保持內在的和諧。透過耐心和節制，你將實現目標。',
      reversed: '逆位的節制暗示失去平衡或過度放縱。你可能在生活的某些方面走極端，或是感到內在的不和諧。需要重新建立平衡。',
    },
  },
  {
    id: 'major-15',
    name: { zh: '惡魔', en: 'The Devil' },
    suit: 'major',
    number: 15,
    keywords: {
      upright: ['束縛', '成癮', '物質主義', '陰影'],
      reversed: ['解放', '覺醒', '脫離束縛'],
    },
    meanings: {
      upright: '惡魔象徵束縛、成癮和物質慾望的奴役。這張牌提醒你注意那些限制自由的模式和依賴。它鼓勵你正視陰影面，並認識到你擁有打破鎖鏈的力量。',
      reversed: '逆位的惡魔表示從束縛中解放或覺醒。你正在意識到自己的限制並採取步驟重獲自由。這是打破不健康模式的時候。',
    },
  },
  {
    id: 'major-16',
    name: { zh: '塔', en: 'The Tower' },
    suit: 'major',
    number: 16,
    keywords: {
      upright: ['突然改變', '動盪', '啟示', '破壞'],
      reversed: ['避免災難', '延遲', '恐懼變化'],
    },
    meanings: {
      upright: '塔代表突然而劇烈的變化、啟示和舊結構的崩潰。雖然這可能令人不安，但它清除了不穩定的基礎，為新的、更真實的事物騰出空間。',
      reversed: '逆位的塔暗示延遲的動盪或對變化的恐懼。你可能正在避免必要的變革，但這只會延長不穩定。接受變化將帶來解放。',
    },
  },
  {
    id: 'major-17',
    name: { zh: '星星', en: 'The Star' },
    suit: 'major',
    number: 17,
    keywords: {
      upright: ['希望', '信念', '靈性', '寧靜'],
      reversed: ['失望', '失去信念', '絕望'],
    },
    meanings: {
      upright: '星星象徵希望、信念和靈性的更新。這張牌帶來寧靜和樂觀，預示著療癒和新的可能性。相信宇宙的指引，保持對未來的信念。',
      reversed: '逆位的星星暗示失去希望或信念的動搖。你可能感到失望或與靈性脫節。需要重新連接內在的光明並恢復希望。',
    },
  },
  {
    id: 'major-18',
    name: { zh: '月亮', en: 'The Moon' },
    suit: 'major',
    number: 18,
    keywords: {
      upright: ['幻覺', '恐懼', '潛意識', '直覺'],
      reversed: ['揭示真相', '克服恐懼', '清晰'],
    },
    meanings: {
      upright: '月亮代表幻覺、恐懼和潛意識的領域。這張牌提醒你事情可能並非表面所見，需要信任直覺並面對隱藏的恐懼。在迷霧中前行需要勇氣和內在的指引。',
      reversed: '逆位的月亮暗示真相的揭示或恐懼的克服。你正在從迷惑中走出，獲得清晰和理解。幻象開始消散。',
    },
  },
  {
    id: 'major-19',
    name: { zh: '太陽', en: 'The Sun' },
    suit: 'major',
    number: 19,
    keywords: {
      upright: ['成功', '喜悅', '活力', '真實'],
      reversed: ['黯淡', '悲觀', '延遲的成功'],
    },
    meanings: {
      upright: '太陽象徵成功、喜悅和充沛的能量。這張牌帶來光明、溫暖和積極的結果。一切都在你的掌握之中,這是慶祝和真實表達自我的時候。',
      reversed: '逆位的太陽暗示暫時的陰霾或延遲的成功。你可能感到悲觀或能量低落。但光明仍在,只是需要更多時間才能完全顯現。',
    },
  },
  {
    id: 'major-20',
    name: { zh: '審判', en: 'Judgement' },
    suit: 'major',
    number: 20,
    keywords: {
      upright: ['覺醒', '決定', '贖罪', '重生'],
      reversed: ['自我懷疑', '拒絕成長', '缺乏覺察'],
    },
    meanings: {
      upright: '審判代表覺醒、內在的召喚和重生。這張牌鼓勵你反思過去、原諒自己和他人,並回應更高的呼召。這是做出重要決定和擁抱新生活的時候。',
      reversed: '逆位的審判暗示自我懷疑或拒絕成長。你可能逃避必要的反思,或是對自己過於苛刻。需要寬恕自己並向前邁進。',
    },
  },
  {
    id: 'major-21',
    name: { zh: '世界', en: 'The World' },
    suit: 'major',
    number: 21,
    keywords: {
      upright: ['完成', '成就', '圓滿', '整合'],
      reversed: ['未完成', '缺乏閉合', '尋求結束'],
    },
    meanings: {
      upright: '世界象徵完成、成就和圓滿的結局。這張牌表示一個重要周期的結束和所有元素的和諧整合。你已經達成目標,可以慶祝成功並準備迎接新的旅程。',
      reversed: '逆位的世界暗示未完成或缺乏結束。你可能接近目標但尚未達成,或是感到某些方面仍不完整。需要持續努力以實現真正的圓滿。',
    },
  },

  // Wands (權杖)
  {
    id: 'wands-01',
    name: { zh: '權杖一', en: 'Ace of Wands' },
    suit: 'wands',
    number: 1,
    keywords: {
      upright: ['創造力', '靈感', '新機會', '熱情'],
      reversed: ['創意受阻', '延遲', '缺乏方向'],
    },
    meanings: {
      upright: '權杖一代表新的創意火花、靈感和充滿活力的開始。這是創新計劃和激情專案的絕佳時機。抓住新機會,讓你的創造力自由流動。',
      reversed: '逆位的權杖一暗示創意受阻或缺乏動力。你可能感到計劃延遲或失去熱情。需要重新點燃內在的火焰並找到新的靈感來源。',
    },
  },
  {
    id: 'wands-02',
    name: { zh: '權杖二', en: 'Two of Wands' },
    suit: 'wands',
    number: 2,
    keywords: {
      upright: ['計劃', '決定', '探索', '遠見'],
      reversed: ['猶豫不決', '恐懼', '缺乏計劃'],
    },
    meanings: {
      upright: '權杖二象徵計劃、決策和對未來的遠見。你正站在十字路口,擁有多種選擇。這張牌鼓勵你評估選項,制定策略,並勇敢地向前邁進。',
      reversed: '逆位的權杖二暗示猶豫不決或對未來的恐懼。你可能缺乏明確的計劃或害怕做出承諾。需要克服猶豫並採取行動。',
    },
  },
  {
    id: 'wands-03',
    name: { zh: '權杖三', en: 'Three of Wands' },
    suit: 'wands',
    number: 3,
    keywords: {
      upright: ['擴展', '遠見', '機會', '領先'],
      reversed: ['挫折', '延遲', '缺乏遠見'],
    },
    meanings: {
      upright: '權杖三代表擴展、成長和把握機會。你的努力開始結出果實,新的視野正在展開。這張牌鼓勵你展望更遠的未來,並為下一步做好準備。',
      reversed: '逆位的權杖三暗示計劃受阻或缺乏遠見。你可能遇到延遲或未能看到更大的圖景。需要重新評估策略並保持耐心。',
    },
  },
  {
    id: 'wands-04',
    name: { zh: '權杖四', en: 'Four of Wands' },
    suit: 'wands',
    number: 4,
    keywords: {
      upright: ['慶祝', '和諧', '家庭', '穩定'],
      reversed: ['衝突', '不穩定', '缺乏支持'],
    },
    meanings: {
      upright: '權杖四象徵慶祝、和諧和穩定的基礎。這是慶祝成就、享受家庭溫暖和社群支持的時候。你的努力獲得認可,可以暫時放鬆享受成果。',
      reversed: '逆位的權杖四暗示家庭或社群的不和諧。你可能感到缺乏支持或面臨關係中的衝突。需要修復關係並重建穩定。',
    },
  },
  {
    id: 'wands-05',
    name: { zh: '權杖五', en: 'Five of Wands' },
    suit: 'wands',
    number: 5,
    keywords: {
      upright: ['競爭', '衝突', '挑戰', '緊張'],
      reversed: ['避免衝突', '和解', '內在衝突'],
    },
    meanings: {
      upright: '權杖五代表競爭、衝突和意見分歧。你可能面臨挑戰或與他人的競爭。這張牌鼓勵你以建設性的方式處理衝突,並從挑戰中學習。',
      reversed: '逆位的權杖五暗示避免衝突或內在的掙扎。你可能選擇逃避爭執,或是在內心經歷衝突。尋找和平解決方案很重要。',
    },
  },
  {
    id: 'wands-06',
    name: { zh: '權杖六', en: 'Six of Wands' },
    suit: 'wands',
    number: 6,
    keywords: {
      upright: ['勝利', '成功', '認可', '自信'],
      reversed: ['挫敗', '缺乏認可', '自我懷疑'],
    },
    meanings: {
      upright: '權杖六象徵勝利、公眾認可和成功。你的努力得到回報,並獲得他人的讚賞。這張牌鼓勵你慶祝成就,並以此建立自信。',
      reversed: '逆位的權杖六暗示挫敗或缺乏認可。你可能感到努力未被看見,或是對自己的能力產生懷疑。需要重建自信並繼續前進。',
    },
  },
  {
    id: 'wands-07',
    name: { zh: '權杖七', en: 'Seven of Wands' },
    suit: 'wands',
    number: 7,
    keywords: {
      upright: ['防禦', '堅持', '挑戰', '毅力'],
      reversed: ['屈服', '疲憊', '放棄'],
    },
    meanings: {
      upright: '權杖七代表防禦、堅持立場和面對挑戰。你可能需要捍衛自己的位置或信念。這張牌鼓勵你展現勇氣和毅力,即使面對困難也不放棄。',
      reversed: '逆位的權杖七暗示疲憊或準備放棄。你可能感到被壓倒或缺乏繼續戰鬥的能量。考慮是否值得堅持,或是需要重新評估策略。',
    },
  },
  {
    id: 'wands-08',
    name: { zh: '權杖八', en: 'Eight of Wands' },
    suit: 'wands',
    number: 8,
    keywords: {
      upright: ['快速行動', '進展', '消息', '移動'],
      reversed: ['延遲', '受阻', '緩慢'],
    },
    meanings: {
      upright: '權杖八象徵快速的行動、突然的進展和事情的加速。你可能收到好消息或經歷快速的變化。這張牌鼓勵你保持動力並隨機應變。',
      reversed: '逆位的權杖八暗示延遲或受阻的進展。事情可能進展緩慢或遇到障礙。需要耐心等待並調整期望。',
    },
  },
  {
    id: 'wands-09',
    name: { zh: '權杖九', en: 'Nine of Wands' },
    suit: 'wands',
    number: 9,
    keywords: {
      upright: ['韌性', '堅持', '警惕', '防衛'],
      reversed: ['偏執', '疲憊', '放棄'],
    },
    meanings: {
      upright: '權杖九代表韌性、堅持和在逆境中的力量。你可能經歷了挑戰但仍然站立。這張牌鼓勵你保持警惕,但也要相信自己有能力克服困難。',
      reversed: '逆位的權杖九暗示過度防衛或準備放棄。你可能感到精疲力盡或變得偏執。需要放鬆警惕並考慮尋求支持。',
    },
  },
  {
    id: 'wands-10',
    name: { zh: '權杖十', en: 'Ten of Wands' },
    suit: 'wands',
    number: 10,
    keywords: {
      upright: ['負擔', '責任', '壓力', '過勞'],
      reversed: ['放下負擔', '委派', '解脫'],
    },
    meanings: {
      upright: '權杖十象徵沉重的負擔、過度的責任和壓力。你可能承擔了太多,感到疲憊不堪。這張牌提醒你考慮委派任務或放下一些責任。',
      reversed: '逆位的權杖十暗示開始放下負擔或尋求幫助。你正在學習設定界限並減輕壓力。這是重新評估優先事項的時候。',
    },
  },
  {
    id: 'wands-11',
    name: { zh: '權杖侍者', en: 'Page of Wands' },
    suit: 'wands',
    number: 11,
    keywords: {
      upright: ['探索', '熱情', '發現', '自由精神'],
      reversed: ['缺乏方向', '躁動', '延遲'],
    },
    meanings: {
      upright: '權杖侍者代表探索精神、熱情和新的發現。這張牌鼓勵你保持好奇心,勇於嘗試新事物,並追隨你的熱情。新的機會正在出現。',
      reversed: '逆位的權杖侍者暗示缺乏方向或躁動不安。你可能感到迷失或難以專注。需要找到真正激發你熱情的事物。',
    },
  },
  {
    id: 'wands-12',
    name: { zh: '權杖騎士', en: 'Knight of Wands' },
    suit: 'wands',
    number: 12,
    keywords: {
      upright: ['冒險', '衝動', '能量', '行動'],
      reversed: ['魯莽', '不耐煩', '缺乏計劃'],
    },
    meanings: {
      upright: '權杖騎士象徵冒險精神、快速行動和充沛的能量。這張牌鼓勵你勇敢追求目標,擁抱變化,並以熱情投入行動。',
      reversed: '逆位的權杖騎士暗示魯莽或過度衝動。你可能缺乏計劃就貿然行動,或是變得不耐煩。需要平衡熱情與謹慎。',
    },
  },
  {
    id: 'wands-13',
    name: { zh: '權杖王后', en: 'Queen of Wands' },
    suit: 'wands',
    number: 13,
    keywords: {
      upright: ['自信', '魅力', '獨立', '活力'],
      reversed: ['嫉妒', '缺乏安全感', '專橫'],
    },
    meanings: {
      upright: '權杖王后代表自信、魅力和獨立精神。她充滿活力和創造力,能夠激勵他人。這張牌鼓勵你展現真實的自我,並以熱情領導。',
      reversed: '逆位的權杖王后暗示嫉妒或缺乏安全感。你可能變得專橫或過度控制。需要重建自信並尊重他人的界限。',
    },
  },
  {
    id: 'wands-14',
    name: { zh: '權杖國王', en: 'King of Wands' },
    suit: 'wands',
    number: 14,
    keywords: {
      upright: ['領導', '願景', '企業家精神', '榮譽'],
      reversed: ['專制', '缺乏遠見', '不負責任'],
    },
    meanings: {
      upright: '權杖國王象徵強大的領導力、遠見和企業家精神。他自信、有魅力,並能夠將願景變為現實。這張牌鼓勵你承擔領導角色並追求雄心壯志。',
      reversed: '逆位的權杖國王暗示專制或濫用權力。你可能缺乏遠見或在領導方面不負責任。需要以更平衡和尊重的方式使用權力。',
    },
  },

  // Cups (聖杯)
  {
    id: 'cups-01',
    name: { zh: '聖杯一', en: 'Ace of Cups' },
    suit: 'cups',
    number: 1,
    keywords: {
      upright: ['愛', '新感情', '情感', '創造力'],
      reversed: ['情感受阻', '壓抑', '失望'],
    },
    meanings: {
      upright: '聖杯一代表新的情感開始、愛和創造力的流動。這張牌象徵心的開放和深刻的情感連結。擁抱新的關係或創意靈感。',
      reversed: '逆位的聖杯一暗示情感受阻或內心的空虛。你可能壓抑感受或經歷情感的失望。需要重新連接你的內心世界。',
    },
  },
  {
    id: 'cups-02',
    name: { zh: '聖杯二', en: 'Two of Cups' },
    suit: 'cups',
    number: 2,
    keywords: {
      upright: ['夥伴關係', '連結', '愛情', '和諧'],
      reversed: ['失衡', '分離', '不和'],
    },
    meanings: {
      upright: '聖杯二象徵深刻的連結、夥伴關係和相互尊重的關係。這張牌代表愛情、友誼或商業合作中的和諧與平衡。',
      reversed: '逆位的聖杯二暗示關係中的失衡或分離。你可能經歷不和或感到與他人疏離。需要溝通並重建連結。',
    },
  },
  {
    id: 'cups-03',
    name: { zh: '聖杯三', en: 'Three of Cups' },
    suit: 'cups',
    number: 3,
    keywords: {
      upright: ['慶祝', '友誼', '社群', '喜悅'],
      reversed: ['過度放縱', '孤立', '社交問題'],
    },
    meanings: {
      upright: '聖杯三代表慶祝、友誼和社交喜悅。這是與親朋好友聚會、慶祝成就和享受生活的時候。社群的支持帶來快樂。',
      reversed: '逆位的聖杯三暗示社交孤立或過度放縱。你可能感到與他人疏離,或是在慶祝中失去平衡。需要尋找健康的社交連結。',
    },
  },
  {
    id: 'cups-04',
    name: { zh: '聖杯四', en: 'Four of Cups' },
    suit: 'cups',
    number: 4,
    keywords: {
      upright: ['沉思', '不滿', '冷漠', '重新評估'],
      reversed: ['覺醒', '新視角', '動力'],
    },
    meanings: {
      upright: '聖杯四象徵沉思、內省和對現狀的不滿。你可能感到冷漠或忽視了眼前的機會。這張牌鼓勵你重新評估優先事項並打開心扉。',
      reversed: '逆位的聖杯四暗示從冷漠中覺醒。你開始注意到新的機會並重新獲得動力。這是改變視角和採取行動的時候。',
    },
  },
  {
    id: 'cups-05',
    name: { zh: '聖杯五', en: 'Five of Cups' },
    suit: 'cups',
    number: 5,
    keywords: {
      upright: ['失落', '悲傷', '後悔', '失望'],
      reversed: ['接受', '向前邁進', '寬恕'],
    },
    meanings: {
      upright: '聖杯五代表失落、悲傷和失望。你可能專注於失去的東西而忽視了仍然擁有的。這張牌鼓勵你悲傷,但也要記得向前看。',
      reversed: '逆位的聖杯五暗示開始接受損失並向前邁進。你正在從悲傷中恢復,學習寬恕,並重新發現希望。',
    },
  },
  {
    id: 'cups-06',
    name: { zh: '聖杯六', en: 'Six of Cups' },
    suit: 'cups',
    number: 6,
    keywords: {
      upright: ['懷舊', '童年', '純真', '重聚'],
      reversed: ['困在過去', '不成熟', '無法放手'],
    },
    meanings: {
      upright: '聖杯六象徵懷舊、童年回憶和純真的快樂。這張牌可能帶來重聚或喚起過去美好的記憶。珍惜這些時刻,但也要活在當下。',
      reversed: '逆位的聖杯六暗示困在過去或不成熟的行為。你可能無法放下過去,或是以不切實際的方式美化歷史。需要向前看。',
    },
  },
  {
    id: 'cups-07',
    name: { zh: '聖杯七', en: 'Seven of Cups' },
    suit: 'cups',
    number: 7,
    keywords: {
      upright: ['選擇', '幻想', '幻覺', '白日夢'],
      reversed: ['現實檢查', '決定', '清晰'],
    },
    meanings: {
      upright: '聖杯七代表選擇、幻想和可能性。你可能面臨多種選項,但需要小心幻覺和不切實際的期望。保持清醒的判斷力。',
      reversed: '逆位的聖杯七暗示從幻想中醒來,面對現實。你開始看清楚選項並做出實際的決定。這是獲得清晰的時候。',
    },
  },
  {
    id: 'cups-08',
    name: { zh: '聖杯八', en: 'Eight of Cups' },
    suit: 'cups',
    number: 8,
    keywords: {
      upright: ['放棄', '尋找', '離開', '更深的意義'],
      reversed: ['恐懼改變', '困住', '拖延'],
    },
    meanings: {
      upright: '聖杯八象徵離開不再滿足的情況,尋求更深的意義。雖然這可能令人不安,但這是尋找真正滿足的必要步驟。',
      reversed: '逆位的聖杯八暗示害怕離開或感到困住。你可能知道需要改變但缺乏勇氣行動。需要面對恐懼並向前邁進。',
    },
  },
  {
    id: 'cups-09',
    name: { zh: '聖杯九', en: 'Nine of Cups' },
    suit: 'cups',
    number: 9,
    keywords: {
      upright: ['滿足', '願望成真', '快樂', '富足'],
      reversed: ['空虛', '貪婪', '不滿'],
    },
    meanings: {
      upright: '聖杯九代表滿足、情感的富足和願望的實現。這是"願望牌",表示你的夢想正在成真。享受這個快樂和滿足的時刻。',
      reversed: '逆位的聖杯九暗示內在的空虛或不滿。即使願望實現,你可能仍感到不足或發現物質成功並未帶來真正的快樂。',
    },
  },
  {
    id: 'cups-10',
    name: { zh: '聖杯十', en: 'Ten of Cups' },
    suit: 'cups',
    number: 10,
    keywords: {
      upright: ['和諧', '家庭', '幸福', '情感實現'],
      reversed: ['家庭衝突', '破碎的關係', '失和'],
    },
    meanings: {
      upright: '聖杯十象徵情感的圓滿、家庭的和諧和持久的幸福。這張牌代表愛、喜悅和與親人的深刻連結。這是情感實現的終極狀態。',
      reversed: '逆位的聖杯十暗示家庭或關係中的不和諧。你可能經歷衝突或感到與親人疏離。需要修復關係並重建和諧。',
    },
  },
  {
    id: 'cups-11',
    name: { zh: '聖杯侍者', en: 'Page of Cups' },
    suit: 'cups',
    number: 11,
    keywords: {
      upright: ['創造力', '直覺', '敏感', '新感情'],
      reversed: ['情感不成熟', '不安全感', '創意受阻'],
    },
    meanings: {
      upright: '聖杯侍者代表創造力、直覺和情感的敏感性。這張牌帶來新的情感體驗或創意靈感。保持開放和好奇的心態。',
      reversed: '逆位的聖杯侍者暗示情感不成熟或不安全感。你可能過於敏感或在表達情感方面有困難。需要培養情感智慧。',
    },
  },
  {
    id: 'cups-12',
    name: { zh: '聖杯騎士', en: 'Knight of Cups' },
    suit: 'cups',
    number: 12,
    keywords: {
      upright: ['浪漫', '魅力', '理想主義', '追求'],
      reversed: ['不切實際', '情緒化', '失望'],
    },
    meanings: {
      upright: '聖杯騎士象徵浪漫、魅力和理想主義的追求。他帶來愛的訊息或創意的靈感。這張牌鼓勵你追隨你的心並表達情感。',
      reversed: '逆位的聖杯騎士暗示不切實際的期望或過度情緒化。你可能陷入幻想或容易失望。需要平衡理想與現實。',
    },
  },
  {
    id: 'cups-13',
    name: { zh: '聖杯王后', en: 'Queen of Cups' },
    suit: 'cups',
    number: 13,
    keywords: {
      upright: ['同理心', '關懷', '直覺', '情感成熟'],
      reversed: ['情感依賴', '不穩定', '過度敏感'],
    },
    meanings: {
      upright: '聖杯王后代表同理心、關懷和深刻的直覺。她情感成熟,能夠支持和滋養他人。這張牌鼓勵你信任直覺並以愛行事。',
      reversed: '逆位的聖杯王后暗示情感依賴或不穩定。你可能過於敏感或難以建立情感界限。需要照顧自己的情感需求。',
    },
  },
  {
    id: 'cups-14',
    name: { zh: '聖杯國王', en: 'King of Cups' },
    suit: 'cups',
    number: 14,
    keywords: {
      upright: ['情感平衡', '智慧', '外交', '冷靜'],
      reversed: ['情感操控', '冷漠', '壓抑'],
    },
    meanings: {
      upright: '聖杯國王象徵情感的成熟、智慧和平衡。他能夠在保持冷靜的同時深刻感受。這張牌鼓勵你以智慧和同理心領導。',
      reversed: '逆位的聖杯國王暗示情感操控或過度控制情感。你可能變得冷漠或壓抑真實的感受。需要重新連接情感並找到平衡。',
    },
  },

  // Swords (寶劍)
  {
    id: 'swords-01',
    name: { zh: '寶劍一', en: 'Ace of Swords' },
    suit: 'swords',
    number: 1,
    keywords: {
      upright: ['清晰', '真理', '突破', '新想法'],
      reversed: ['混亂', '殘酷', '濫用權力'],
    },
    meanings: {
      upright: '寶劍一代表心智的清晰、真理的洞察和重大的突破。這張牌象徵新的想法、理性思考和切斷混亂的能力。現在是尋求真相的時候。',
      reversed: '逆位的寶劍一暗示思維混亂或濫用智力。你可能缺乏清晰,或是以殘酷的方式使用真理。需要重新獲得焦點。',
    },
  },
  {
    id: 'swords-02',
    name: { zh: '寶劍二', en: 'Two of Swords' },
    suit: 'swords',
    number: 2,
    keywords: {
      upright: ['僵局', '困難決定', '逃避', '平衡'],
      reversed: ['優柔寡斷', '混亂', '信息過載'],
    },
    meanings: {
      upright: '寶劍二象徵僵局、困難的選擇和需要做出決定的時刻。你可能在逃避某個艱難的真相。這張牌鼓勵你移除蒙眼布,面對現實。',
      reversed: '逆位的寶劍二暗示優柔寡斷或信息過載。你可能感到被選項壓倒或無法做出決定。需要尋找清晰並採取行動。',
    },
  },
  {
    id: 'swords-03',
    name: { zh: '寶劍三', en: 'Three of Swords' },
    suit: 'swords',
    number: 3,
    keywords: {
      upright: ['心痛', '悲傷', '痛苦', '背叛'],
      reversed: ['療癒', '寬恕', '恢復'],
    },
    meanings: {
      upright: '寶劍三代表心痛、情感的痛苦和深刻的悲傷。你可能經歷失落、背叛或痛苦的真相。允許自己悲傷,療癒需要時間。',
      reversed: '逆位的寶劍三暗示開始療癒和寬恕。你正在從痛苦中恢復,並學習放下過去的傷害。',
    },
  },
  {
    id: 'swords-04',
    name: { zh: '寶劍四', en: 'Four of Swords' },
    suit: 'swords',
    number: 4,
    keywords: {
      upright: ['休息', '恢復', '沉思', '平靜'],
      reversed: ['躁動', '倦怠', '壓力'],
    },
    meanings: {
      upright: '寶劍四象徵休息、恢復和必要的暫停。這張牌鼓勵你退後一步,讓自己恢復精力。休息不是軟弱,而是為了更好地前進。',
      reversed: '逆位的寶劍四暗示難以休息或持續的壓力。你可能感到躁動或已經到達倦怠的邊緣。必須優先照顧自己。',
    },
  },
  {
    id: 'swords-05',
    name: { zh: '寶劍五', en: 'Five of Swords' },
    suit: 'swords',
    number: 5,
    keywords: {
      upright: ['衝突', '失敗', '背叛', '不公平'],
      reversed: ['和解', '放下', '選擇戰鬥'],
    },
    meanings: {
      upright: '寶劍五代表衝突、失敗和不公平的對待。你可能經歷失敗或與他人的緊張關係。這張牌提醒你考慮是否值得為了贏而付出代價。',
      reversed: '逆位的寶劍五暗示尋求和解或放下衝突。你正在學習何時戰鬥、何時放手,並選擇內在的平靜。',
    },
  },
  {
    id: 'swords-06',
    name: { zh: '寶劍六', en: 'Six of Swords' },
    suit: 'wands',
    number: 6,
    keywords: {
      upright: ['過渡', '改變', '離開', '前進'],
      reversed: ['抗拒改變', '困住', '未解決的問題'],
    },
    meanings: {
      upright: '寶劍六象徵過渡、離開困難的情況並向前邁進。雖然改變可能令人不安,但你正朝向更平靜的水域前進。',
      reversed: '逆位的寶劍六暗示抗拒必要的改變。你可能感到困住或帶著未解決的問題前進。需要面對過去才能真正向前。',
    },
  },
  {
    id: 'swords-07',
    name: { zh: '寶劍七', en: 'Seven of Swords' },
    suit: 'swords',
    number: 7,
    keywords: {
      upright: ['欺騙', '策略', '逃避', '狡猾'],
      reversed: ['良心', '坦白', '被揭露'],
    },
    meanings: {
      upright: '寶劍七代表欺騙、策略或逃避。你可能需要採取巧妙的方法,或是警覺他人的不誠實。這張牌提醒你考慮行為的後果。',
      reversed: '逆位的寶劍七暗示良心不安或欺騙被揭露。你可能準備坦白或面對不誠實的後果。誠實是最好的政策。',
    },
  },
  {
    id: 'swords-08',
    name: { zh: '寶劍八', en: 'Eight of Swords' },
    suit: 'swords',
    number: 8,
    keywords: {
      upright: ['限制', '困住', '無助', '受害者心態'],
      reversed: ['解放', '新視角', '自由'],
    },
    meanings: {
      upright: '寶劍八象徵感到困住、限制和無助。你可能被自己的恐懼或負面思維束縛。這張牌提醒你,許多限制是自我施加的。',
      reversed: '逆位的寶劍八暗示從限制中解放。你開始看到新的可能性並認識到自己的力量。這是打破束縛的時候。',
    },
  },
  {
    id: 'swords-09',
    name: { zh: '寶劍九', en: 'Nine of Swords' },
    suit: 'swords',
    number: 9,
    keywords: {
      upright: ['焦慮', '擔憂', '惡夢', '恐懼'],
      reversed: ['恢復', '希望', '克服恐懼'],
    },
    meanings: {
      upright: '寶劍九代表深刻的焦慮、擔憂和夜晚的恐懼。你可能被負面思維壓倒。這張牌鼓勵你尋求支持並面對你的恐懼。',
      reversed: '逆位的寶劍九暗示開始從焦慮中恢復。你正在學習管理擔憂並重新獲得希望。最黑暗的時刻已經過去。',
    },
  },
  {
    id: 'swords-10',
    name: { zh: '寶劍十', en: 'Ten of Swords' },
    suit: 'swords',
    number: 10,
    keywords: {
      upright: ['結束', '背叛', '痛苦的結局', '觸底'],
      reversed: ['恢復', '再生', '最壞的已過'],
    },
    meanings: {
      upright: '寶劍十象徵痛苦的結束、背叛和觸底。雖然這是困難的時刻,但它也標誌著一個周期的完成。從這裡開始,事情只會變得更好。',
      reversed: '逆位的寶劍十暗示恢復和再生。最壞的情況已經過去,你正在重新站起來。這是新開始的曙光。',
    },
  },
  {
    id: 'swords-11',
    name: { zh: '寶劍侍者', en: 'Page of Swords' },
    suit: 'swords',
    number: 11,
    keywords: {
      upright: ['好奇心', '警覺', '溝通', '新想法'],
      reversed: ['諜報', '八卦', '欺騙'],
    },
    meanings: {
      upright: '寶劍侍者代表好奇心、警覺性和新的想法。這張牌鼓勵你保持開放的心態,尋求真相,並勇於表達你的想法。',
      reversed: '逆位的寶劍侍者暗示八卦、欺騙或濫用信息。你可能遇到不可信的消息或自己在傳播謠言。需要謹慎和誠實。',
    },
  },
  {
    id: 'swords-12',
    name: { zh: '寶劍騎士', en: 'Knight of Swords' },
    suit: 'swords',
    number: 12,
    keywords: {
      upright: ['行動', '衝動', '雄心', '決心'],
      reversed: ['魯莽', '不耐煩', '攻擊性'],
    },
    meanings: {
      upright: '寶劍騎士象徵快速行動、智力的雄心和堅定的決心。他勇敢追求真理和目標。這張牌鼓勵你果斷行動,但也要考慮後果。',
      reversed: '逆位的寶劍騎士暗示魯莽或過度攻擊性。你可能過於衝動或缺乏考慮就急於行動。需要平衡速度與謹慎。',
    },
  },
  {
    id: 'swords-13',
    name: { zh: '寶劍王后', en: 'Queen of Swords' },
    suit: 'swords',
    number: 13,
    keywords: {
      upright: ['清晰', '獨立', '客觀', '坦率'],
      reversed: ['冷酷', '苦澀', '殘忍'],
    },
    meanings: {
      upright: '寶劍王后代表清晰的思維、獨立和客觀的判斷。她坦率而誠實,能夠以智慧和公正做出決定。這張牌鼓勵你說出真相。',
      reversed: '逆位的寶劍王后暗示冷酷或過度批判。你可能變得苦澀或以殘忍的方式使用真理。需要平衡誠實與同理心。',
    },
  },
  {
    id: 'swords-14',
    name: { zh: '寶劍國王', en: 'King of Swords' },
    suit: 'swords',
    number: 14,
    keywords: {
      upright: ['智慧', '權威', '真理', '道德'],
      reversed: ['操控', '殘酷', '濫用權力'],
    },
    meanings: {
      upright: '寶劍國王象徵智慧、道德權威和對真理的追求。他以邏輯和公正領導,做出明智的決定。這張牌鼓勵你運用智力和道德原則。',
      reversed: '逆位的寶劍國王暗示操控或濫用智力權力。你可能變得殘酷或過於理性而缺乏同理心。需要平衡智慧與人性。',
    },
  },

  // Pentacles (錢幣)
  {
    id: 'pentacles-01',
    name: { zh: '錢幣一', en: 'Ace of Pentacles' },
    suit: 'pentacles',
    number: 1,
    keywords: {
      upright: ['新機會', '繁榮', '顯化', '豐盛'],
      reversed: ['失去機會', '缺乏計劃', '財務問題'],
    },
    meanings: {
      upright: '錢幣一代表新的財務機會、繁榮和物質顯化。這張牌象徵新的事業、投資或財富的開始。抓住這個機會並奠定穩固的基礎。',
      reversed: '逆位的錢幣一暗示失去的機會或缺乏計劃。你可能面臨財務挑戰或未能充分利用機會。需要更加務實和負責。',
    },
  },
  {
    id: 'pentacles-02',
    name: { zh: '錢幣二', en: 'Two of Pentacles' },
    suit: 'pentacles',
    number: 2,
    keywords: {
      upright: ['平衡', '適應', '優先次序', '靈活性'],
      reversed: ['失去平衡', '混亂', '過度承擔'],
    },
    meanings: {
      upright: '錢幣二象徵平衡、靈活性和管理多重責任。你可能在雜耍多個專案或義務。這張牌鼓勵你保持適應性並優先處理最重要的事。',
      reversed: '逆位的錢幣二暗示失去平衡或被壓倒。你可能承擔太多或難以管理責任。需要重新評估優先次序並尋求簡化。',
    },
  },
  {
    id: 'pentacles-03',
    name: { zh: '錢幣三', en: 'Three of Pentacles' },
    suit: 'pentacles',
    number: 3,
    keywords: {
      upright: ['團隊合作', '協作', '技能', '品質'],
      reversed: ['缺乏團隊合作', '不和', '技能不匹配'],
    },
    meanings: {
      upright: '錢幣三代表團隊合作、協作和高品質的工作。這張牌表示通過合作取得成功,你的技能得到認可。繼續精進並與他人合作。',
      reversed: '逆位的錢幣三暗示團隊合作問題或技能不匹配。你可能經歷協作困難或工作品質不符標準。需要改善溝通和協調。',
    },
  },
  {
    id: 'pentacles-04',
    name: { zh: '錢幣四', en: 'Four of Pentacles' },
    suit: 'pentacles',
    number: 4,
    keywords: {
      upright: ['掌控', '安全', '保守', '儲蓄'],
      reversed: ['貪婪', '物質主義', '控制'],
    },
    meanings: {
      upright: '錢幣四象徵財務安全、掌控和保守。你可能專注於儲蓄和保護資源。這張牌鼓勵你在安全和開放之間找到平衡。',
      reversed: '逆位的錢幣四暗示過度控制或貪婪。你可能過於執著物質或害怕失去。需要學習放手並信任生命的流動。',
    },
  },
  {
    id: 'pentacles-05',
    name: { zh: '錢幣五', en: 'Five of Pentacles' },
    suit: 'pentacles',
    number: 5,
    keywords: {
      upright: ['財務困難', '貧困', '孤立', '失落'],
      reversed: ['恢復', '尋求幫助', '改善'],
    },
    meanings: {
      upright: '錢幣五代表財務困難、感到被遺棄或經歷失落。你可能面臨艱難的時期。這張牌提醒你,幫助就在附近,不要害怕尋求支持。',
      reversed: '逆位的錢幣五暗示從困難中恢復或願意尋求幫助。你的情況開始改善,希望重新出現。',
    },
  },
  {
    id: 'pentacles-06',
    name: { zh: '錢幣六', en: 'Six of Pentacles' },
    suit: 'pentacles',
    number: 6,
    keywords: {
      upright: ['慷慨', '慈善', '給予', '接受'],
      reversed: ['私心', '負債', '單向關係'],
    },
    meanings: {
      upright: '錢幣六象徵慷慨、慈善和資源的分享。這張牌表示給予和接受的平衡。無論你在哪個位置,都要以感恩的心態行事。',
      reversed: '逆位的錢幣六暗示單向關係或不平等的交換。你可能遇到私心或感到被利用。需要建立更平衡的關係。',
    },
  },
  {
    id: 'pentacles-07',
    name: { zh: '錢幣七', en: 'Seven of Pentacles' },
    suit: 'pentacles',
    number: 7,
    keywords: {
      upright: ['評估', '耐心', '投資', '長期視野'],
      reversed: ['不耐煩', '缺乏成果', '浪費努力'],
    },
    meanings: {
      upright: '錢幣七代表評估進展、耐心等待和長期投資。你正在審視努力的成果並考慮下一步。這張牌鼓勵你保持耐心並信任過程。',
      reversed: '逆位的錢幣七暗示不耐煩或努力未見成果。你可能質疑投資的價值或感到沮喪。需要重新評估策略或保持堅持。',
    },
  },
  {
    id: 'pentacles-08',
    name: { zh: '錢幣八', en: 'Eight of Pentacles' },
    suit: 'pentacles',
    number: 8,
    keywords: {
      upright: ['技能', '專注', '勤奮', '精通'],
      reversed: ['完美主義', '無聊', '缺乏動力'],
    },
    meanings: {
      upright: '錢幣八象徵勤奮、專注和對技能的精進。你致力於提升能力並追求卓越。這張牌鼓勵你繼續努力,精通需要時間和實踐。',
      reversed: '逆位的錢幣八暗示完美主義或缺乏動力。你可能感到無聊或對工作失去興趣。需要重新找到熱情或調整期望。',
    },
  },
  {
    id: 'pentacles-09',
    name: { zh: '錢幣九', en: 'Nine of Pentacles' },
    suit: 'pentacles',
    number: 9,
    keywords: {
      upright: ['獨立', '豐盛', '自給自足', '奢華'],
      reversed: ['財務依賴', '不安全感', '過度消費'],
    },
    meanings: {
      upright: '錢幣九代表獨立、財務自由和享受勞動成果。你已經實現了自給自足,可以享受生活的奢華。這是慶祝成就的時候。',
      reversed: '逆位的錢幣九暗示財務依賴或不安全感。你可能過度消費或依賴他人。需要重建獨立性並培養自給自足。',
    },
  },
  {
    id: 'pentacles-10',
    name: { zh: '錢幣十', en: 'Ten of Pentacles' },
    suit: 'pentacles',
    number: 10,
    keywords: {
      upright: ['財富', '遺產', '家庭', '長期成功'],
      reversed: ['財務失敗', '家庭問題', '不穩定'],
    },
    meanings: {
      upright: '錢幣十象徵持久的財富、家庭遺產和長期的成功。這張牌代表物質和精神的圓滿,以及跨世代的繁榮。你已經建立了穩固的基礎。',
      reversed: '逆位的錢幣十暗示財務不穩定或家庭問題。你可能面臨遺產爭議或長期計劃的失敗。需要重建穩定和修復關係。',
    },
  },
  {
    id: 'pentacles-11',
    name: { zh: '錢幣侍者', en: 'Page of Pentacles' },
    suit: 'pentacles',
    number: 11,
    keywords: {
      upright: ['野心', '勤奮', '新財務機會', '學習'],
      reversed: ['缺乏進展', '拖延', '不切實際'],
    },
    meanings: {
      upright: '錢幣侍者代表野心、學習和新的財務機會。這張牌鼓勵你保持好學的態度,專注於目標,並奠定未來成功的基礎。',
      reversed: '逆位的錢幣侍者暗示缺乏進展或拖延。你可能有不切實際的目標或難以將計劃付諸實踐。需要更加務實和專注。',
    },
  },
  {
    id: 'pentacles-12',
    name: { zh: '錢幣騎士', en: 'Knight of Pentacles' },
    suit: 'pentacles',
    number: 12,
    keywords: {
      upright: ['可靠', '努力', '責任', '實際'],
      reversed: ['停滯', '無聊', '過度謹慎'],
    },
    meanings: {
      upright: '錢幣騎士象徵可靠、努力工作和對責任的承諾。他穩定、實際,並致力於長期目標。這張牌鼓勵你保持專注和耐心。',
      reversed: '逆位的錢幣騎士暗示停滯或過度謹慎。你可能陷入常規或害怕冒險。需要在穩定和靈活性之間找到平衡。',
    },
  },
  {
    id: 'pentacles-13',
    name: { zh: '錢幣王后', en: 'Queen of Pentacles' },
    suit: 'pentacles',
    number: 13,
    keywords: {
      upright: ['滋養', '實際', '富足', '安全'],
      reversed: ['物質主義', '工作狂', '忽視自我'],
    },
    meanings: {
      upright: '錢幣王后代表滋養、實際的智慧和創造富足。她平衡物質需求與關懷他人,創造舒適和安全的環境。這張牌鼓勵你照顧自己和他人。',
      reversed: '逆位的錢幣王后暗示過度專注物質或忽視自我照顧。你可能變成工作狂或失去生活的平衡。需要重新優先考慮健康和幸福。',
    },
  },
  {
    id: 'pentacles-14',
    name: { zh: '錢幣國王', en: 'King of Pentacles' },
    suit: 'pentacles',
    number: 14,
    keywords: {
      upright: ['財富', '商業成功', '領導', '安全'],
      reversed: ['貪婪', '頑固', '控制慾'],
    },
    meanings: {
      upright: '錢幣國王象徵財務成功、商業頭腦和穩定的領導。他已經實現了物質繁榮,並能夠慷慨地分享。這張牌鼓勵你建立持久的成功。',
      reversed: '逆位的錢幣國王暗示貪婪或濫用財務權力。你可能過於專注物質或變得控制慾強。需要記住金錢不是一切。',
    },
  },
];
