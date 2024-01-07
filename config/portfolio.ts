export type PortfolioContent = {
  name: string;
  slug?: string;
  description?: string;
};

export interface Portfolio {
  title: string;
  slug: string;
  banner: string;
  description: string;
}

export const courseSlugMap = {
  go: 'Learn Go',
  'system-design': 'System Design',
};

export const portfolio: Portfolio[] = [
  // Changed 'courses' to 'portfolio'
  {
    title: 'System Design',
    slug: 'system-design',
    banner: '/static/courses/portfolio/poster 4.jpg',
    description:
      'Learn how to design systems at scale and prepare for system design interviews',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/poster 5.jpg',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/rpc1.jpg',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/rpc3.png',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/vi1.jpg',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/vi2.jpg',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/poster 7.jpg',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/poster 8.jpg',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
];
