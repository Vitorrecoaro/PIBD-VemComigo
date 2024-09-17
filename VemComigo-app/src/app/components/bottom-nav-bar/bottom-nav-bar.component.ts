import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
//import { RouterService } from 'src/app/services/router/router.service';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss'],
})
export class BottomNavBarComponent {
  @ViewChild('tabs') tabsComponent: IonTabs | null = null;

  constructor() { }

  public getIconName(iconName: string, tabName: string) {
    const currentTab = this.getCurrentTab();

    if (currentTab === tabName) return iconName;

    return `${iconName}-outline`;
  }

  public getCurrentTab() {
    if (this.tabsComponent === null) return '';

    return this.tabsComponent.getSelected();
  }
}
