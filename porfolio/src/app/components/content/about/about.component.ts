import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    TranslateModule
  ]
})
export class AboutComponent {
  link1 = 'https://www.smashingmagazine.com/2016/10/inclusive-design-patterns/';
  link2 = 'https://www.angular.io/';
  link3 = 'https://mrmrs.cc/writing/scalable-css/';

}
