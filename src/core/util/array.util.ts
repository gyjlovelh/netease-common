/**
 * Created by guanyj on  2018/11/13
 */


export class ArrayUtil {

    static getUnionSet<T = any>(...targets: T[]) {
        const target = [];
        target.push(...targets);
        return new Proxy(target, {
            get: function (t, p, receiver) {
                if (typeof p === 'string') {
                    console.log(`getter ${p}...`);
                    const index = Number(p);
                    if (index < 0) {
                        p = String(t.length + index);
                    }
                }
                return Reflect.get(t, p, receiver);
            },
            set: function (t, p, v, receiver) {
                console.log(`setter ${p}--${v}...`);
                if (p === 'length') {
                    return Reflect.set(t, p, t.length, receiver);
                }
                const index = Number(p);
                if (index >= 0) {
                    if (t.includes(v)) {
                        console.log('已有重复值');
                        return Reflect.set(t, 'length', t.length - 1, receiver);
                    }
                }
                console.log('array setting', t, p, v);
                return Reflect.set(t, p, v, receiver);
            }
        });

        function Demo() {
            let name;
            Object.defineProperty(this, 'name', {
                get: function () {
                    return name;
                },
                set: function (n) {
                    name = n;
                }
            });

            return new Proxy({}, {
                set: function (t, p, value, receiver) {
                    return Reflect.set(t, p, value, receiver);
                }
            });
        }
    }
}
