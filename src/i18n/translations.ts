import type { Locale } from '../config/site';

export type HomeCopy = {
  meta: { title: string; description: string };
  navigation: { home: string; language: string; contact: string };
  hero: {
    eyebrow: string;
    title: string;
    introduction: string;
    action: string;
  };
  foundation: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    action: string;
  };
  footer: string;
};

export const translations: Record<Locale, HomeCopy> = {
  en: {
    meta: {
      title: 'Your Brand — A clear source of truth',
      description:
        'A fast, accessible home for a business, product, or idea—built to be found, understood, and trusted.',
    },
    navigation: { home: 'Home', language: 'Language', contact: 'Contact' },
    hero: {
      eyebrow: 'One clear place',
      title: 'Make what you do easy to understand.',
      introduction:
        'A focused home for your business, product, or idea. Fast to visit, simple to trust, and ready to grow with you.',
      action: 'See the foundation',
    },
    foundation: {
      eyebrow: 'The foundation',
      title: 'Start with what matters.',
      items: [
        {
          title: 'Clarity',
          description:
            'One central message, a deliberate hierarchy, and no decorative noise.',
        },
        {
          title: 'Trust',
          description:
            'Accessible content, explicit ownership, and structured facts that match the page.',
        },
        {
          title: 'Reach',
          description:
            'Bilingual, crawlable, responsive, and fast before another dependency is added.',
        },
      ],
    },
    contact: {
      eyebrow: 'The next step',
      title: 'Give people one clear way forward.',
      description:
        'Replace this message and email address with the action that matters for your project.',
      action: 'Start a conversation',
    },
    footer: 'A small, durable foundation for a clear public presence.',
  },
  sv: {
    meta: {
      title: 'Ditt varumärke — En tydlig källa',
      description:
        'Ett snabbt och tillgängligt hem för ett företag, en produkt eller en idé—byggt för att hittas, förstås och skapa förtroende.',
    },
    navigation: { home: 'Hem', language: 'Språk', contact: 'Kontakt' },
    hero: {
      eyebrow: 'En tydlig plats',
      title: 'Gör det enkelt att förstå vad du gör.',
      introduction:
        'Ett fokuserat hem för ditt företag, din produkt eller idé. Snabbt att besöka, enkelt att lita på och redo att växa med dig.',
      action: 'Se grunden',
    },
    foundation: {
      eyebrow: 'Grunden',
      title: 'Börja med det viktiga.',
      items: [
        {
          title: 'Tydlighet',
          description:
            'Ett centralt budskap, en genomtänkt hierarki och inget dekorativt brus.',
        },
        {
          title: 'Förtroende',
          description:
            'Tillgängligt innehåll, tydligt ägarskap och strukturerad fakta som stämmer med sidan.',
        },
        {
          title: 'Räckvidd',
          description:
            'Tvåspråkigt, sökbart, responsivt och snabbt innan fler beroenden läggs till.',
        },
      ],
    },
    contact: {
      eyebrow: 'Nästa steg',
      title: 'Ge besökaren en tydlig väg framåt.',
      description:
        'Byt ut det här budskapet och e-postadressen mot nästa steg för ditt projekt.',
      action: 'Starta ett samtal',
    },
    footer: 'En liten och hållbar grund för en tydlig offentlig närvaro.',
  },
};
