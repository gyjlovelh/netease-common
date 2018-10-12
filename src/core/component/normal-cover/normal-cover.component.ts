/**
 * Created by guanyj on  2018/10/12
 */

import {Component, Input} from '@angular/core';

@Component({
    selector: 'netease-normal-cover',
    templateUrl: './normal-cover.component.html'
})

export class NormalCoverComponent {

    /**
     * 跳转路由
     */
    @Input() navigateUrl: string;

    /**
     * 封面标题
     */
    @Input() title: string;

    /**
     * 图片链接
     */
    @Input() imageUrl: string;

    /**
     * 图片尺寸
     */
    @Input() size: number = 60;

    constructor() {}
}

