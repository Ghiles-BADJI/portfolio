import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppModule } from './app.module';
import { MatIcon, MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
  providers: [
    HttpClient
  ]

})
export class AppComponent {
  title = 'porfolio';

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    const linkedinIcon = domSanitizer.bypassSecurityTrustResourceUrl('./assets/img/mdi-icons/linkedin.svg');
    const githubIcon = domSanitizer.bypassSecurityTrustResourceUrl('./assets/img/mdi-icons/github.svg');
    const mailIcon = domSanitizer.bypassSecurityTrustResourceUrl('./assets/img/mdi-icons/mail.svg');
    matIconRegistry.addSvgIcon('mail', mailIcon);
    matIconRegistry.addSvgIcon('linkedin', linkedinIcon);
    matIconRegistry.addSvgIcon('github', githubIcon);
}
}
