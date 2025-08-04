declare let arr1: [string, number];
declare let arr2: [number, string];
declare enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}
declare enum Status {
    PENDING = "pending",
    ACTIVE = "active",
    DISABLED = "disables"
}
declare let a: any;
declare let b: number;
declare let c: void;
declare let result: boolean;
declare let data: unknown;
declare function getValue(): void;
interface sainath {
    name: string;
    email: string;
    password: string;
    gender?: string;
    age: number;
}
declare function getValueofUser(obj: sainath): void;
interface ADMIN extends sainath {
    admin: boolean;
}
declare function abcdadmin(obj2: ADMIN): void;
type value = string | null | number;
type sankhya = number;
declare let a1: sankhya;
declare class Device {
    name: string;
    price: number;
    category: string;
}
declare let d1: Device;
declare let d2: Device;
declare class BottleMaker {
    name: string;
    price: number;
    size: string;
    constructor(name: string, price: number, size: string);
}
declare let b1: BottleMaker;
declare let b2: BottleMaker;
//# sourceMappingURL=app.d.ts.map