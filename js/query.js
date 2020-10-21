"use strict";
var bdd = /** @class */ (function () {
    function bdd(flag) {
        this.flag = flag;
    }
    bdd.prototype.query = function (flag) {
        if (flag) {
            return [
                {
                    id: 1,
                    creation_date: "s",
                    create_hour: "d",
                },
            ];
        } else {
            return false;
        }
    };
    bdd.prototype.service = function () {
        return this.query(this.flag);
    };
    return bdd;
}());
var controller = new bdd(true);