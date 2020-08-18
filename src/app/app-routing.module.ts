import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ShopComponent } from './shop/shop.component';
import { MagzineComponent } from './magzine/magzine.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: "full"},
  { path:'home', component: HomeComponent},
  { path:'details/:id', component: DetailsComponent},
  { path:'aboutUs', component: ShopComponent},
  { path:'contact', component: MagzineComponent},
  { path:'header', component: HeaderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
