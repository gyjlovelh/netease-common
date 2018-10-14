/**
 * Created by guanyj on  2018/10/14
 */


import {Component} from '@angular/core';

@Component({
    selector: 'netease-zorro-demo',
    templateUrl: './ng-zorro-antd-override.component.html'
})

export class NgZorroAntdOverrideComponent {
    selectData: string = '湖北省';

    selectList: string[] = ['湖北省', '北京市', '湖南省'];

    dataSet: any[];

    constructor() {
        this.dataSet = [
            {
                key    : '1',
                name   : 'John Brown',
                age    : 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                key    : '2',
                name   : 'Jim Green',
                age    : 42,
                address: 'London No. 1 Lake Park'
            },
            {
                key    : '3',
                name   : 'Joe Black',
                age    : 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ];
    }
}
