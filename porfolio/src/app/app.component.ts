import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppModule } from './app.module';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NavigationComponent,
    AppModule
  ],

})
export class AppComponent {
  title = 'porfolio';
}
