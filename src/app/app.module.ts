import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ShopComponent } from './shop/shop.component';
import { MagzineComponent } from './magzine/magzine.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ShopComponent,
    MagzineComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
