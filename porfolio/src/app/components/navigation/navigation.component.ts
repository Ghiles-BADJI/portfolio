import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [MenuComponent,ToolbarComponent, ContentComponent]
})
export class NavigationComponent {

}
