import { Component, Input, OnInit } from '@angular/core';
import { supportCard } from 'src/app/interfaces/supportcard';

@Component({
  selector: 'SingleSupportCard',
  templateUrl: './single-supportcard.component.html',
  styleUrls: ['./single-supportcard.component.css']
})
export class SingleSupportcardComponent implements OnInit {

  @Input() support: supportCard = {} as supportCard

  constructor() { }

  ngOnInit(): void {
  }

}
