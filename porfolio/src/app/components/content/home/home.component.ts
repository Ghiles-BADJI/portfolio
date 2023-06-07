import { Component } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    NavigationComponent,
  ]
})
export class HomeComponent {

}
