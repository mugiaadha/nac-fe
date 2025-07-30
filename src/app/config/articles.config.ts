import { Article } from '../models/article.model';

export const ARTICLES: Article[] = [
  {
    title: 'Tips Pajak UMKM di Era Digital',
    author: 'Eko Nugroho',
    date: '2025-07-20',
    summary:
      'Bagaimana UMKM bisa memanfaatkan teknologi untuk pelaporan pajak yang lebih mudah dan efisien.',
    img: './images/courses/courseone.webp',
    link: '/articles/tips-pajak-umkm',
    category: 'UMKM',
  },
  {
    title: 'Perubahan Regulasi Pajak 2025',
    author: 'Dewi Anggraini',
    date: '2025-07-15',
    summary:
      'Ringkasan perubahan regulasi pajak terbaru dan dampaknya bagi pelaku usaha.',
    img: './images/courses/coursetwo.webp',
    link: '/articles/regulasi-2025',
    category: 'Pajak',
  },
  {
    title: 'Strategi Akuntansi untuk Startup',
    author: 'Budi Santoso',
    date: '2025-07-10',
    summary:
      'Strategi akuntansi yang tepat untuk startup agar tetap comply dan efisien.',
    img: './images/courses/coursethree.webp',
    link: '/articles/akuntansi-startup',
    category: 'Akuntansi',
  },
];
