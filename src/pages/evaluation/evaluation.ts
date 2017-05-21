import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as $ from "jquery";
import 'slick-carousel/slick/slick';

import { EcoPage } from '../eco/eco';

@Component({
    selector: 'page-evaluation',
    templateUrl: 'evaluation.html'
})
export class EvaluationPage {

    constructor(public navCtrl: NavController) {

    }
    ngOnInit() {
        $('.carousel').slick({
            dots: true,
            centerMode: true,
            infinite: true,
            slidesToShow: 1
        });
    }

    onSave(){
        this.navCtrl.pop(EcoPage);
    }

}
