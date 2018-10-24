/**
 * Created by guanyj on  2018/10/24
 */
import {Injectable} from '@angular/core';
import {StorageKey} from '../../const/storage-key';

@Injectable()
export class LocalStorageService {
    private prefix: string = StorageKey.prefix;
    private separator: string = StorageKey.separator;
    constructor() {}

    get(key: string): any {
        return JSON.parse(localStorage.getItem(`${this.prefix}${this.separator}${key}`));
    }

    set(key: string, value: any): void {
        localStorage.setItem(`${this.prefix}${this.separator}${key}`, typeof value === 'string' ? value : JSON.stringify(value));
    }

    /**
     * 移除
     * @param {string} key
     */
    remove(key: string) {
        localStorage.removeItem(`${this.prefix}${this.separator}${key}`);
    }
}
