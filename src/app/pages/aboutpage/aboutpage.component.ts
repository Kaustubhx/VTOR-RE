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
      memberIntro: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
    },
    {
      memberAvatar: 'assets/images/teammember3.png',
      memberRole: 'Founder',
      memberName: 'Moxesh Mehta',
      memberIntro: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
    },
    {
      memberAvatar: 'assets/images/teammember2.png',
      memberRole: 'Founder',
      memberName: 'Britney Simpson',
      memberIntro: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
