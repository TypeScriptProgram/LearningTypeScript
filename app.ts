// Tuples
let arr1: [string, number] = ["sainath", 15]
let arr2: [number, string] = [12, "Pratik"]


// Enums - enumeration - when we have to define the valus in key value pai

enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}


enum Status {
    PENDING = "pending",
    ACTIVE = "active",
    DISABLED = "disables"
}


// Any , unknown, void ,null,undefined , never

let a;

let b: number;

let c: void;


let result: boolean;


let data:unknown;

data = "sainath";
data = 12;

if(typeof data === "string"){
    console.log(data.toUpperCase())
}


function getValue():void{
   console.log("WEL-COME")
}


// null



// 4.Type Inferance  and type annotations



// 5 : interfaces and type aliases

interface sainath{
    name:string,
    email:string,
    password:string,
    gender?:string,
    age:number,
}

function getValueofUser(obj:sainath){
    console.log(obj.name)
    console.log(obj.email)
    console.log(obj.password)

}

getValueofUser({name:"sainath",email:"sainath",password:"lordsainath",age:15})


interface ADMIN extends sainath{
    admin:boolean
}

function abcdadmin(obj2:ADMIN){
    obj2.gender = "Male"
    console.log(obj2)
}

abcdadmin({name:"sainath",email:"helo@gmail.com",password:"lord",age:22,admin:true})


// type aliases
type value = string | null | number;
type sankhya  = number;

let a1:sankhya;



// class

class Device{
    name = "Samsung";
    price = 150000;
    category = "Digital"
}

let d1  = new Device();
let d2 = new Device();


class BottleMaker{
    constructor(public name:string,public price:number,public size:string){
        this.name = name;
        this.price = price;
        this.size = size;
    }
}

let b1 = new BottleMaker("Milton",1200,"Medium");
let b2 = new BottleMaker("Shine",899,"Large");


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
