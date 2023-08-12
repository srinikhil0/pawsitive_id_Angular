import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bts',
  templateUrl: './bts.component.html',
  styleUrls: ['./bts.component.css']
})
export class BtsComponent implements OnInit {

  ngOnInit(): void {
    const slides = document.querySelectorAll('.slide');
    const slides1 = document.querySelectorAll('.slide1');
    let currentSlide = 0;
    let currentSlide1 = 0;

    function showSlide(index: number) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }

    function showSlide1(index: number) {
      slides1.forEach((slide1, j) => {
        if (j === index) {
          slide1.classList.add('active');
        } else {
          slide1.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function nextSlide1() {
      currentSlide1 = (currentSlide1 + 1) % slides1.length;
      showSlide1(currentSlide1);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide);

    setInterval(nextSlide1, 5000); // Change slide every 5 seconds
    showSlide1(currentSlide1);
  }
}
