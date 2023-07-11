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
      name: 'DZ Dialect Admin',
      description: ['Angular 14', 'Material', 'PWA'],
      descriptionTxt: 'projects.description.dz-dialect-app',
      links: {online: 'https://dz-dialect.admin.bdsapp.fr/', github: 'https://github.com/Ghiles-BADJI/dz-dialect-sentence-api'}
    },

    {
      poster: 'assets/img/projects/slack.png',
      name: 'Slack App',
      description: ['Angular 14', 'Material', 'PWA'],
      descriptionTxt: 'projects.description.slack',
      links: {online: 'https://slack.gh-it.fr', github: 'https://github.com/Ghiles-BADJI/Slack-app'}
    },

    {
      poster: 'assets/img/projects/facebook.png',
      name: 'Facebook',
      description: ['Angular 14', 'Material', 'PWA'],
      descriptionTxt: 'projects.description.facebook',
      links: {online: 'https://facebook.gh-it.fr', github: 'https://github.com/Ghiles-BADJI/login'}
    }

  ]
}
