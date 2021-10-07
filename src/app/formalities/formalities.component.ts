import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formalities',
  templateUrl: './formalities.component.html',
  styleUrls: ['./formalities.component.scss']
})
export class FormalitiesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProcedure() {
    this.router.navigateByUrl('tramites/view/s');
  }

}
