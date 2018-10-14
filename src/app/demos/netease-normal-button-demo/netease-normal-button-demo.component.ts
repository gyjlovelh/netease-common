/**
 * Created by guanyj on  2018/10/14
 */
import {Component} from '@angular/core';
import {BtnTypeEnum} from '../../../core/component/enum/btn-type.enum';

@Component({
    selector: 'netease-normal-button-demo',
    templateUrl: './netease-normal-button-demo.component.html'
})

export class NeteaseNormalButtonDemoComponent {
    btnTypeEnum = BtnTypeEnum;
    btnDisabled: boolean = false;
}
