/**
 * Created by guanyj on  2018/10/14
 */
import {Component, Input} from '@angular/core';
import {BtnTypeEnum} from '../../enum/btn-type.enum';

@Component({
    selector: 'netease-normal-button',
    templateUrl: './normal-button.component.html',
    styleUrls: ['./normal-button.component.scss']
})

export class NormalButtonComponent {

    @Input() text: string;

    @Input() disabled: boolean = false;

    @Input() btnType: BtnTypeEnum;

    btnSetting: Map<any, any> = new Map<any, any>();

    constructor() {
        this.btnSetting.set(BtnTypeEnum.SHARE, {
            icon: 'netease-button-share',
            text: '分享'
        });

        this.btnSetting.set(BtnTypeEnum.LOAD, {
            icon: 'netease-button-load',
            text: '下载'
        });

        this.btnSetting.set(BtnTypeEnum.COMMENT, {
            icon: 'netease-button-comment',
            text: '评论'
        });

        this.btnSetting.set(BtnTypeEnum.FAVORITES, {
            icon: 'netease-button-favorites',
            text: '收藏'
        });

        this.btnSetting.set(BtnTypeEnum.MESSAGE, {
            icon: 'netease-button-message',
            text: '发私信'
        });

        this.btnSetting.set(BtnTypeEnum.NONE, {
            icon: 'netease-button-none',
            text: '编辑个人资料'
        });

        this.btnSetting.set(BtnTypeEnum.CREATE, {
            icon: 'netease-button-create',
            text: '新建'
        });
    }

}

