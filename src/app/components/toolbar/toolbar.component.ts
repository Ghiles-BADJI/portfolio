import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [
    LanguageSelectorComponent,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    TranslateModule,
    MatButtonModule
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


