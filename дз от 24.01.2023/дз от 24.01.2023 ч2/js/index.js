/* index.js */
import User from "./user.js";

// class usage
const sam = new User("Sam", "Blue", 49);
console.log(sam);
sam.getFullName();

console.log("---");

const charlie = new User("Charlie", "Doe", 13);
console.log(charlie);
charlie.getFullName();