import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

import { EvaluationPage } from '../evaluation/evaluation';
import { MapPage } from '../map/map';

@Component({
    selector: 'page-eco',
    templateUrl: 'eco.html'
})
export class EcoPage {
    points = 30;
    constructor(
        public navCtrl: NavController,
        public actionsheetCtrl: ActionSheetController) { }

    onClaimReward() {
        let actionSheet = this.actionsheetCtrl.create({
            title: 'Deseas reclamar tu nuevo premio:',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Canjear',
                    role: 'destructive',
                    handler: () => {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Reclamar',
                    handler: () => {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    onEvaluate() {
        this.navCtrl.push(EvaluationPage);
    }

    onMap() {
        this.navCtrl.push(MapPage);
    }
}
