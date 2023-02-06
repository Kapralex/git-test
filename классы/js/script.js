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


class Admin extends User {
  constructor(firstName, lastName, age, userType) {
    super(firstName, lastName, age);
    this.userType = userType;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName} [${this.userType}]`;
  }

  updateConfig() {
    return "Config updated";
  }
}


// Sample usage - do not modify
const user = new User("Sam", "Green", 17);
user.canVote(); // false
user.getFullName(); // "Sam Green"

const admin = new Admin("Alex", "Blue", 20, "superadmin");
admin.canVote(); // true
admin.getFullName(); // "Alex Blue [superadmin]"
admin.updateConfig(); // "Config updated"
