/**
 * Created by guanyj on  2018/10/12
 */
import {Routes} from '@angular/router';
import {NormalCoverDemoComponent} from './demos/normal-cover/normal-cover-demo.component';
import {SongListCoverDemoComponent} from './demos/song-list-cover-demo/song-list-cover-demo.component';


export const ROUTER_CONFIG: Routes = [
    {path: 'netease-normal-cover', component: NormalCoverDemoComponent},
    {path: 'netease-song-list-cover', component: SongListCoverDemoComponent}
];

