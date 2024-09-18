import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss'],
})
export class BottomNavBarComponent {
  @ViewChild('tabs') tabsComponent: IonTabs | null = null;
  private readonly PAGES_WITHOUT_NAV_BAR = ['/', '/sign-up', '/ride-accepted'];

  constructor(private router: Router) {}

  public getIconName(iconName: string, tabName: string) {
    const currentTab = this.getCurrentTab();

    if (currentTab === tabName) return iconName;

    return `${iconName}-outline`;
  }

  public getCurrentTab() {
    if (this.tabsComponent === null) return '';

    return this.tabsComponent.getSelected();
  }

  public canShowNavBar() {
    const currentUrl = this.router.url;

    console.log(!this.PAGES_WITHOUT_NAV_BAR.includes(currentUrl));

    return !this.PAGES_WITHOUT_NAV_BAR.includes(currentUrl);
  }
}
