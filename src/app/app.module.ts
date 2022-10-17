import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './components/banner/banner.component';
import { GplaybuttonComponent } from './reusabelComponents/gplaybutton/gplaybutton.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsliderComponent } from './components/productslider/productslider.component';
import { SingleSupportcardComponent } from './reusabelComponents/single-supportcard/single-supportcard.component';
import { SupportcardsComponent } from './components/supportcards/supportcards.component';
import { ClientreviewsComponent } from './components/clientreviews/clientreviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { LabstorycarouselComponent } from './components/labstorycarousel/labstorycarousel.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    GplaybuttonComponent,
    HomepageComponent,
    HeaderComponent,
    ProductsliderComponent,
    SingleSupportcardComponent,
    SupportcardsComponent,
    ClientreviewsComponent,
    FooterComponent,
    AboutpageComponent,
    LabstorycarouselComponent,
    ContactpageComponent,
    ProductpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
