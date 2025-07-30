import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from '../../services/services.component';
import { ComplianceComponent } from '../compliance/compliance.component';
import { CaseComponent } from '../case/case.component';
import { KonsultasiComponent } from '../konsultasi/konsultasi.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'compliance', component: ComplianceComponent },
  { path: 'case', component: CaseComponent },
  { path: 'konsultasi', component: KonsultasiComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ServicesComponent, ComplianceComponent, CaseComponent, KonsultasiComponent]
})
export class ServicesModule {}
