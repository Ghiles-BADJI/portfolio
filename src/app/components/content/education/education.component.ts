import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    TranslateModule,
    CommonModule
  ]
})
export class EducationComponent {

  items = [
    {title: 'education.engineer-school', location: 'education.engineer-location', descriptions: ['education.engineer-serie', 'education.engineer-speciality']},
    {title: 'education.prepa', location: 'education.prepa-location', descriptions: ['education.prepa-speciality']},
    {title: 'education.bac', location: 'education.highschool-location', descriptions: []},
  ]
}
