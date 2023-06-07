import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,

    CommonModule
  ]
})
export class ContactComponent {

  @Input() isHandset = false;

  contacts = [
    {iconName: 'mail', link: 'ghiles.badji@gmail.com', mail: true},
    {iconName: 'github', link: 'https://github.com/Ghiles-BADJI'},

  ]


}
