import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './data-binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { ClassBindingComponent } from './data-binding/class-binding/class-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './data-binding/two-way-data-binding/two-way-data-binding.component';

//form
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// for ngx bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { StructuralComponent } from './directive/structural/structural.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { NgswitchComponent } from './directive/ngswitch/ngswitch.component';
import { NgforComponent } from './directive/ngfor/ngfor.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ProductComponent } from './page/product/product.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { TvComponent } from './product/tv/tv.component';
import { PhoneComponent } from './product/phone/phone.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';
import { ContactComponent } from './page/contact/contact.component';
import { CardComponent } from './component/card/card.component';
import { ChildComponent } from './component/child/child.component';
import { TestDirective } from './appDirective/test.directive';
import { Pipe1Pipe } from './appPipes/pipe1.pipe';
import { FilterPipe } from './appPipes/filter.pipe';


// import classes and declaration in ngModule for later use



@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    BootstrapComponent,
    StructuralComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    NgswitchComponent,
    NgforComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    AboutusComponent,
    TvComponent,
    PhoneComponent,
    LaptopComponent,
    WashingMachineComponent,
    ContactComponent,
    CardComponent,
    ChildComponent,
    TestDirective,
    Pipe1Pipe,
    FilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
