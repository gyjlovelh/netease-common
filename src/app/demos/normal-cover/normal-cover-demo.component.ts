/**
 * Created by guanyj on  2018/10/12
 */
import {Component, OnInit} from '@angular/core';
import {UrlDemoService} from '../../../core/service/url-demo.service';

@Component({
    selector: 'netease-normal-cover-demo',
    templateUrl: './normal-cover-demo.component.html'
})
export class NormalCoverDemoComponent implements OnInit {

    constructor(
        private $urlService: UrlDemoService
    ) {

    }

    ngOnInit() {
        this.$urlService.findUserById('5a9648b2fa7e0d24721b4135').subscribe(res => {
            console.log(res);
        });
        // this.$urlService.postMethodDemo({name: 'guanyj'}).subscribe(res => {});
        // this.$urlService.deleteMethodDemo('abcdefg').subscribe(res => {});
        // this.$urlService.putMethodDemo({name: 'zhangsan'}).subscribe(res => {});
    }
}
