/**
 * Created by guanyj on  2018/10/12
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NormalCoverComponent} from './component/normal-cover/normal-cover.component';
import {SongListCoverComponent} from './component/song-list-cover/song-list-cover.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        NormalCoverComponent,
        SongListCoverComponent
    ],
    exports: [
        NormalCoverComponent,
        SongListCoverComponent
    ],
    entryComponents: [
        NormalCoverComponent
    ],
    providers: []
})

export class NeteaseCommonModule { }
