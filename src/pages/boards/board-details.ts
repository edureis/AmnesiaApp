import { Component }                from '@angular/core';
import { NavController,
         IonicPage, NavParams }     from 'ionic-angular';
import { Board }                    from '../../interfaces/board';

@IonicPage({
    name: "board/show",
    segment: "board/:id"
})

@Component({
    selector: 'board-details',
    templateUrl: 'board-details.html'
})

export class BoardDetailsComponent {

    public board: Board;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) { }

    ngOnInit() {
        this.board = this.navParams.get('board');
    }

}
