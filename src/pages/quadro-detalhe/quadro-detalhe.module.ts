import { NgModule }                 from '@angular/core';
import { IonicPageModule }          from 'ionic-angular';
import { QuadroDetalheComponent }   from './quadro-detalhe';

@NgModule({
    declarations: [
        QuadroDetalheComponent
    ],
    imports: [
        IonicPageModule.forChild(QuadroDetalheComponent)
    ],
    entryComponents: [ ],
    providers: [ ]
})

export class QuadroDetalheComponentModule {}
