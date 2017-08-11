import { Component }                from '@angular/core';
import { NavController,
         IonicPage }                from 'ionic-angular';

@IonicPage({
    name: "quadros",
    segment: "quadros"
})

@Component({
    selector: 'page-quadros',
    templateUrl: 'quadros.html'
})

export class QuadrosComponent {

    public quadros: Array<Object>;

    constructor(
        public navCtrl: NavController
    ) { }

    ngOnInit() {
        this.getQuadros();
    }

    getQuadros() {
        this.quadros = [
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
    
    goToDetalheQuadros(quadro: Object) {
        this.navCtrl.push('quadro/show', {
            id: quadro['id'],
            quadro: quadro
        });
    }

}