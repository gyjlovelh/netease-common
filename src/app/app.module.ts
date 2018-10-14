import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {NormalCoverDemoComponent} from './demos/normal-cover/normal-cover-demo.component';
import {ROUTER_CONFIG} from './app.routes';
import {NeteaseCommonModule} from '../core/netease-common.module';
import {SongListCoverDemoComponent} from './demos/song-list-cover-demo/song-list-cover-demo.component';
import {NeteaseNormalButtonDemoComponent} from './demos/netease-normal-button-demo/netease-normal-button-demo.component';
import {PlaybarComponent} from './demos/playbar/playbar.component';
import {FormsModule} from '@angular/forms';
import {TableIcnDemoComponent} from './demos/table-icn-demo/table-icn-demo.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NeteaseCommonModule,
        RouterModule.forRoot(ROUTER_CONFIG)
    ],
    declarations: [
        AppComponent,
        NormalCoverDemoComponent,
        SongListCoverDemoComponent,
        NeteaseNormalButtonDemoComponent,
        PlaybarComponent,
        TableIcnDemoComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
