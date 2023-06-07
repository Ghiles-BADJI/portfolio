import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
  ]
})
export class AboutComponent {

}
