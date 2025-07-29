import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ComplianceComponent } from './pages/compliance/compliance.component';
import { CaseComponent } from './pages/case/case.component';
import { KonsultasiComponent } from './pages/konsultasi/konsultasi.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'daftar', loadComponent: () => import('./pages/daftar/daftar.component').then(m => m.DaftarComponent) },
  { path: 'services', component: ServicesComponent },
  { path: 'services/compliance', component: ComplianceComponent },
  { path: 'services/konsultasi', component: KonsultasiComponent },
  { path: 'services/case', component: CaseComponent },
  { path: '**', component: NotFoundComponent },
];
