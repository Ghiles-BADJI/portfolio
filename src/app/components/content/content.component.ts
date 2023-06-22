import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { Router } from '@angular/router';
import { ScrollSpyDirective } from '../../directives/scroll-spy.directive';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScrollSpyDirective,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    ScrollingModule
  ]
})
export class ContentComponent {

  currentFragment = '';
  @Input() isHandset = false;

  constructor(private readonly router: Router) {}

  onSectionChange(fragment: any): void {
    this.currentFragment = fragment;
    this.router.navigate(['/'], {fragment});
  }

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}
