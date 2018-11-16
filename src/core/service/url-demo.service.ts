/**
 * Created by guanyj on  2018/11/15
 */
import {Injectable} from '@angular/core';
import 'reflect-metadata';
import {ProxyService} from './proxy.service';
import {Delete, Get, IpAddress, Params, Path, PathPrefix, Post, Put} from '../decorator/request.decorator';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {URL_CONST} from '../const/url.const';

@IpAddress(environment.httpUrl)
@PathPrefix(URL_CONST.user.prefix)
@Injectable()
export class UrlDemoService {

    constructor(
        private $proxy: ProxyService
    ) {

    }

    /**
     *
     * param id
     * param reflect
     * returns {Observable<any>}
     */
    @Get
    @Path(URL_CONST.user.findUserById)
    findUserById(@Params('id') id: any, reflect?: any): Observable<any> {
        return this.$proxy.handler<any>(reflect);
    }

    @Post
    @Path('/insert')
    postMethodDemo(params: any, reflect?: any) {
        return this.$proxy.handler(params, reflect);
    }


    @Delete
    @Path('/delete/:id')
    deleteMethodDemo(@Params('id') id: string, reflect?: any) {
        return this.$proxy.handler(reflect);
    }

    @Put
    @Path('/modify')
    putMethodDemo(params: any, reflect?: any) {
        return this.$proxy.handler(params, reflect);
    }

}
