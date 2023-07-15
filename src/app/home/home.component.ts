import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

declare const showPreview: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private http: HttpClient) {}

  @ViewChild('uploadBtn') uploadBtn!: ElementRef<HTMLInputElement>;
  fileChosen: string = 'No file chosen';


  onchange(){
    showPreview();
  }

  onFileChange(event: any): void {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      this.fileChosen = fileList[0].name;
      this.onPhotoUploaded(event)
    } else {
      this.fileChosen = 'No file chosen';
    }
  }
  onPhotoUploaded(event: any) {
    const file = event.target.files[0];
    const fileExtension = file.name.split('.').pop();

    if (fileExtension !== 'png' && fileExtension !== 'jpg' && fileExtension !== 'jpeg') {
      alert("Please upload an image file in .png or .jpg format.");
      return;
    } else {
      const formData = new FormData();
      formData.append('image', file);

      this.http.post('https://pawsitive-id-backend-k6kwv3hqka-uc.a.run.app', formData)
        .pipe(catchError(error => {
          console.log(error.message);
          return throwError(error);
        }))
        .subscribe((response: any) => {
          // Handle response here
          console.log(response);
        });
    }
    }
}