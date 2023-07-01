import { Component, ElementRef, ViewChild } from '@angular/core';

declare const showPreview: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  @ViewChild('uploadBtn') uploadBtn!: ElementRef<HTMLInputElement>;
  fileChosen: string = 'No file chosen';

  onFileChange(event: any): void {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      this.fileChosen = fileList[0].name;
      // Perform additional actions if needed
    } else {
      this.fileChosen = 'No file chosen';
    }
  }



  onchange(){
    showPreview();
  }
}