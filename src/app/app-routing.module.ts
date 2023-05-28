import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { AboutComponent } from './page/about/about.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { TvComponent } from './product/tv/tv.component';
import { PhoneComponent } from './product/phone/phone.component';
import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';
import { ContactComponent } from './page/contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductComponent,children:[
  
    {path:'laptop',component:LaptopComponent},
    {path:'tv',component:TvComponent},

    {path:'phone',component:PhoneComponent},

    {path:'washingMachine',component:WashingMachineComponent},


  ]},
  {path:'contact',component:ContactComponent},
  // {path:'product',children:[
  //   {path:'',component:ProductComponent},
  //   {path:'laptop',component:LaptopComponent},
  //   {path:'tv',component:TvComponent},

  //   {path:'phone',component:PhoneComponent},

  //   {path:'washingMachine',component:WashingMachineComponent},


  // ]},
  {path:'about',component:AboutComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'**',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
