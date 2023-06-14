import { Component, Input, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ]
})


export class MenuComponent {

  @Input() links : any[] = [] ;
  @Input() exportLinks : any[] = [];
  @Input() isHandset = false;


  
}
