import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  imports: [CommonModule],
})
export class FaqComponent {
  faqs = [
    {
      question: 'Bagaimana cara mendaftar akun?',
      answer: 'Klik tombol Daftar di pojok kanan atas dan isi data diri Anda.',
    },
    {
      question: 'Apakah pelatihan di NAC berbayar?',
      answer:
        'Sebagian pelatihan gratis, sebagian berbayar. Info harga ada di halaman kursus.',
    },
    {
      question: 'Bagaimana cara menghubungi tim NAC?',
      answer:
        'Gunakan menu Kontak di bagian bawah halaman atau email ke info@nac.id.',
    },
    {
      question: 'Apakah NAC menyediakan konsultasi pajak?',
      answer: 'Ya, silakan akses menu Layanan > Konsultasi.',
    },
  ];

  opened: number | null = null;
}
