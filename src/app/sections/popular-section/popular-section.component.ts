import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-section',
  templateUrl: './popular-section.component.html',
  styleUrls: ['./popular-section.component.scss'],
  imports: [CommonModule],
})
export class PopularSectionComponent {
  popularCourses = [
    {
      img: './images/courses/coursethree.png',
      alt: 'Konsultasi Pajak Gratis untuk UMKM',
      badge: 'TERLARIS',
      title: 'Konsultasi Pajak Gratis untuk UMKM',
      author: 'Eko Nugroho',
      rating: 4.7,
      price: 'Rp0',
      classes: 4,
      participants: 100,
    },
    {
      img: './images/courses/coursethree.png',
      alt: 'Dasar-dasar Pajak Penghasilan (PPh)',
      badge: 'TERLARIS',
      title: 'Dasar-dasar Pajak Penghasilan (PPh)',
      author: 'Dewi Anggraini',
      rating: 4.8,
      price: 'Rp0',
      classes: 10,
      participants: 200,
    },
    {
      img: './images/courses/coursethree.png',
      alt: 'Pajak Pertambahan Nilai (PPN) untuk UMKM',
      badge: 'TERLARIS',
      title: 'Pajak Pertambahan Nilai (PPN) untuk UMKM',
      author: 'Budi Santoso',
      rating: 4.7,
      price: 'Rp0',
      classes: 8,
      participants: 180,
    },
    {
      img: './images/courses/coursethree.png',
      alt: 'Pajak UMKM Digital',
      badge: 'TERBARU',
      title: 'Pajak UMKM Digital',
      author: 'Rina Pratiwi',
      rating: 4.9,
      price: 'Rp50.000',
      classes: 6,
      participants: 75,
    },
  ];
}
