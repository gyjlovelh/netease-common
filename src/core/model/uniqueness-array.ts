/**
 * Created by guanyj on  2018/11/13
 */


export class UniquenessArray<T = any>  {

    private primaryKey: string;

    private cacheMap: Map<string, T>;

    constructor(
        options?: {primaryKey?: string, targetArray?: T[]}
    ) {
        this.cacheMap = new Map();
        if (options) {
            this.primaryKey = options.primaryKey || '$id';
            (options.targetArray || []).forEach(item => {
                this.cacheMap.set(item[this.primaryKey], item);
            });
        }
    }

    push(...items: T[]): number {

        return 0;
    }
}
