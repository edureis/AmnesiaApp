import { Component }                from '@angular/core';
import { NavController,
         IonicPage,
         NavParams }                from 'ionic-angular';
import { QuadrosComponent }         from '../quadros/quadros';

@IonicPage({
    name: "quadro/show",
    segment: "quadro/:id"
})

@Component({
    selector: 'page-detalhe-quadros',
    templateUrl: 'quadro-detalhe.html'
})

export class QuadroDetalheComponent {

    public quadro: Object;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) { }

    ngOnInit() {
        this.quadro = this.navParams.get('quadro');
    }

}
