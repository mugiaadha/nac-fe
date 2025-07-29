import { Component } from '@angular/core';
import { PopularSectionComponent } from '../../sections/popular-section/popular-section.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  imports: [PopularSectionComponent],
})
export class CoursesComponent {}
