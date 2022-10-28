import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { ScrollService } from 'src/app/service/scroll.service';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;
  @Input() page:any;
  @Output() scrollToElement = new EventEmitter < string > ();  

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }

  ngOnInit(): void {
  }

  scrollToAllElement(name:string)
  {
    this.scrollToElement.emit(name)
  }
}
