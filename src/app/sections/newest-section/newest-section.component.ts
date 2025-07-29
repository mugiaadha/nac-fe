import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-newest-section',
  templateUrl: './newest-section.component.html',
  styleUrls: ['./newest-section.component.scss'],
  imports: [CommonModule],
})
export class NewestSectionComponent {
  newestCourses = [
    {
      img: './images/courses/courseone.png',
      alt: 'Pelatihan Pajak UMKM',
      badge: 'BARU',
      title: 'Pelatihan Pajak UMKM',
      author: 'Andi Wijaya',
      rating: 4.9,
      price: 'Rp25.000',
      classes: 5,
      participants: 50,
    },
    {
      img: './images/courses/coursetwo.png',
      alt: 'Akuntansi Dasar untuk Pebisnis',
      badge: 'BARU',
      title: 'Akuntansi Dasar untuk Pebisnis',
      author: 'Siti Rahma',
      rating: 4.8,
      price: 'Rp30.000',
      classes: 7,
      participants: 80,
    },
    {
      img: './images/courses/coursethree.png',
      alt: 'Konsultasi Pajak Online',
      badge: 'BARU',
      title: 'Konsultasi Pajak Online',
      author: 'Bambang Setiawan',
      rating: 4.7,
      price: 'Rp0',
      classes: 3,
      participants: 120,
    },
    {
      img: './images/courses/coursethree.png',
      alt: 'Konsultasi Pajak Online',
      badge: 'BARU',
      title: 'Konsultasi Pajak Online',
      author: 'Bambang Setiawan',
      rating: 4.7,
      price: 'Rp0',
      classes: 3,
      participants: 120,
    },
  ];
}
