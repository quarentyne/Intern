'use strict';

Function.prototype.myBind = function (context, args) {
    const thisItem = Object.create(context);
    console.log(this);
    return function () {
        thisItem.func = this;
        return thisItem.func(args);
    }
}

function f() {
    return this.a + 1;
}

let obj = {
    a: 10,
};

let f2 = f.myBind(obj);
console.dir(f2());