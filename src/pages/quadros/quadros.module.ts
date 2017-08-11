import { NgModule }                 from '@angular/core';
import { IonicPageModule }          from 'ionic-angular';
import { QuadrosComponent }         from "./quadros";

@NgModule({
    declarations: [
        QuadrosComponent
    ],
    imports: [
        IonicPageModule.forChild(QuadrosComponent)
    ],
    entryComponents: [ ],
    providers: [ ]
})

export class QuadrosComponentModule {}
