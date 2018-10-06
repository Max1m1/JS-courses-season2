//Task № 1

function Car(brand, fuelTank, ownerFullName) {
    this.brand = brand;
    this.fuelTank = fuelTank;
    this.ownerFullName = ownerFullName;

    this.carBrand = function () {
        console.log("Сar model: " + this.brand);
    }

    this.carfuelTank = function () {
        console.log("Volume of fuel tank: " + this.fuelTank);
    }

    this.carownerFullName = function () {
        console.log("Owner of cars: " + this.ownerFullName);
    }
}

let carData = new Car('Bugatti', 120, 'Vasya Pupkin' );

carData.carBrand();
carData.carfuelTank();
carData.carownerFullName();
