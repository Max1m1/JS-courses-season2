//Task № 2

function Car(brand, fuelTank, ownerFullName) {
    this.brand = brand;
    this.fuelTank = fuelTank;
    this.ownerFullName = (ownerFullName.split(' ').length !== 2) ? this.ownerFullName = "John Doe" : this.ownerFullName = ownerFullName;

    this.getFirstNamePart = function () {
        console.log("First name: " + this.ownerFullName.split(" ")[0]);
    }

    this.getSecondNamePart = function () {
        console.log("Second name: " + this.ownerFullName.split(" ")[1]);
    }
}

let carrData = new Car('Peugeot', 40, 'Akakiy Pohulyayko');

carrData.getFirstNamePart();
carrData.getSecondNamePart();
