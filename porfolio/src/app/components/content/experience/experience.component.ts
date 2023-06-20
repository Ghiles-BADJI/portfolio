import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
import {MatDividerModule} from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/languauge/language.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    CommonModule,
    MatDividerModule,
    TranslateModule
  ]
})
export class ExperienceComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );


  items = [
    {
      companyName: 'Altex',
      logo: 'altex',
      job: 'experience.job.altex',
      companyDescription: 'experience.job.altex.description',
      tasks: [
        'experience.job.agicap.task1',
        'experience.job.agicap.task2',
        'experience.job.agicap.task3',
        'experience.job.agicap.task4',
        'experience.job.agicap.task5',
        'experience.job.agicap.task6',
        'experience.job.agicap.task7',
        'experience.job.agicap.task8',
        'experience.job.agicap.task9',
      ],
      dates: {start: '1638179500000', end: '1661935900000'},
      location: 'Lyon'
    }
  ];

  locale: Observable<'fr-FR'|'en-US'> = this.langSrv.getLanguage(); 


  constructor(private readonly breakpointObserver: BreakpointObserver, private readonly langSrv: LanguageService) { }


}
