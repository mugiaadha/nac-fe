import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { DaftarComponent } from './pages/daftar/daftar.component';
import { SeoResolver } from './resolvers/seo.resolver';
import { SEO_CONFIG } from './config/seo.config';
import { PusatBantuanComponent } from './pages/pusat-bantuan/pusat-bantuan.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { seo: SeoResolver },
    data: { seo: SEO_CONFIG.home },
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: { seo: SeoResolver },
    data: { seo: SEO_CONFIG.home },
  },
  {
    path: 'login',
    component: LoginComponent,
    resolve: { seo: SeoResolver },
    data: { seo: SEO_CONFIG.login },
  },
  {
    path: 'daftar',
    component: DaftarComponent,
    resolve: { seo: SeoResolver },
    data: { seo: SEO_CONFIG.daftar },
  },
  {
    path: 'pusat-bantuan',
    component: PusatBantuanComponent,
    resolve: { seo: SeoResolver },
    data: { seo: SEO_CONFIG.pusatBantuan },
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./pages/courses/courses.module').then((m) => m.CoursesModule),
    resolve: { seo: SeoResolver },
    data: { seo: SEO_CONFIG.courses },
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./pages/articles/articles.module').then((m) => m.ArticlesModule),
    resolve: { seo: SeoResolver },
    data: { seo: SEO_CONFIG.articles },
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services.module').then((m) => m.ServicesModule),
    resolve: { seo: SeoResolver },
    data: { seo: SEO_CONFIG.services },
  },
  {
    path: '**',
    component: NotFoundComponent,
    resolve: { seo: SeoResolver },
    data: { seo: SEO_CONFIG.notfound },
  },
];
