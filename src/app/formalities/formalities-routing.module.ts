import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ViewFormalitiesComponent } from './view-formalities/view-formalities.component';
import { ListingFormalitiesComponent } from './listing-formalities/listing-formalities.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listing',
        component: ListingFormalitiesComponent
      },
      {
        path: 'view/:id',
        component: ViewFormalitiesComponent
      },
      {
        path: '**',
        redirectTo: 'listing'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FormalitiesRoutingModule { }
