import type { ImageMetadata } from 'astro';
import { siGithub, siSubstack, siX, siYoutube } from 'simple-icons';

// import modernBuilderBanner from '../assets/modern-builder-banner-short.png';
import profilePic from '../assets/profile-pic-square.webp';

export interface ProfileImage {
  src: ImageMetadata;
  alt: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: { path: string };
}

export interface PrimaryLink {
  id: string;
  label: string;
  href?: string;
  /** Renders an inline panel below the row instead of navigating away. */
  expands?: 'newsletter';
}

export interface Newsletter {
  /** Publication home. */
  publicationUrl: string;
  /**
   * Substack's subscribe page. The panel submits here as a plain GET form so the
   * email arrives prefilled. Substack's `/api/v1/free` endpoint cannot be used
   * directly: it rejects form-encoded bodies and blocks the CORS preflight for
   * JSON, so an in-page subscribe is not possible from another origin.
   */
  subscribeUrl: string;
  pitch: string;
}

export interface Profile {
  name: string;
  headline: string;
  email: string;
  bio: readonly string[];
  image: ProfileImage;
  // banner: ProfileImage;
  socials: readonly SocialLink[];
  links: readonly PrimaryLink[];
  newsletter: Newsletter;
}

const email = 'alfredjiali@gmail.com';
const linkedinIcon = {
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.941v5.665H9.351V9h3.414v1.561h.048c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 20.452h3.555V9H3.555z',
};

export const profile: Profile = {
  name: 'Ali Alfredji',
  headline: 'Software Engineer & Product Builder',
  email: email,
  bio: [
    'Tech guy and entrepreneur. Dad. 33 years. 10+ years building scalable software products and systems across startups and enterprises. Sharing field notes on how to build & operate better with AI, and I helping businesses apply the same practices to products, workflows, and internal systems.',
    ' Currently Software Engineer at Inter IKEA Group. Also operating "Modern Builder" newsletter and community.',
    ' Feel free to check my work or reach out for a chat!',
  ],
  image: {
    src: profilePic,
    alt: 'Ali Alfredji portrait photo',
  },
  // banner: {
  //   src: modernBuilderBanner,
  //   alt: 'Modern Builder.',
  // },
  socials: [
    {
      id: 'substack',
      label: 'Substack',
      href: 'https://substack.com/@alialfredji',
      icon: siSubstack,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/alialfredji',
      icon: linkedinIcon,
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/alialfredji',
      icon: siGithub,
    },
    {
      id: 'youtube',
      label: 'YouTube',
      href: 'https://youtube.com/@alialfredji',
      icon: siYoutube,
    },
    {
      id: 'x',
      label: 'X',
      href: 'https://x.com/@aalfredji',
      icon: siX,
    },
    // {
    //   id: 'tiktok',
    //   label: 'TikTok',
    //   href: 'https://tiktok.com/@aalfredji',
    //   icon: siTiktok,
    // },
    // {
    //   id: 'instagram',
    //   label: 'Instagram',
    //   href: 'https://instagram.com/alialfredji',
    //   icon: siInstagram,
    // },
  ],
  links: [
    {
      id: 'newsletter',
      label: 'Subscribe to my newsletter',
      expands: 'newsletter',
    },
    {
      id: 'notes',
      label: 'Notes and writing',
      href: 'https://substack.com/@alialfredji',
    },
    {
      id: 'contact',
      label: 'Email me',
      href: `mailto:${email}`,
    },
    {
      id: 'book-call',
      label: 'Book a 15-min call',
      href: 'https://cal.com/alialfredji/15min',
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
    },
    {
      id: 'about',
      label: 'About me',
    },
  ],
  newsletter: {
    publicationUrl: 'https://alialf.substack.com',
    subscribeUrl: 'https://alialf.substack.com/subscribe',
    pitch:
      'Practical field notes on building software, products, and workflows with AI. Future proof yourself to be relevant.',
  },
};
