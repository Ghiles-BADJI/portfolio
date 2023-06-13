import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ProjectsComponent {

  items = [
    {
      poster: 'assets/img/projects/dz-dialect-app.png',
      name: 'DZ Dialect App',
      description: ['Angular 14', 'Material', 'Ngrx', 'PWA'],
      descriptionTxt: 'projects.description.dz-dialect-app',
      links: {online: 'https://dz-dialect.bdsapp.fr', github: 'https://www.github.com/badjilounes/dz-dialect-app.git'}
    }
  ]
}
