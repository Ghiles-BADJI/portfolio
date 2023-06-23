import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    TranslateModule,
    CommonModule,
    LanguageSelectorComponent,
    RouterModule,
    HttpClientModule,
    
  ]
})


export class MenuComponent {

  @Input() links : any[] = [] ;
  @Input() exportLinks : any[] = [];
  @Input() isHandset = false;

  @Output() menuClosed: EventEmitter<void> = new EventEmitter<void>();

  selected: Observable<string | null>;

  constructor(private readonly route: ActivatedRoute) { 
    this.selected = this.route.fragment;
  }

  ngOnInit() {
  }

  scrollTo(anchor: string): void {
    if (this.isHandset) {
      this.menuClosed.emit();
    }

    const element = document.getElementById(anchor);
    if (!!element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
    console.log('selected', this.selected)
  }

  
}
