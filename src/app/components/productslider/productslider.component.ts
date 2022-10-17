import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'ProductSlider',
  templateUrl: './productslider.component.html',
  styleUrls: ['./productslider.component.css']
})
export class ProductsliderComponent implements OnInit {

  caseItemsData = [
    {
      id: 1,
      bgColor: '#007bef',
      caseItemImg: 'https://html.crumina.net/html-utouch/img/case1.jpg',
      caseItemNote: 'Investigationes demonstraverunt lectores legere me legunt saepius',
    },
    {
      id: 2,
      bgColor: '#bb26f0',
      caseItemImg: 'https://html.crumina.net/html-utouch/img/case2.jpg',
      caseItemNote: 'Mirum est notare quam littera gothica, quam nunc putamus parum',
    },
    {
      id: 3,
      bgColor: '#007bef',
      caseItemImg: 'https://html.crumina.net/html-utouch/img/case1.jpg',
      caseItemNote: 'Investigationes demonstraverunt lectores legere me legunt saepius',
    },
    {
      id: 4,
      bgColor: '#bb26f0',
      caseItemImg: 'https://html.crumina.net/html-utouch/img/case2.jpg',
      caseItemNote: 'Mirum est notare quam littera gothica, quam nunc putamus parum',
    },
  ]

  constructor() { }


  ngOnInit(): void {

  }


  caseSliderOptions: OwlOptions = {
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
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: false
  }

}
