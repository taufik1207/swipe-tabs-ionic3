import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DealsPage } from '../deals/deals';
import { SettingPage } from '../setting/setting';
import { SuperTabs } from 'ionic2-super-tabs';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  pages = [
    { pageName: HomePage, title: 'Home', icon: 'home', id: 'homeTab'},
    { pageName: DealsPage, title: 'Deals', icon: 'pricetag', id: 'dealsTab'},
    { pageName: SettingPage, title: 'Setting', icon: 'settings', id: 'settingTab'}
  ];

  selectedTab = 0;
 
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onTabSelect(ev: any) {
    this.selectedTab = ev.index;
    this.superTabs.clearBadge(this.pages[ev.index].id);
  }

}
