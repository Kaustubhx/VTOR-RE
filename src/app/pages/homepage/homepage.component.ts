import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private myElement: ElementRef) { }

  ngOnInit(): void {
  }

  scrollToProduct() {

  }

  bannerData = [
    {
      bannerId_1: "1",
      slideTitle_1: "We Build Scalable Business Solutions",
      slideDes_1: "You will not get time to redesign your business at its peak or when its required to scale thus building it scalable is most important thing and we are experts in that.",
      imageSrc_1: 'assets/images/slides1.png',
      imageAlt_1: 'slide1',
      bannerId_2: '2',
      slideTitle_2: "Myyba store is a product to help small vendors",
      slideDes_2: "This baby of ours is meant to create history not only growing of himself but for the sake of society helping local business get the success they always deserved",
      imageSrc_2: 'assets/images/Frame 7.png',
      imageAlt_2: 'slide2',
      bannerId_3: '3',
      slideTitle_3: "We help your vision become into a reality",
      slideDes_3: "Our expert cell of research and development helps turning your ideas to reality in no time",
      imageSrc_3: 'assets/images/slides3.png',
      imageAlt_3: 'slide3'
    }
  ]

  clientData = [
    {
      clientImg: 'assets/images/client1.png',
      imageAlt: 'Meet Mehta profile',
      clientName: 'Meet Mehta',
      clientSaying: '“ They understand the business scenerio and provide solution thats really effective and satisfying ”',
    },
    {
      clientImg: 'assets/images/client2.png',
      imageAlt: 'Neelam Shetty profile',
      clientName: 'Neelam Shetty',
      clientSaying: "“ VTOR Labs resolve's your business problem real fast with utmost quality...”",
    },
    {
      clientImg: 'assets/images/client3.jpg',
      imageAlt: 'Hanvant Gadhvi profile',
      clientName: 'Hanvant Gadhvi',
      clientSaying: '“ Just like magic they did an unbelievable job really happy with the quality service by VTOR Labs ”',
    },
  ]
  scrollToElement(name:string)
  {
     this.scrollTo(name);
  }

  scrollTo(name:string) {
    this.myElement.nativeElement.ownerDocument.getElementById(name).scrollIntoView({behavior: 'smooth'});
   
  }
}
