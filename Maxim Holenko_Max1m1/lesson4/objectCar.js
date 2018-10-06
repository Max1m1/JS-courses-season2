//Завдання № 1

function Car(brand, fuelTank, ownerFullName) {
    this.brand = brand;
    this.fuelTank = fuelTank;
    this.ownerFullName = ownerFullName;

    this.carBrand = function () {
        console.log("Модель машини: " + this.brand);
    }

    this.carfuelTank = function () {
        console.log("Об'єм паливного баку: " + this.fuelTank);
    }

    this.carownerFullName = function () {
        console.log("Власник машини: " + this.ownerFullName);
    }
}

let carData = new Car('Bugatti', 120, 'Vasya Pupkin' );

carData.carBrand();
carData.carfuelTank();
carData.carownerFullName();