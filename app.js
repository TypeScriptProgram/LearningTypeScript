"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tuples
let arr1 = ["sainath", 15];
let arr2 = [12, "Pratik"];
// Enums - enumeration - when we have to define the valus in key value pai
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var Status;
(function (Status) {
    Status["PENDING"] = "pending";
    Status["ACTIVE"] = "active";
    Status["DISABLED"] = "disables";
})(Status || (Status = {}));
// Any , unknown, void ,null,undefined , never
let a;
let b;
let c;
let result;
let data;
data = "sainath";
data = 12;
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
function getValue() {
    console.log("WEL-COME");
}
function getValueofUser(obj) {
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.password);
}
getValueofUser({ name: "sainath", email: "sainath", password: "lordsainath", age: 15 });
function abcdadmin(obj2) {
    obj2.gender = "Male";
    console.log(obj2);
}
abcdadmin({ name: "sainath", email: "helo@gmail.com", password: "lord", age: 22, admin: true });
let a1;
// 
//# sourceMappingURL=app.js.map