import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  vtorTeamData = [
    {
      memberAvatar: 'assets/images/teammember3.png',
      memberRole: 'Founder',
      memberName: 'Abhijit Chaudhry',
      memberIntro: 'He comes from a information security background with strong hold on research and design of solution',
    },
    {
      memberAvatar: 'assets/images/teammember3.png',
      memberRole: 'Founder',
      memberName: 'Moxesh Mehta',
      memberIntro: 'He comes from a product background and is an expert in product creation , trend and its propogation in market',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
