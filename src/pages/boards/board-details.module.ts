import { NgModule }                 from '@angular/core';
import { IonicPageModule }          from 'ionic-angular';
import { BoardDetailsComponent }    from './board-details';

@NgModule({
    declarations: [
        BoardDetailsComponent
    ],
    imports: [
        IonicPageModule.forChild(BoardDetailsComponent)
    ],
    entryComponents: [ ],
    providers: [ ]
})

export class BoardDetailsComponentModule {}
