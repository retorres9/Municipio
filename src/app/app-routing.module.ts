import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tramites',
    loadChildren: () =>
      import('./formalities/formalities.module').then(
        (m) => m.FormalitiesModule
      ),
  },
  {
    path: 'municipio',
    loadChildren: () =>
      import('./city-hall/city-hall.module').then((m) => m.CityHallModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
