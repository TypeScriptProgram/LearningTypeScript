"use strict";
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
// class
class Device {
    name = "Samsung";
    price = 150000;
    category = "Digital";
}
let d1 = new Device();
let d2 = new Device();
class BottleMaker {
    name;
    price;
    size;
    constructor(name, price, size) {
        this.name = name;
        this.price = price;
        this.size = size;
        this.name = name;
        this.price = price;
        this.size = size;
    }
}
let b1 = new BottleMaker("Milton", 1200, "Medium");
let b2 = new BottleMaker("Shine", 899, "Large");
// this keyword
// access Modifiers - public private protected
// readonly Properties
// optional Properties
// getters and setters
// parameter properties
// static member
// abstract class and  methods
// Introduction To functions
// functions
// types of functions
// optional and default parametes
// rest parameter
// overload
// Generics
// generic function
// generic interfacs
// generic classes
// type guards
//# sourceMappingURL=app.js.map