import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule
  ]
})
export class EducationComponent {

}
