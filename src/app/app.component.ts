import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
