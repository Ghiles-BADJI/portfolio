import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class SkillsComponent {

  items = [
    {
      name: 'skills.front',
      skills: [
        {img: 'angular', name: 'Angular'},
        {img: 'html5', name: 'HTML5'},
      ]
    },
    {
      name: 'skills.css',
      skills: [
        {img: 'css3', name: 'CSS3'},
        {img: 'materialize', name: 'Materialize'},
        {img: 'bootstrap', name: 'Bootstrap'},
      ]
    },
    {
      name: 'skills.back',
      skills: [
        {img: 'nodejs', name: 'Nodejs'},
        {img: 'postgresql', name: 'PostgreSQL'},
        {img: 'mysql', name: 'MySQL'}
      ]
    },
    {
      name: 'skills.build',
      skills: [
        {img: 'webpack', name: 'Webpack'},
        {img: 'gulp', name: 'Gulp'},
        {img: 'grunt', name: 'Grunt'},
        {img: 'bower', name: 'Bower'},
      ]
    },
    {
      name: 'skills.other',
      skills: [
        {img: 'github', name: 'GitHub'},
        {img: 'heroku', name: 'Heroku'},
      ]
    }
  ];
}
