export const SITE = {
  title: 'Seita Miyamoto',
  description: 'Writings by Seita Miyamoto.',
  x: 'https://x.com/seitamiya',
  github: 'https://github.com/seitamiya',
};

export const fmt = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
