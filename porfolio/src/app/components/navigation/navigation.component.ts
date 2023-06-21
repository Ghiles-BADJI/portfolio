import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ContentComponent } from '../content/content.component';
import { Observable, map, pipe } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [
    MenuComponent,
    ToolbarComponent,
    ContentComponent,
    MatSidenavModule,
    CommonModule
  ]
})
export class NavigationComponent implements OnInit{
  isHandset$: Observable<any> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
    );

    headings = [
      { title: 'about', icon: 'person', anchor: 'about', color: '#008073'},
      { title: 'experience', icon: 'trending_up', anchor: 'experience', color: '#00bcd4'},
      { title: 'projects', icon: 'web', anchor: 'projects', color: '#3f51b5'},
      { title: 'skills', icon: 'equalizer', anchor: 'skills', color: '#9c27b0'},
      { title: 'education', icon: 'school', anchor: 'education', color: '#ff9800'},
      { title: 'contact', icon: 'mail', anchor: 'contact', color: '#795548'}
    ];

    exportHeadings = [
      { title: 'resume', icon: 'description', link: 'assets/resume.pdf'}
    ];


    constructor(private readonly breakpointObserver: BreakpointObserver) {} 

    ngOnInit(): void {
      
    }
}
