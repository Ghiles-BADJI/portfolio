import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    TranslateModule,
    HttpClientModule
  ]
})
export class ContactComponent {

  @Input() isHandset = false;

  contacts = [
    {iconName: 'mail', link: 'ghiles.badji@gmail.com', mail: true},
    {iconName: 'github', link: 'https://github.com/Ghiles-BADJI'},

  ]

}
