import { Component } from '@angular/core';

declare function searchCards(): any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  onSearchInput(event: Event): void {
    searchCards();
  }
}
