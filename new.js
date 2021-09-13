class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('hero', 'balam', 15000);
console.log(heroPerson);
const friendlyPerson = new Person('hero', 'kalam', 25000);
console.log(friendlyPerson);

function OldPerson(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new OldPerson('Grand', 'Papa', 1200);
console.log(oldPerson);