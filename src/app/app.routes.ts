import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ComplianceComponent } from './pages/compliance/compliance.component';
import { CaseComponent } from './pages/case/case.component';
import { KonsultasiComponent } from './pages/konsultasi/konsultasi.component';
import { LoginComponent } from './pages/login/login.component';
import { DaftarComponent } from './pages/daftar/daftar.component';
import { FaqComponent } from './pages/faq/faq.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'daftar', component: DaftarComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/compliance', component: ComplianceComponent },
  { path: 'services/konsultasi', component: KonsultasiComponent },
  { path: 'services/case', component: CaseComponent },
  { path: '**', component: NotFoundComponent },
];
