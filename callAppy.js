const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddn',
    salary: 15000,

    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    } 
}

const heroPerson = {
    firstName: 'hero',
    lastName: 'balam',
    salary: 25000

}

const friendlyPerson = {
    firstName: 'hero',
    lastName: 'golam',
    salary: 25000

}

// normalPerson.chargeBill();

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// // heroChargeBill(2000);
// // heroChargeBill(3000);
// // console.log(heroPerson.salary);
// // console.log(normalPerson.salary);
// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(5000);
// friendlyChargeBill(2000);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40]);
console.log(heroPerson.salary);