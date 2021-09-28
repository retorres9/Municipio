import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-formalities',
  templateUrl: './listing-formalities.component.html',
  styleUrls: ['./listing-formalities.component.scss']
})
export class ListingFormalitiesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToRoute() {
    let s = 123;
    this.router.navigateByUrl(`tramites/view/${s}`);
  }
}
