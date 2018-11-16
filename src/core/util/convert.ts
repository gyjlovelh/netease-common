/**
 * Created by guanyj on  2018/11/7
 */

import { coerceBooleanProperty } from '@angular/cdk/coercion';

export function toBoolean(value: boolean | string): boolean {
    return coerceBooleanProperty(value);
}

export function InputBoolean(): any {
    return function InputBooleanPropDecorator(target: object, name: string): void {
        // Add our own private prop
        const privatePropName = `$$__${name}`;

        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by InputBoolean decorator.`);
        }

        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });

        Object.defineProperty(target, name, {
            get(): boolean {
                return this[privatePropName];
            },
            set(value: boolean | string): void {
                this[privatePropName] = toBoolean(value);
            }
        });
    };
}
