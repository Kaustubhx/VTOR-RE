import { Component, OnInit } from '@angular/core';
import { supportCard } from 'src/app/interfaces/supportcard';

@Component({
  selector: 'SupportCards',
  templateUrl: './supportcards.component.html',
  styleUrls: ['./supportcards.component.css']
})
export class SupportcardsComponent implements OnInit {

  cards: supportCard[] = [
    {
      cardImg: "https://html.crumina.net/html-utouch/svg-icons/smartphone.svg",
      cardTitle: "Online Shopping",
      cardDes: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
    },
    {
      cardImg: "https://html.crumina.net/html-utouch/svg-icons/music%20(1).svg",
      cardTitle: "Multimedia Archives",
      cardDes: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
    },
    {
      cardImg: "https://html.crumina.net/html-utouch/svg-icons/settings%20(4).svg",
      cardTitle: "Quick Settings",
      cardDes: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
    },
    {
      cardImg: "https://html.crumina.net/html-utouch/svg-icons/alarm.svg",
      cardTitle: "Push Notification",
      cardDes: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
    },
    {
      cardImg: "https://html.crumina.net/html-utouch/svg-icons/cloud-computing%20(1).svg",
      cardTitle: "Cloud Integration",
      cardDes: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
    },
    {
      cardImg: "https://html.crumina.net/html-utouch/svg-icons/chat1.svg",
      cardTitle: "Private Chat",
      cardDes: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
