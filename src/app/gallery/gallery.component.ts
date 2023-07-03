import { Component } from '@angular/core';

declare function searchCards(): any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  onSearchInput(event: Event): void {
    searchCards();
  }
}
