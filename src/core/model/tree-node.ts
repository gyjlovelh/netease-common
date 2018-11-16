/**
 * Created by guanyj on  2018/11/12
 */

export class TreeNode<T> {
    $id: string;
    $parent: TreeNode<T>;
    $children: Array<TreeNode<T>>;
    $expanded: string;
    $checkeable: boolean;

    $bindData: T;

    private _$checked: boolean;

    constructor(node: T) {
        this.$parent = null;
        this.$children = [];

        this.$bindData = node;
    }

    addChildren(children: any, index: number = -1) {

    }

    set $checked(checked: boolean) {
        this._$checked = checked;
    }

    get $checked(): boolean {
        return this._$checked;
    }
}
