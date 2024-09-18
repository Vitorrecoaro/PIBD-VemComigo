import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride-accepted',
  templateUrl: './ride-accepted.page.html',
  styleUrls: ['./ride-accepted.page.scss'],
})
export class RideAcceptedPage {
  constructor(private router: Router) {}

  public async onButtonClick() {
    await this.router.navigate(['rides-history'], { replaceUrl: true });
  }
}
