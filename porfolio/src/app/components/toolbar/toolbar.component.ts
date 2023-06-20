import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [
    ThemeSelectorComponent,
    LanguageSelectorComponent,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    TranslateModule
  ]
})
export class ToolbarComponent {

  @Output() sidenavToggled: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav(): void {
    this.sidenavToggled.emit();
  }
}


