export interface SpeakingItem {
  id: string;
  title: string;
  event: string;
  date: string; // YYYY-MM-DD format
  location: string;
  description: string;
  duration?: string;
  category: 'Tech' | 'LT' | 'Workshop' | 'Keynote' | 'Panel';
  tags: string[];
  language: 'ja' | 'en';
  audience?: number;
  thumbnail?: string;
  links: {
    slides?: string;
    video?: string;
    eventPage?: string;
    blogPost?: string;
    repository?: string;
  };
}

export const speakingData: SpeakingItem[] = [
  {
    id: '1',
    title: '「Chatwork」の認証基盤の移行とログ活用によるプロダクト改善',
    event: 'PHP Conference 2025',
    date: '2025-06-28',
    location: '大田区産業プラザPiO',
    description: 'Auth0への具体的な移行方法やPHPでの実装における工夫、さらにログデータを活用した異常検知やビジネス分析といったデータ活用の実践的アプローチについて紹介',
    duration: '25分',
    category: 'Tech',
    tags: ['PHP', 'Conference'],
    language: 'ja',
    thumbnail: 'https://files.speakerdeck.com/presentations/6c4f9838d05446b8b5256f234ab6ae4d/slide_0.jpg?35616026',
    links: {
      slides: 'https://speakerdeck.com/kubell_hr/250628-yamashita',
      eventPage: 'https://fortee.jp/phpcon-2025/proposal/d2bed5f9-58ed-4645-a052-75a6ad8a2415',
    }
  },
  {
    id: '2',
    title: 'Auth0ログをEventBridge経由でDatadogで活用する',
    event: 'Japan Datadog User Group Meetup#10',
    date: '2025-05-28',
    location: 'フリー株式会社 大崎本社',
    description: 'Auth0のログストリームをAmazon EventBridge経由でDatadogに送信し、認証イベントの監視・分析を行う方法について実装例を交えて解説しました。',
    duration: '5分',
    category: 'LT',
    tags: ['Auth0', 'Datadog', 'Monitoring'],
    language: 'ja',
    thumbnail: 'https://files.speakerdeck.com/presentations/56481339c3a2408d9027ca48585825ea/slide_0.jpg?35246342',
    links: {
      slides: 'https://speakerdeck.com/kubell_hr/250528-yamashita',
      eventPage: 'https://datadog-jp.connpass.com/event/349693/',
    }
  },
  {
    id: '3',
    title: 'Okta CIC Actionを活用した独自の認証関連機能の移行方法、およびログやメトリクスの監視手法について実例紹介',
    event: 'Okta Japan CIC Meetup',
    date: '2024-07-11',
    location: 'Okta 渋谷オフィス',
    description: 'Auth0 Actionを活用して、既存の認証システムから独自の認証関連機能を移行する方法と、ログやメトリクスの効果的な監視手法について実例を交えて紹介しました。',
    duration: '20分',
    category: 'Tech',
    tags: ['Auth0', 'Monitoring', 'Migration'],
    language: 'ja',
    thumbnail: 'https://files.speakerdeck.com/presentations/88b83beab196400ea74dd64215257442/slide_0.jpg?34505814',
    links: {
      slides: 'https://speakerdeck.com/kubell_hr/240711-yamashita',
    }
  }
];

export const getSpeakingItems = (): SpeakingItem[] => {
  return speakingData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getSpeakingByCategory = (category: SpeakingItem['category'] | 'All'): SpeakingItem[] => {
  const items = getSpeakingItems();
  if (category === 'All') return items;
  return items.filter(item => item.category === category);
};