import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'LabstoryCarousel',
  templateUrl: './labstorycarousel.component.html',
  styleUrls: ['./labstorycarousel.component.css']
})
export class LabstorycarouselComponent implements OnInit {

  labsStoryData = [
    {
      bgColor: '#0083ff',
      yearImg: 'assets/images/flag.svg',
      year: '2019',
      yearTitle: 'The Begining',
      yearInfo: 'Its not always easy to take first step after lots of analysis and efforts we took it'
    },
    {
      bgColor: '#EF6517',
      yearImg: 'assets/images/gear.svg',
      year: '2020',
      yearTitle: 'Completed 10 Deployments',
      yearInfo: 'Its nearly 5 months from the start and by the grace of almighty we completed 10 Deployments',
    },
    {
      bgColor: '#ff3133',
      yearImg: 'assets/images/team.svg',
      year: '2021',
      yearTitle: 'The Partnership',
      yearInfo: 'This year we did 20+ projects but what was important was our partnership with those brands as we earned their trust',
    },
    {
      bgColor: '#01a23c',
      yearImg: 'assets/images/rocket-launch.svg',
      year: '2022',
      yearTitle: 'Inhouse Products',
      yearInfo: 'The baby has grown and started creating own products now we are moving towards creating our own global space',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  storySliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<span class="material-icons">arrow_back_ios</span>', '<span class="material-icons">arrow_forward_ios</span>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
    },
    nav: false
  }

}
