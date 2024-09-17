import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private readonly PAGES_WITHOUT_NAV_BAR = ['/', '/sign-up'];

  constructor(private router: Router) {}

  public canShowNavBar() {
    const currentUrl = this.router.url;
    console.log(currentUrl);

    return !this.PAGES_WITHOUT_NAV_BAR.includes(currentUrl);
  }
}

