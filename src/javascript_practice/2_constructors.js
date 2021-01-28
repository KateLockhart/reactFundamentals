//We name the class
class User {
    //We call the constructor function and create patameters
    //These will be values that we want to be passed in and stored in the object.
    constructor(first, last, e) {
        //On the right side of these expressions, the word 'first', 'last', and 'e' below.
        //We have the value that is getting passed into the parens when the object is created.
        this.f = first;
        this.l = last;
        this.email = e;
        //On the right side we have the actual properties of the object
        //The left side stores the incoming value from the right side as the property for 'this' specific object being created.
    }
}

var userOne = new User("Paul", "O'Connor", "pnconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne); //User {f: "Paul"; l: "O'Connor", email: "pnconnor@elevenfifty.org"}