export const MENUS = [
  { label: 'Home', link: '/' },
  { label: 'Courses', link: '/courses' },
  { label: 'Articles', link: '/articles' },
  {
    label: 'Services',
    children: [
      { label: 'Compliance', link: '/services/compliance' },
      { label: 'Konsultasi', link: '/services/konsultasi' },
      { label: 'Case', link: '/services/case' },
    ],
  },
  { label: 'Testimonial', link: '/testimonial' },
];
