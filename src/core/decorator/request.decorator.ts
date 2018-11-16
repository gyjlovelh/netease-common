/**
 * Created by guanyj on  2018/11/16
 */

/**
 * 类注解 用于指定接口前缀
 * param {string} prev
 * returns {(target: any) => void}
 * constructor
 */

const methodFiled = '$methods';
const urlPrev = '$urlPrev';
const ipAddress = '$ipAddress';

/**
 * 用于指定 请求后台的IP地址
 * param {string} address
 * returns {(target: any) => void}
 * constructor
 */
export function IpAddress(address: string) {
    return (target: any) => {
        console.log('address', address);
        Reflect.defineMetadata(ipAddress, address, target.prototype);
    };
}

/**
 * 请求路径前缀
 * param {string} prev
 * returns {(target: any) => void}
 * constructor
 */
export function PathPrefix(prev: string) {
    return (target: any) => {
        Reflect.defineMetadata(Symbol.for(methodFiled), new Map(), target.prototype);
        Reflect.defineMetadata(Symbol.for(urlPrev), prev, target.prototype);
    };
}

/**
 * 请求路径
 * param {string} uri
 * returns {(target, propertyKey, descriptor) => void}
 * constructor
 */
export function Path(uri: string) {
    return (target, propertyKey, descriptor) => {
        const fun = descriptor.value;
        descriptor.value = function () {
            const temp = arguments;
            let url = Reflect.getMetadata(Symbol.for(urlPrev), target) + uri;
            let i = 0;
            url = url.split('/')
                .map((item) => {
                        if (item.includes(':')) {
                            const parameterIndex = Reflect.getMetadata(`${propertyKey}.${item.replace(':', '')}`, target);
                            item = temp[parameterIndex];
                            i++;
                        }
                        return item;
                    }
                ).join('/');
            url = Reflect.getMetadata(ipAddress, target) + url;
            const method = Reflect.getMetadata(Symbol.for(methodFiled), target).get(propertyKey);
            // 将请求路径和请求方式注入打方法的参数最后一位
            temp.length++;
            temp[temp.length - 1] = {url, method};
            return fun.apply(this, temp);
        };
    };
}

/**
 * 由于匹配路由中的参数
 * param {string} param
 * returns {(target: any, propertyKey: (string | symbol), parameterIndex: number) => void}
 * constructor
 */
export function Params(param: string) {
    return (target: any, propertyKey: string | symbol, parameterIndex: number) => {
        Reflect.defineMetadata(`${propertyKey}.${param}`, parameterIndex, target);
    };
}

/**
 * 标注get请求方式
 * param target
 * param propertyKey
 * param descriptor
 * constructor
 */
export function Get(target, propertyKey, descriptor) {
    const fun = descriptor.value;
    descriptor.value = function () {
        const $methods = Reflect.getMetadata(Symbol.for(methodFiled), target);
        $methods.set(propertyKey, RequestMethods.GET);
        return fun.apply(this, arguments);
    };
}

/**
 * 标注post请求方式
 * param target
 * param propertyKey
 * param descriptor
 * constructor
 */
export function Post(target, propertyKey, descriptor) {
    const fun = descriptor.value;
    descriptor.value = function () {
        const $methods = Reflect.getMetadata(Symbol.for(methodFiled), target);
        $methods.set(propertyKey, RequestMethods.POST);
        return fun.apply(this, arguments);
    };
}

/**
 * 标注delete请求
 * param target
 * param propertyKey
 * param descriptor
 * constructor
 */
export function Delete(target, propertyKey, descriptor) {
    const fun = descriptor.value;
    descriptor.value = function () {
        const $methods = Reflect.getMetadata(Symbol.for(methodFiled), target);
        $methods.set(propertyKey, RequestMethods.DELETE);
        return fun.apply(this, arguments);
    };
}

/**
 * 标注Put请求方式
 * param target
 * param propertyKey
 * param descriptor
 * constructor
 */
export function Put(target, propertyKey, descriptor) {
    const fun = descriptor.value;
    descriptor.value = function () {
        const $methods = Reflect.getMetadata(Symbol.for(methodFiled), target);
        $methods.set(propertyKey, RequestMethods.PUT);
        return fun.apply(this, arguments);
    };
}

enum RequestMethods {

    GET = 'get',

    POST = 'post',

    DELETE = 'delete',

    PUT = 'put',

}
