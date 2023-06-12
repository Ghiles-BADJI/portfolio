import { Component } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    NavigationComponent,
    TranslateModule
  ]
})
export class HomeComponent {

}
