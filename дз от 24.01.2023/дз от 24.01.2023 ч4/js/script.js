// Class definition
class User {
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
  }
  class Writer extends User {
    publishArticle() {
      return "Article published";
    }
  }
  
  

  // Class usage
  const user = new User('Sam', 'Smith', 30); // User {firstName: 'Sam', lastName: 'Smith', age: 30}
  
  const writer = new Writer('Tom', 'Roth', 20); // Writer {firstName: 'Tom', lastName: 'Roth', age: 20}
  writer.publishArticle(); // Article published