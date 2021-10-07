import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFormalitiesComponent } from './view-formalities/view-formalities.component';
import { FormalitiesRoutingModule } from './formalities-routing.module';
import { ListingFormalitiesComponent } from './listing-formalities/listing-formalities.component';
import { FormalitiesComponent } from './formalities.component';


@NgModule({
  declarations: [
    FormalitiesComponent,
    ViewFormalitiesComponent,
    ListingFormalitiesComponent
  ],
  imports: [
    CommonModule,
    FormalitiesRoutingModule
  ]
})
export class FormalitiesModule { }
