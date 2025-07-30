import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { DaftarComponent } from './pages/daftar/daftar.component';
import { FaqComponent } from './pages/faq/faq.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'daftar', component: DaftarComponent },
  { path: 'faq', component: FaqComponent },
  {
    path: 'courses',
    loadChildren: () =>
      import('./pages/courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./pages/articles/articles.module').then((m) => m.ArticlesModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services.module').then((m) => m.ServicesModule),
  },
  { path: '**', component: NotFoundComponent },
];
