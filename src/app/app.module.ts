import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { LanguageService } from "./services/languauge/language.service";
import { NavigationComponent } from "./components/navigation/navigation.component";


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
 
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        MatIconModule,
        CommonModule,
        HttpClientModule,
        MatIconModule,
        RouterModule.forRoot([]),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            defaultLanguage: 'fr'
        }),
        NavigationComponent
    ],

    providers: [
        LanguageService
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
        const linkedinIcon = domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi-icons/linkedin.svg');
        const githubIcon = domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi-icons/github.svg');
        const mailIcon = domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi-icons/mail.svg');
        matIconRegistry.addSvgIcon('mail', mailIcon);
        matIconRegistry.addSvgIcon('linkedin', linkedinIcon);
        matIconRegistry.addSvgIcon('github', githubIcon);
        registerLocaleData(localeFr);
    }
} 