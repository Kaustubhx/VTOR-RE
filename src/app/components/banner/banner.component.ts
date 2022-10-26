import { Component, Input, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { carouselData } from 'src/app/interfaces/bannerdata';

@Component({
  selector: 'Banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() bannerInfo: carouselData[] = []

  constructor() { }

  ngOnInit(): void {
  }

  data: any;

  activeSlides?: SlidesOutputData;
  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    this.data = data.startPosition;
    console.log(data.startPosition);
  }

  init: any

  getData(init: SlidesOutputData) {
    this.init = init.startPosition;
    console.log(init.startPosition);
  }

  bannerOptions: OwlOptions = {
    loop: true,
    autoHeight: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 150,
    animateIn: 'animate__animated animate__fadeInRight animate__faster',
    animateOut: 'animate__animated animate__fadeOutLeft animate__faster',
    navText: ['<span class="material-icons p-2">arrow_back_ios</span>', '<span class="material-icons py-2">arrow_forward_ios</span>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
  }
}

