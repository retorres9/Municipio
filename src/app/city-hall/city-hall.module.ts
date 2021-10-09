import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityHallRoutingModule } from './city-hall-routing.module';
import { LawsModule } from './laws/laws.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CityHallRoutingModule,
    LawsModule
  ]
})
export class CityHallModule { }
