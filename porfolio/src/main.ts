// in the main.ts file
import {bootstrapApplication} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [
        provideAnimations(),
        importProvidersFrom(HttpClientModule)
    ]
});