import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/content/about/about.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { EducationComponent } from './components/content/education/education.component';
import { ExperienceComponent } from './components/content/experience/experience.component';
import { HomeComponent } from './components/content/home/home.component';
import { ProjectsComponent } from './components/content/projects/projects.component';
import { SkillsComponent } from './components/content/skills/skills.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MenuComponent,
    ToolbarComponent,
    NavigationComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    LanguageSelectorComponent,
    ThemeSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
