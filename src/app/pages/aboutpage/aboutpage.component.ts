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
      memberName: 'Moxesh Mehta',
      memberIntro: 'He comes from a product background and is an expert in product creation , trend and its propogation in market',
      linkedIn: 'https://www.linkedin.com/in/moxesh-mehta-a64a67147/',
    },
    {
      memberAvatar: 'assets/images/teammember3.png',
      memberRole: 'Founder',
      memberName: 'Abhijit Chaudhry',
      memberIntro: 'He comes from a information security background with strong hold on research and design of solution',
      linkedIn: 'https://www.linkedin.com/in/abhijit-chaudhry-97aa9619b/',
    },
  ]

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

}
