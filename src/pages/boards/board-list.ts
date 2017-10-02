import { Component }                from '@angular/core';
import { NavController,
         IonicPage }                from 'ionic-angular';
import { Board }                    from '../../interfaces/board';

@IonicPage({
    name: "boards",
    segment: "boards"
})

@Component({
    selector: 'board-list',
    templateUrl: 'board-list.html'
})

export class BoardListComponent {

    public boards: Array<Board>;

    constructor(
        public navCtrl: NavController
    ) { }

    ngOnInit() {
        this.getBoards();
    }

    getBoards() {
        this.boards = [
            {
                "id": 1,
                "titulo": "Quadro 1",
                "descricao": "Este é o primeiro quadro"
            },
            {
                "id": 2,
                "titulo": "Quadro 2",
                "descricao": "Este é o segundo quadro"
            },
            {
                "id": 3,
                "titulo": "Quadro 3",
                "descricao": "Este é o terceiro quadro"
            },
            {
                "id": 4,
                "titulo": "Quadro 4",
                "descricao": "Este é o quarto quadro"
            },
            {
                "id": 5,
                "titulo": "Quadro 5",
                "descricao": "Este é o quinto quadro"
            },
            {
                "id": 6,
                "titulo": "Quadro 6",
                "descricao": "Este é o sexto quadro"
            }
        ]
    }
    
    goToBoardDetails(board: Board) {
        this.navCtrl.push('board/show', {
            id: board['id'],
            board: board
        });
    }

    searchBoard($event) {
        this.getBoards();
        let searchTerm = $event.target.value;

        if (searchTerm && searchTerm.trim() != '')
            this.boards = this.boards.filter((board) => {
                return (board.titulo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
            });
    }

}