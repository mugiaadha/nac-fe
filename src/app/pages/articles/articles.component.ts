import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  imports: [CommonModule, RouterLink, DatePipe, FormsModule],
})
export class ArticlesComponent {
  searchTerm: string = '';
  searchFilter: string = 'all';
  currentPage: number = 1;
  pageSize: number = 5;

  get filteredBlogs() {
    if (!this.searchTerm) return this.blogs;
    const term = this.searchTerm.toLowerCase();
    switch (this.searchFilter) {
      case 'title':
        return this.blogs.filter((blog) =>
          blog.title.toLowerCase().includes(term)
        );
      case 'author':
        return this.blogs.filter((blog) =>
          blog.author.toLowerCase().includes(term)
        );
      case 'category':
        // kategori dummy, bisa diubah jika ada field kategori di data blog
        return this.blogs.filter((blog) =>
          blog.summary.toLowerCase().includes(term)
        );
      default:
        return this.blogs.filter(
          (blog) =>
            blog.title.toLowerCase().includes(term) ||
            blog.author.toLowerCase().includes(term) ||
            blog.summary.toLowerCase().includes(term)
        );
    }
  }

  get totalPages() {
    return Math.ceil(this.filteredBlogs.length / this.pageSize) || 1;
  }

  get totalPagesArr() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get pagedBlogs() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredBlogs.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  blogs = [
    {
      title: 'Tips Pajak UMKM di Era Digital',
      author: 'Eko Nugroho',
      date: '2025-07-20',
      summary:
        'Bagaimana UMKM bisa memanfaatkan teknologi untuk pelaporan pajak yang lebih mudah dan efisien.',
      img: './images/courses/courseone.png',
      link: '/articles/tips-pajak-umkm',
    },
    {
      title: 'Perubahan Regulasi Pajak 2025',
      author: 'Dewi Anggraini',
      date: '2025-07-15',
      summary:
        'Ringkasan perubahan regulasi pajak terbaru dan dampaknya bagi pelaku usaha.',
      img: './images/courses/coursetwo.png',
      link: '/articles/regulasi-2025',
    },
    {
      title: 'Strategi Akuntansi untuk Startup',
      author: 'Budi Santoso',
      date: '2025-07-10',
      summary:
        'Strategi akuntansi yang tepat untuk startup agar tetap comply dan efisien.',
      img: './images/courses/coursethree.png',
      link: '/articles/akuntansi-startup',
    },
  ];
}
