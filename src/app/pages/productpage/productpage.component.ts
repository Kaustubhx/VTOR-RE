import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  galleryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
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
    nav: true,
  }


  product: any;
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.product = this.data.getById(id);

    window.scrollTo(0, 0);
  }

  getLink(name:string)
  {
    return "https://wa.me/919284469487?text=I%20want%20to%20have%20a%20demo%20for%20"+name
  }
}
