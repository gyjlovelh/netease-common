/**
 * Created by guanyj on  2018/10/12
 */


import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'netease-song-list-cover',
    templateUrl: './song-list-cover.component.html',
    styleUrls: ['./song-list-cover.component.scss']
})

export class SongListCoverComponent implements OnChanges {

    @Input() songListId: string;

    @Input() breviary: boolean = false;

    songListInfo: any;

    constructor() {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.songListId && changes.songListId.currentValue) {
            // 查询接口
            this.songListInfo = {
                title: '霜降之时不可追，却知冬至已渐近',
                imageUrl: 'http://p1.music.126.net/tKBS_Xhu3ZPIA2_EGL9vVg==/109951163374132962.jpg?param=140y140'
            }
        }
    }

}
