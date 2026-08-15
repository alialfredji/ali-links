import type { ImageMetadata } from 'astro';
import {
  siGithub,
  siInstagram,
  siSubstack,
  siTiktok,
  siX,
  siYoutube,
} from 'simple-icons';

import profilePic from '../assets/ali-alfredji-profile.webp';

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
  href: string;
}

export interface Profile {
  name: string;
  email: string;
  bio: string;
  image: ProfileImage;
  socials: readonly SocialLink[];
  links: readonly PrimaryLink[];
}

const placeholderEmail = 'alfredjiali@gmail.com';
const linkedinIcon = {
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.941v5.665H9.351V9h3.414v1.561h.048c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 20.452h3.555V9H3.555z',
};

export const profile: Profile = {
  name: 'Ali Alfredji',
  email: placeholderEmail,
  bio: 'A short introduction about your work, interests, and current focus.',
  image: {
    src: profilePic,
    alt: 'Ali Alfredji headshot',
  },
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/alialfredji',
      icon: siGithub,
    },
    {
      id: 'substack',
      label: 'Substack',
      href: 'https://substack.com/@alialfredji',
      icon: siSubstack,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://instagram.com/alialfredji',
      icon: siInstagram,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/alialfredji',
      icon: linkedinIcon,
    },
    {
      id: 'youtube',
      label: 'YouTube',
      href: 'https://youtube.com/@alialfredji',
      icon: siYoutube,
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      href: 'https://tiktok.com/@aalfredji',
      icon: siTiktok,
    },
    {
      id: 'x',
      label: 'X',
      href: 'https://x.com/@aalfredji',
      icon: siX,
    },
  ],
  links: [
    {
      id: 'portfolio',
      label: 'Portfolio',
      href: 'https://example.com/portfolio',
    },
    {
      id: 'current-project',
      label: 'Current project',
      href: 'https://example.com/project',
    },
    {
      id: 'notes',
      label: 'Notes and writing',
      href: 'https://example.com/notes',
    },
    {
      id: 'contact',
      label: 'Email me',
      href: `mailto:${placeholderEmail}`,
    },
  ],
};
