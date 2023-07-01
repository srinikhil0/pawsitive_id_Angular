import { Component, AfterViewInit } from '@angular/core';

declare const handleSmallScreens: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements AfterViewInit{
  ngAfterViewInit() {
    handleSmallScreens();
  }
}
