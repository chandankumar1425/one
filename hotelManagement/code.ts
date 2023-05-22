// Hotel Management
//Types of all the Hotels
enum HotelType {
    Three_Star = '3-star',
    Five_Star = '5-star',
    Resort = "Resort"
}

//Type of Rooms
enum RoomType {
    Standard = "Standard",
    Delux = "Delux",
    Premium = "Premium"
}

interface Room {
    noOfBeds : number,
    hasAc : boolean,
    price : number,
    isBook() : void
}


class StandardRoom implements Room{
    noOfBeds : number
    hasAc : boolean
    price : number
    constructor(noOfBeds:number,hasAc:boolean,price:number){
        this.noOfBeds = noOfBeds;
        this.hasAc = false;
        this.price = price
    }
    isBook(): void {
        
    }
}

class DeluxRoom implements Room{
    noOfBeds : number
    hasAc : boolean
    price : number
    constructor(noOfBeds:number,hasAc:boolean,price:number){
        this.noOfBeds = noOfBeds;
        this.hasAc = true;
        this.price = price
    }
    isBook(): void {
        
    }
}

class PremiumRoom implements Room{
    noOfBeds : number
    hasAc : boolean
    price : number
    constructor(noOfBeds:number,hasAc:boolean,price:number){
        this.noOfBeds = noOfBeds;
        this.hasAc = true;
        this.price = price
    }
    isBook(): void {
        
    }
}


// Class for making the Hotel
abstract class Hotel{
    rooms : Room[] = [];
    name : string;
    location : string;
    constructor(name:string,location:string,public type:HotelType){
        this.name = name;
        this.location = location;
    }

    abstract availableRooms() : void;
}

class ThreeStar extends Hotel{
    name : string;
    location: string; 
    constructor(name : string,location: string,rooms :Room[]){
        super(name,location, HotelType.Three_Star);
        this.name = name;
        this.location = location;
        this.rooms = [];
    }
    availableRooms(): void {
        console.log(`Available rooms at ${this.name} hotel`);
    }
}

class FiveStar extends Hotel{
    name : string;
    location: string; 
    constructor(name : string,location: string,rooms :Room[]){
        super(name,location, HotelType.Five_Star);
        this.name = name;
        this.location = location;
        this.rooms = [];
    }
    availableRooms(): void {
        console.log(`Available rooms at ${this.name} hotel`);
    }
}

class Resort extends Hotel{
    name : string;
    location: string; 
    constructor(name : string,location: string,rooms :Room[]){
        super(name,location, HotelType.Resort);
        this.name = name;
        this.location = location;
        this.rooms = [];
    }
    availableRooms(): void {
        console.log(`Available rooms at ${this.name} hotel`);
    }
}


enum UserRole {
    Customer = "Customer",
    Admin = "Admin",
    Super_Admin = "Super-Admin"
}


abstract class User {
    constructor(public role : UserRole){}
}


class Customer extends User {
    constructor(role : UserRole){
        super(role);
        this.role = UserRole.Customer;
    }

    showAvailableRooms(hotel:Hotel):void{
        hotel.availableRooms();
    }
}

class Admin extends User {
    constructor(role : UserRole){
        super(role);
        this.role = UserRole.Admin;
    }

    addRoom(room:Room,hotel:Hotel){
        if(this.role==UserRole.Admin || this.role == UserRole.Super_Admin){
            hotel.rooms.push(room);
            return true;
        }else{
            return false;
        }
    }
}