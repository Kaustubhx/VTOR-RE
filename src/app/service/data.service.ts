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
      appHeading: "Myyba Shops - Your Bizz Buddy",
      appNote: "Myyba Shops enlightning path of vendors to brighter futures for their brand",
      appDemoImage: "/assets/images/screen1.png",
      appDescription_Title1: "Myyba Shops - Global Mall",
      appDescription_1: "Myyba Shops connects all local shops into a global mall and provides a wide opportunity of sales",
      appDescription_Title2: "Myyba Shops - Future of Sales",
      appDescription_2: "Myyba Shops has wide features for marketing for increase in sales and automation in sales operations",
      appWorkingImage: "https://play-lh.googleusercontent.com/GLODKQhrLSLxD3bcXrxwMRC2qaEY-aND1CDPoMYyCK6uqVSJHCE_3RB9Mbn8kH8AFpk=w2560-h1440-rw",
      appWorkingDescription: "Myyba Shop App helps businesses to grow their business online and handle business operations and accounting with ease",
      appPlusPoint_1: "Online Sales Portal",
      appPlusPoint_2: "WhatsApp & SMS based Order/Payment updates",
      appPlusPoint_3: "40+ online payment options",
      appPlusPoint_4: "Store Customization, Order Management, Accounting , Customer and Lead Management and more features",

      appImage_1: 'https://play-lh.googleusercontent.com/a-KhO5en9zsc1NI9P9RTI83x7anKSgPTfY5kGulKAqRRPMBwdvojkalC4gCtWJxG-gAK=w2560-h1440-rw',
      appImage_2: 'https://play-lh.googleusercontent.com/UP9Nwu2LEHAJHGzn57yMCTtp1oUW6jqfDtp03W0mZFFsoq2RoD7HTzIW8rn5Bkoy0w=w2560-h1440-rw',
      appImage_3: 'https://play-lh.googleusercontent.com/3V9QBR_nrBHl5PFlblmnH6ghqb33oX9pa3_PAhKOklYfu-f0VWdeVkYQcHnueMMcTw=w2560-h1440-rw',
      appImage_4: 'https://play-lh.googleusercontent.com/XQVcn1a6quDH00u-SbWI_VEl3Qd3QNi2-uVAf0R4tfeVjQSOXmDzrblt_xv0lRTj-Lc2=w2560-h1440-rw',
      appName: "Myyba Shops",
      appShortDesc: "Your Bizz Buddy",

    },
    {
      id: '2',
      bannerColor: '#bb26f0',
      appHeading: "VTOR FIT - Your Fitness Expert",
      appNote: "Its a complete solution for all fitness organizations and allows you to digitize and automate all your operations",
      appDemoImage: "/assets/images/screen2.png",
      appDescription_Title1: "Lead and Customer Management",
      appDescription_1: "Its high quality management portal allows you to keep record , intimate , and update your customer and leads with ease",
      appDescription_Title2: "Workout and Plan creations",
      appDescription_2: "Its Admin Portal allows you to create plans , subscription , workout routines and programmes for your clients and keep them updated on their apps",
      appWorkingImage: "https://play-lh.googleusercontent.com/GLODKQhrLSLxD3bcXrxwMRC2qaEY-aND1CDPoMYyCK6uqVSJHCE_3RB9Mbn8kH8AFpk=w2560-h1440-rw",
      appWorkingDescription: "Its a complete solution to create, update , manage , assign workout , track progress for any fitness client and their organizations",
      appPlusPoint_1: "Admin Panel - Customer and Lead Management, Employee Management,Zoom Session creation, Workout Creator, Tracker and many more",
      appPlusPoint_2: "Client App - contains workouts, zoom session, fitness programms , workout routines , diet tracker and more things",
      appPlusPoint_3: "Trainer App - Zoom session with client and their fitness tracker , workout creator and assigner and many more",
      appPlusPoint_4: "Fitness Store - Its intigration with online fitness store allows clients to buy and sell fitness products online",
      appImage_1: 'https://html.crumina.net/html-utouch/img/screen2.png',
      appImage_2: 'https://html.crumina.net/html-utouch/img/screen2.png',
      appImage_3: 'https://html.crumina.net/html-utouch/img/screen2.png',
      appImage_4: 'https://html.crumina.net/html-utouch/img/screen2.png',
      appName: "VTOR FIT",
      appShortDesc: "VTOR FIT - your Fitness expert a complete solution to any fitness organizations"
    },
    {
      id: '3',
      bannerColor: '#007bef',
      appHeading: "VTOR COMMERCE - Multivendor Ecommerce Platform",
      appNote: "Its a complete solution for single domain commercial platform for multiple vendors with solution to business automation, order management and payment management",
      appDemoImage: "/assets/images/screen3.png",
      appDescription_Title1: "Lead and Customer Management",
      appDescription_1: "Its high quality management portal allows you to keep record , intimate , and update your customer and leads with ease",
      appDescription_Title2: "Order & Payment Management",
      appDescription_2: "Its an administered order management platform with order distribution between order managers based on load and smooth payment management with 40+ payment options and its accounting",
      appWorkingImage: "https://play-lh.googleusercontent.com/GLODKQhrLSLxD3bcXrxwMRC2qaEY-aND1CDPoMYyCK6uqVSJHCE_3RB9Mbn8kH8AFpk=w2560-h1440-rw",
      appWorkingDescription: "Its a complete solution to buyers with its easy to order platform",
      appPlusPoint_1: "Admin Panel - Customer and Lead Management, Employee Management,Order Management, Accounting and many more",
      appPlusPoint_2: "Buyer App - Browse for product, cart, order process, all types of payments ",
      appPlusPoint_3: "Delivery App - Delivery orders, reports , tracking , maps and payment collections",
      appPlusPoint_4: "Supplier App - List ,Sell, Manage your product and payments on platform with ease ",
      appImage_1: 'https://html.crumina.net/html-utouch/img/screen2.png',
      appImage_2: 'https://html.crumina.net/html-utouch/img/screen2.png',
      appImage_3: 'https://html.crumina.net/html-utouch/img/screen2.png',
      appImage_4: 'https://html.crumina.net/html-utouch/img/screen2.png',
      appName: "VTOR Commerce",
      appShortDesc: "VTOR Commerce - complete solution for single domain commercial platform for multiple vendors with solution to business automation, order management and payment management"
    },
    {
      id: '4',
      bannerColor: '#bb26f0',
      appHeading: "VTOR Dental - Your Dental Buddy",
      appNote: "Its a complete digital solution for for Dental Vendors , Dentist's  and Customers with Dental Problems ",
      appDemoImage: "/assets/images/screen4.png",
      appDescription_Title1: "Lead and Customer Management",
      appDescription_1: "Its high quality management portal allows you to keep record , intimate , and update your customer and leads with ease",
      appDescription_Title2: "Queries and Treatment Management",
      appDescription_2: "Its an administered query management platform processes pateints queries with given pics , videos and form filled data and assigns a respected dental expert accordingly",
      appWorkingImage: "https://play-lh.googleusercontent.com/GLODKQhrLSLxD3bcXrxwMRC2qaEY-aND1CDPoMYyCK6uqVSJHCE_3RB9Mbn8kH8AFpk=w2560-h1440-rw",
      appWorkingDescription: "Its a complete solution to the users to get dental prescriptions , treatment and related products during the whole treatment process with ease",
      appPlusPoint_1: "Admin Panel - Customer and Lead Management, Dentist Management,Appointment Management, Accounting and many more",
      appPlusPoint_2: "Customer App - Query Registrations, Appointments , Treatments , Products, Progress reports ",
      appPlusPoint_3: "Dentist App - Track Pateints, Progress Tracker, Payments, Appointments",
      appPlusPoint_4: "Services Portal - Dental Product service at home tracker and management",
      appImage_1: 'https://html.crumina.net/html-utouch/img/screen2.png',
      appImage_2: 'https://html.crumina.net/html-utouch/img/screen2.png',
      appImage_3: 'https://html.crumina.net/html-utouch/img/screen2.png',
      appImage_4: '/assets/images/Dental_Buddy-SS.png',
      appName: "VTOR Dental",
      appShortDesc: "VTOR Dental - A complete digital solution for for Dental Vendors , Dentist's  and Customers with Dental Problems "
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
