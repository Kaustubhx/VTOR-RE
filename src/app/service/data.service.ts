import { Injectable } from '@angular/core';
import { vtorApp } from '../interfaces/appdetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  app: vtorApp[] = [
    {
      id: '1',
      bannerColor: '#292680',
      appHeading: "Myyba Shops - Your Bizz Buddy",
      appNote: "Myyba Shops enlightning path of vendors to brighter futures for their brand",
      appDemoImage: "/assets/images/screen1.png",
      appDescription_Title1: "Myyba Shops - Global Mall",
      appDescription_1: "Myyba Shops connects all local shops into a global mall and provides a wide opportunity of sales",
      appDescription_Title2: "Myyba Shops - Future of Sales",
      appDescription_2: "Myyba Shops has wide features for marketing for increase in sales and automation in sales operations",
      appWorkingImage: "/assets/images/appImage_3 MyybaApp.png",
      appWorkingDescription: "Myyba Shop App helps businesses to grow their business online and handle business operations and accounting with ease",
      appPlusPoint_1: "Online Sales Portal",
      appPlusPoint_2: "WhatsApp & SMS based Order/Payment updates",
      appPlusPoint_3: "40+ online payment options",
      appPlusPoint_4: "Store Customization, Order Management, Accounting , Customer and Lead Management and more features",

      appImage_1: '/assets/images/appImage_1 MyybaApp.png',
      appImage_2: '/assets/images/appImage_2 MyybaApp.png',
      appImage_3: '/assets/images/appImage_3 MyybaApp.png',
      appImage_4: '/assets/images/appImage_4 MyybaApp.png',
      appName: "Myyba Shops",
      appShortDesc: "Your Bizz Buddy",

    },
    {
      id: '2',
      bannerColor: '#e10018',
      appHeading: "VTOR FIT - Your Fitness Expert",
      appNote: "Its a complete solution for all fitness organizations and allows you to digitize and automate all your operations",
      appDemoImage: "/assets/images/screen2.png",
      appDescription_Title1: "Lead and Customer Management",
      appDescription_1: "Its high quality management portal allows you to keep record , intimate , and update your customer and leads with ease",
      appDescription_Title2: "Workout and Plan creations",
      appDescription_2: "Its Admin Portal allows you to create plans , subscription , workout routines and programmes for your clients and keep them updated on their apps",
      appWorkingImage: "/assets/images/appImage_2 FitApps.png",
      appWorkingDescription: "Its a complete solution to create, update , manage , assign workout , track progress for any fitness client and their organizations",
      appPlusPoint_1: "Admin Panel - Customer and Lead Management, Employee Management,Zoom Session creation, Workout Creator, Tracker and many more",
      appPlusPoint_2: "Client App - contains workouts, zoom session, fitness programms , workout routines , diet tracker and more things",
      appPlusPoint_3: "Trainer App - Zoom session with client and their fitness tracker , workout creator and assigner and many more",
      appPlusPoint_4: "Fitness Store - Its intigration with online fitness store allows clients to buy and sell fitness products online",
      appImage_1: '/assets/images/appImage_1 FitApps.png',
      appImage_2: '/assets/images/appImage_2 FitApps.png',
      appImage_3: '/assets/images/appImage_3 FitApps.png',
      appImage_4: '/assets/images/appImage_4 FitApps.png',
      appName: "VTOR FIT",
      appShortDesc: "VTOR FIT - your Fitness expert a complete solution to any fitness organizations"
    },
    {
      id: '3',
      bannerColor: '#cf3424',
      appHeading: "VTOR COMMERCE - Multivendor Ecommerce Platform",
      appNote: "Its a complete solution for single domain commercial platform for multiple vendors with solution to business automation, order management and payment management",
      appDemoImage: "/assets/images/screen3.png",
      appDescription_Title1: "Lead and Customer Management",
      appDescription_1: "Its high quality management portal allows you to keep record , intimate , and update your customer and leads with ease",
      appDescription_Title2: "Order & Payment Management",
      appDescription_2: "Its an administered order management platform with order distribution between order managers based on load and smooth payment management with 40+ payment options and its accounting",
      appWorkingImage: "/assets/images/appImage_3 Ecomm.png",
      appWorkingDescription: "Its a complete solution to buyers with its easy to order platform",
      appPlusPoint_1: "Admin Panel - Customer and Lead Management, Employee Management,Order Management, Accounting and many more",
      appPlusPoint_2: "Buyer App - Browse for product, cart, order process, all types of payments ",
      appPlusPoint_3: "Delivery App - Delivery orders, reports , tracking , maps and payment collections",
      appPlusPoint_4: "Supplier App - List ,Sell, Manage your product and payments on platform with ease ",
      appImage_1: '/assets/images/appImage_1 Ecomm.png',
      appImage_2: '/assets/images/appImage_2 Ecomm.png',
      appImage_3: '/assets/images/appImage_3 Ecomm.png',
      appImage_4: '/assets/images/appImage_4 Ecomm.png',
      appName: "VTOR Commerce",
      appShortDesc: "VTOR Commerce - complete solution for single domain commercial platform for multiple vendors with solution to business automation, order management and payment management"
    },
    {
      id: '4',
      bannerColor: '#140a51',
      appHeading: "VTOR Dental - Your Dental Buddy",
      appNote: "Its a complete digital solution for for Dental Vendors , Dentist's  and Customers with Dental Problems ",
      appDemoImage: "/assets/images/screen4.png",
      appDescription_Title1: "Lead and Customer Management",
      appDescription_1: "Its high quality management portal allows you to keep record , intimate , and update your customer and leads with ease",
      appDescription_Title2: "Queries and Treatment Management",
      appDescription_2: "Its an administered query management platform processes pateints queries with given pics , videos and form filled data and assigns a respected dental expert accordingly",
      appWorkingImage: "/assets/images/Dental_Buddy-SS.png",
      appWorkingDescription: "Its a complete solution to the users to get dental prescriptions , treatment and related products during the whole treatment process with ease",
      appPlusPoint_1: "Admin Panel - Customer and Lead Management, Dentist Management,Appointment Management, Accounting and many more",
      appPlusPoint_2: "Customer App - Query Registrations, Appointments , Treatments , Products, Progress reports ",
      appPlusPoint_3: "Dentist App - Track Pateints, Progress Tracker, Payments, Appointments",
      appPlusPoint_4: "Services Portal - Dental Product service at home tracker and management",
      appImage_1: '/assets/images/appImage_1 DentalApp.png',
      appImage_2: '/assets/images/appImage_2 DentalApp.png',
      appImage_3: '/assets/images/appImage_3 DentalApp.png',
      appImage_4: '/assets/images/appImage_4 DentalApp.png',
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
