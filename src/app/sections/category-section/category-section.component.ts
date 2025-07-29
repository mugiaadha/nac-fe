import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Category {
  name: string;
  image: string;
  description: string;
  badge: string;
  badgeClass: string;
}

export const categories: Category[] = [
  {
    name: 'PPh Orang Pribadi',
    image: './images/documentation/Categories=React.svg',
    description: 'Pajak Penghasilan untuk individu',
    badge: 'Wajib',
    badgeClass: 'bg-info',
  },
  {
    name: 'PPh Badan',
    image: './images/documentation/Categories=Nextjs.svg',
    description: 'Pajak Penghasilan untuk perusahaan',
    badge: 'Wajib',
    badgeClass: 'bg-info',
  },
  {
    name: 'PPN',
    image: './images/documentation/Categories=Tailwind.svg',
    description: 'Pajak Pertambahan Nilai',
    badge: 'Umum',
    badgeClass: 'bg-info',
  },
  {
    name: 'PBB',
    image: './images/documentation/Categories=Typescript.svg',
    description: 'Pajak Bumi dan Bangunan',
    badge: 'Properti',
    badgeClass: 'bg-info',
  },
  {
    name: 'Bea Materai',
    image: './images/documentation/Categories=React.svg',
    description: 'Pajak atas dokumen tertentu',
    badge: 'Dokumen',
    badgeClass: 'bg-info',
  },
  {
    name: 'Pajak UMKM',
    image: './images/documentation/Categories=Nextjs.svg',
    description: 'Pajak untuk Usaha Mikro, Kecil, dan Menengah',
    badge: 'UMKM',
    badgeClass: 'bg-info',
  },
  {
    name: 'Pajak Kendaraan',
    image: './images/documentation/Categories=Tailwind.svg',
    description: 'Pajak atas kendaraan bermotor',
    badge: 'Kendaraan',
    badgeClass: 'bg-info',
  },
  {
    name: 'Pajak Ekspor-Impor',
    image: './images/documentation/Categories=Typescript.svg',
    description: 'Pajak atas kegiatan ekspor dan impor',
    badge: 'Perdagangan',
    badgeClass: 'bg-info',
  },
  {
    name: 'Pajak Digital',
    image: './images/documentation/Categories=Nextjs.svg',
    description: 'Pajak atas transaksi digital',
    badge: 'Digital',
    badgeClass: 'bg-info',
  },
  {
    name: 'Pajak Hiburan',
    image: './images/documentation/Categories=React.svg',
    description: 'Pajak atas jasa hiburan',
    badge: 'Hiburan',
    badgeClass: 'bg-info',
  },
  {
    name: 'Pajak Hotel & Restoran',
    image: './images/documentation/Categories=Tailwind.svg',
    description: 'Pajak atas jasa hotel dan restoran',
    badge: 'Pariwisata',
    badgeClass: 'bg-info',
  },
  {
    name: 'Pajak Rokok',
    image: './images/documentation/Categories=Typescript.svg',
    description: 'Pajak atas produk rokok',
    badge: 'Kesehatan',
    badgeClass: 'bg-info',
  },
];

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss'],
})
export class CategorySectionComponent {
  categories = categories;
}
