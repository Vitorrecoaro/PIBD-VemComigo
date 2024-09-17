import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride-search-results',
  templateUrl: './ride-search-results.page.html',
  styleUrls: ['./ride-search-results.page.scss'],
})
export class RideSearchResultsPage {
  constructor(private router: Router) {}

  public onClickRide() {
    this.router.navigate(['ride-search/ride-search-details']);
  }
}
