/**
 * Created by guanyj on  2018/10/12
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NormalCoverComponent} from './component/normal-cover/normal-cover.component';
import {SongListCoverComponent} from './component/song-list-cover/song-list-cover.component';
import {NormalButtonComponent} from './component/normal-button/normal-button.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule
    ],
    declarations: [
        NormalCoverComponent,
        SongListCoverComponent,
        NormalButtonComponent
    ],
    exports: [
        NormalCoverComponent,
        SongListCoverComponent,
        NormalButtonComponent
    ],
    entryComponents: [
        NormalCoverComponent,
        NormalButtonComponent
    ],
    providers: []
})

export class NeteaseCommonModule { }
