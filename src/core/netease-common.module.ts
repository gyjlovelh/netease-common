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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocalStorageService} from './service/local-storage/local-stotage.service';
import {UnitPipe} from './pipe/unit.pipe';
import {UrlDemoService} from './service/url-demo.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {ProxyService} from './service/proxy.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgZorroAntdModule
    ],
    declarations: [
        NormalCoverComponent,
        SongListCoverComponent,
        NormalButtonComponent,

        UnitPipe

    ],
    exports: [
        NormalCoverComponent,
        SongListCoverComponent,
        NormalButtonComponent,

        UnitPipe
    ],
    entryComponents: [
        NormalCoverComponent,
        NormalButtonComponent
    ],
    providers: [
        LocalStorageService,
        UrlDemoService,
        ProxyService
    ]
})

export class NeteaseCommonModule { }
