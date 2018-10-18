/**
 * Created by guanyj on  2018/10/14
 */


import {Component} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';

@Component({
    selector: 'netease-zorro-demo',
    templateUrl: './ng-zorro-antd-override.component.html'
})

export class NgZorroAntdOverrideComponent {
    selectData: string = '湖北省';

    selectList: string[] = ['湖北省', '北京市', '湖南省'];

    dataSet: any[];

    suggestions: string[];

    sugg: string;

    constructor(
        private $model: NzModalService
    ) {
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

        this.suggestions = [
            '@guanyj', 'love', 'amor', 'haha', 'wuyulong', 'liubei'
        ];
    }

    handleOpenModal() {
        this.$model.create({
            nzTitle: 'Modal Title',
            nzContent: 'string, will close after 1 sec',
            nzClosable: false,
            nzMask: false,
            nzClassName: 'override'
        });
    }

}
