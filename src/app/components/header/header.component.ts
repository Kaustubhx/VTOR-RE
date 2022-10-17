import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }

  constructor() { }

  scrollToProducts() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(currentScroll);
      // window.scrollTo(0, 150)
      window.scrollTo(0, -550)
    })
  }
  ngOnInit(): void {
  }

}
