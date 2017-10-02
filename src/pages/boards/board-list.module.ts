import { NgModule }                 from '@angular/core';
import { IonicPageModule }          from 'ionic-angular';
import { BoardListComponent }       from "./board-list";

@NgModule({
    declarations: [
        BoardListComponent
    ],
    imports: [
        IonicPageModule.forChild(BoardListComponent)
    ],
    entryComponents: [ ],
    providers: [ ]
})

export class BoardListComponentModule {}
