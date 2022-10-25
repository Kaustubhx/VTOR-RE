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
      cardDes: "Your Business Buddy for complete app for online shopping"
    },
    {
      cardImg: "https://html.crumina.net/html-utouch/svg-icons/music%20(1).svg",
      cardTitle: "Video Audio Streaming Apps",
      cardDes: "Whitelisted Video Audio Streaming Apps"
    },
    {
      cardImg: "https://html.crumina.net/html-utouch/svg-icons/settings%20(4).svg",
      cardTitle: "Customizations",
      cardDes: "Customization of UI and Functionality of the application"
    },
    {
      cardImg: "https://html.crumina.net/html-utouch/svg-icons/alarm.svg",
      cardTitle: "Notifications",
      cardDes: "Notification for client update and leads accumalations"
    },
    {
      cardImg: "https://html.crumina.net/html-utouch/svg-icons/cloud-computing%20(1).svg",
      cardTitle: "Cloud Integration",
      cardDes: "Expert support for AWS and Azure based Deployements"
    },
    {
      cardImg: "https://html.crumina.net/html-utouch/svg-icons/chat1.svg",
      cardTitle: "Tech Support",
      cardDes: "24*7 Tech Support and Consultancy"
    },    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
