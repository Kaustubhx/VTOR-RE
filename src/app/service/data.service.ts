import { Injectable } from '@angular/core';
import { vtorApp } from '../interfaces/appdetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  app: vtorApp[] = [
    {
      id: '1',
      bannerColor: '#007bef',
      appHeading: 'Mirum est notare quam littera gothica, quam nunc putamus parum',
      appNote: 'Quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas.',
      appDemoImage: 'https://html.crumina.net/html-utouch/img/screen3.png',
      appDescription_Title1: 'Investigationes demonstraverunt lectores legere me lius',
      appDescription_1: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per.',
      appDescription_Title2: 'Investigationes demonstraverunt lectores legere me lius',
      appDescription_2: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per.',
      appWorkingImage: 'https://play-lh.googleusercontent.com/GLODKQhrLSLxD3bcXrxwMRC2qaEY-aND1CDPoMYyCK6uqVSJHCE_3RB9Mbn8kH8AFpk=w2560-h1440-rw',
      appWorkingDescription: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per.',
      appPlusPoint_1: 'Qolor sit amet, consectetuer',
      appPlusPoint_2: 'Qolor sit amet, consectetuer',
      appPlusPoint_3: 'Qolor sit amet, consectetuer',
      appPlusPoint_4: 'Qolor sit amet, consectetuer',
      appImage_1: 'https://play-lh.googleusercontent.com/a-KhO5en9zsc1NI9P9RTI83x7anKSgPTfY5kGulKAqRRPMBwdvojkalC4gCtWJxG-gAK=w2560-h1440-rw',
      appImage_2: 'https://play-lh.googleusercontent.com/UP9Nwu2LEHAJHGzn57yMCTtp1oUW6jqfDtp03W0mZFFsoq2RoD7HTzIW8rn5Bkoy0w=w2560-h1440-rw',
      appImage_3: 'https://play-lh.googleusercontent.com/3V9QBR_nrBHl5PFlblmnH6ghqb33oX9pa3_PAhKOklYfu-f0VWdeVkYQcHnueMMcTw=w2560-h1440-rw',
      appImage_4: 'https://play-lh.googleusercontent.com/XQVcn1a6quDH00u-SbWI_VEl3Qd3QNi2-uVAf0R4tfeVjQSOXmDzrblt_xv0lRTj-Lc2=w2560-h1440-rw',
      appName: 'Myyba',
      appShortDesc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.',
    },
    {
      id: '2',
      bannerColor: '#bb26f0',
      appHeading: 'Mirum est notare quam littera gothica, quam nunc putamus parum',
      appNote: 'Quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas.',
      appDemoImage: 'https://html.crumina.net/html-utouch/img/screen1.png',
      appDescription_Title1: 'Investigationes demonstraverunt lectores legere me lius',
      appDescription_1: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per.',
      appDescription_Title2: 'Investigationes demonstraverunt lectores legere me lius',
      appDescription_2: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per.',
      appWorkingImage: 'https://play-lh.googleusercontent.com/GLODKQhrLSLxD3bcXrxwMRC2qaEY-aND1CDPoMYyCK6uqVSJHCE_3RB9Mbn8kH8AFpk=w2560-h1440-rw',
      appWorkingDescription: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per.',
      appPlusPoint_1: 'Qolor sit amet, consectetuer',
      appPlusPoint_2: 'Qolor sit amet, consectetuer',
      appPlusPoint_3: 'Qolor sit amet, consectetuer',
      appPlusPoint_4: 'Qolor sit amet, consectetuer',
      appImage_1: 'https://play-lh.googleusercontent.com/a-KhO5en9zsc1NI9P9RTI83x7anKSgPTfY5kGulKAqRRPMBwdvojkalC4gCtWJxG-gAK=w2560-h1440-rw',
      appImage_2: 'https://play-lh.googleusercontent.com/UP9Nwu2LEHAJHGzn57yMCTtp1oUW6jqfDtp03W0mZFFsoq2RoD7HTzIW8rn5Bkoy0w=w2560-h1440-rw',
      appImage_3: 'https://play-lh.googleusercontent.com/3V9QBR_nrBHl5PFlblmnH6ghqb33oX9pa3_PAhKOklYfu-f0VWdeVkYQcHnueMMcTw=w2560-h1440-rw',
      appImage_4: 'https://play-lh.googleusercontent.com/XQVcn1a6quDH00u-SbWI_VEl3Qd3QNi2-uVAf0R4tfeVjQSOXmDzrblt_xv0lRTj-Lc2=w2560-h1440-rw',
      appName: 'FitApps',
      appShortDesc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.',
    },
    
  ]


  getById(id: any) {
    let result = null
    this.app.forEach((element) => {
      if (element.id == id) {
        result = element
      }
    })
    return result
  }
  constructor() { }
}
