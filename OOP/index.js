class Account {

    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName || "Similoluwa";
        this.lastName = lastName || "Ashewo-Olosho";
        this.age = age;
        this.gender = gender;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
}

class BankAccount extends Account {
  constructor(firstName, lastName, age, gender, balance, accountNumber) {
    super(firstName, lastName, age, gender);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.balance = balance;
    this.accountNumber = accountNumber;
  }

  getBalance() {
    return this.balance;
  }
  setBalance(balance) {
    this.balance = balance;
  }
}

let myAccount = new BankAccount();
console.log(myAccount.getFirstName());
console.log(myAccount.getLastName());