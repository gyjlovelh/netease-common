/**
 * Created by guanyj on  2018/10/12
 */
import {Routes} from '@angular/router';
import {NormalCoverDemoComponent} from './demos/normal-cover/normal-cover-demo.component';
import {SongListCoverDemoComponent} from './demos/song-list-cover-demo/song-list-cover-demo.component';
import {NeteaseNormalButtonDemoComponent} from './demos/netease-normal-button-demo/netease-normal-button-demo.component';
import {PlaybarComponent} from './demos/playbar/playbar.component';
import {TableIcnDemoComponent} from './demos/table-icn-demo/table-icn-demo.component';
import {NgZorroAntdOverrideComponent} from './demos/ng-zorro-antd-override/ng-zorro-antd-override.component';


export const ROUTER_CONFIG: Routes = [
    {path: 'netease-normal-cover', component: NormalCoverDemoComponent},
    {path: 'netease-song-list-cover', component: SongListCoverDemoComponent},
    {path: 'netease-normal-button', component: NeteaseNormalButtonDemoComponent},
    {path: 'netease-playbar', component: PlaybarComponent},
    {path: 'netease-table-icn', component: TableIcnDemoComponent},
    {path: 'netease-zorro-demo', component: NgZorroAntdOverrideComponent}
];

