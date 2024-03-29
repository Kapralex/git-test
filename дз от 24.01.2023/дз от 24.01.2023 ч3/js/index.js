/* index.js */
import User from "./user.js";

class Writer {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    canVote() {
      return this.age >= 18;
    }
  
    publishArticle() {
      console.log('Article published');
    }
  }


// do not modify
const user = new User('Sam', 'Smith', 30);
console.log(user); // User {firstName: 'Sam', lastName: 'Smith', age: 30}

const writer = new Writer('Tom', 'Roth', 20);
console.log(writer); // Writer {firstName: 'Tom', lastName: 'Roth', age: 20}
console.log(writer.publishArticle()); // Article published