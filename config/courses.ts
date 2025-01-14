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
    banner: '/static/courses/portfolio/rp2.png',
    description:
      'Learn how to design systems at scale and prepare for system design interviews',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/casetify.png',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/tp.png',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/vv.jpg',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/pomelo.jpg',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/portfolio/celcom3.png',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
  },
];
