import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from 'src/app/services/local-storage/local-storage.decorator';
import { LanguageService } from '../../services/languauge/language.service';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule,
    
  ]
})
export class LanguageSelectorComponent implements OnInit {

  @LocalStorage() appLang! : 'fr-FR'|'en-US';

  constructor(private readonly translateSrv: TranslateService, private readonly langService: LanguageService) { }

  ngOnInit() {}

  setLanguage(lang: 'fr-FR'|'en-US'): void {
    this.appLang = lang;
    this.langService.setLanguage(lang);
  }
}
