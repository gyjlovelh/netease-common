import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {NormalCoverDemoComponent} from './demos/normal-cover/normal-cover-demo.component';
import {ROUTER_CONFIG} from './app.routes';
import {NeteaseCommonModule} from '../core/netease-common.module';
import {SongListCoverDemoComponent} from './demos/song-list-cover-demo/song-list-cover-demo.component';

@NgModule({
    imports: [
        BrowserModule,
        NeteaseCommonModule,
        RouterModule.forRoot(ROUTER_CONFIG)
    ],
    declarations: [
        AppComponent,
        NormalCoverDemoComponent,
        SongListCoverDemoComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
