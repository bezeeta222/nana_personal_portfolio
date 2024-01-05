export type CourseContent = {
  name: string;
  slug?: string;
  description?: string;
};

export interface Course {
  title: string;
  slug: string;
  banner: string;
  description: string;
}

export const courseSlugMap = {
  go: 'Learn Go',
  'system-design': 'System Design',
};

export const courses: Course[] = [
  {
    title: 'System Design',
    slug: 'system-design',
    banner: '/static/courses/portfolio/poster 1.png',
    description:
      'Learn how to design systems at scale and prepare for system design interviews',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/poster 2.png',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/poster 3.png',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/poster 4.jpg',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
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
    banner: '/static/courses/portfolio/poster 6.jpg',
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
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/poster 9.jpg',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
];
