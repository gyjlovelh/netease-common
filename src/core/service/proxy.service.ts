/**
 * Created by guanyj on  2018/11/15
 */
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class ProxyService {
    private $proxy: any;

    constructor(
        protected $http: HttpClient
    ) {
        this.$proxy = new Proxy($http, {
            get: function (target, p, receiver) {
                // 某些逻辑。。。。
                return Reflect.get(target, p, receiver);
            }
        });
    }

    /**
     * 处理请求
     * param params
     * param reflect
     * returns {Observable<T>}
     */
    handler<T = any>(params?: any, reflect?: any): Observable<T> {
        if (!reflect) {
            reflect = params;
            params = undefined;
        }
        return this.$proxy[reflect.method](reflect.url, params);
    }
}
