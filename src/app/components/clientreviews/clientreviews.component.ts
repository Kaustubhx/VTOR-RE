import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { reviewData } from 'src/app/interfaces/clientreview';

@Component({
  selector: 'ClientReviews',
  templateUrl: './clientreviews.component.html',
  styleUrls: ['./clientreviews.component.css']
})
export class ClientreviewsComponent implements OnInit {

  @Input() clientReview: reviewData[] = []

  constructor() { }

  ngOnInit(): void {
  }

  reviewOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    // autoWidth: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<span class="material-icons">arrow_back_ios</span>', '<span class="material-icons">arrow_forward_ios</span>'],
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
    nav: false
  }

}
