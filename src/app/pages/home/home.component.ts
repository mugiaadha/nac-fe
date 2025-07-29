import { Component, OnInit, Inject } from '@angular/core';
import { AppStateService } from '../../state/app-state.service';
import { SiteSettingsService } from '../../state/site-settings.service';
import { HeroSectionComponent } from '../../sections/hero-section/hero-section.component';
import { AboutSectionComponent } from '../../sections/about-section/about-section.component';
import { PopularSectionComponent } from '../../sections/popular-section/popular-section.component';
import { NewestSectionComponent } from '../../sections/newest-section/newest-section.component';
import { CategorySectionComponent } from '../../sections/category-section/category-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    CategorySectionComponent,
    PopularSectionComponent,
    NewestSectionComponent,
  ],
})
export class HomeComponent implements OnInit {
  constructor(
    public appState: AppStateService,
    public siteSettings: SiteSettingsService
  ) {}

  ngOnInit() {}
}
