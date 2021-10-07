import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthoritiesComponent } from './authorities/authorities.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'autoridades',
        component: AuthoritiesComponent
      },
      {
        path: '**',
        redirectTo: 'autoridades'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CityHallRoutingModule { }
