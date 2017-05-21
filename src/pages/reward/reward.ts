import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EcoPage } from '../eco/eco';

@Component({
    selector: 'page-reward',
    templateUrl: 'reward.html'
})
export class RewardPage {
    isReward: boolean = false;
    rewardOption: string = '';

    constructor(public navCtrl: NavController) { }

    onReward(e) {
        console.log(this.rewardOption);
        if (this.rewardOption !== '') {
            this.isReward = true;
        }
    }

    onOk(){
         this.navCtrl.push(EcoPage);
    }

}
