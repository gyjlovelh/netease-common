/**
 * Created by guanyj on  2018/11/2
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'unit'
})
export class UnitPipe implements PipeTransform {

    transform(value: any): string {
        return `@${value}:`;
    }
}
