let gondola = {quantity: 7, insured: true, operational: true, pricePer: 3800};
let stockCar = {quantity: 1, insured: true, operational: false, pricePer: 6500};
let boxCar = {quantity: 8, insured: true, operational: true, pricePer: 4157};
let tankCar = {quantity: 3, insured: true, operational: true, pricePer: 7200};


//Task 1: Get list of all cars reported as non operational (operational = false)

let allCars = [];

allCars.push(gondola, stockCar, boxCar, tankCar);

let notOperational = [];

//For lesson version

if (!gondola.operational){
  notOperational.push(gondola);
}

if (!stockCar.operational){
  notOperational.push(stockCar);
}

if (!boxCar.operational){
  notOperational.push(boxCar);
}

if (!tankCar.operational){
  notOperational.push(tankCar);
}

//Stubbing refactoring

// for (let i = 0; i < allCars.length; i++){
//  for (const car of allCars){
//    if (car.operational === false){
//      notOperational.push(car)
//    }
//  }
// }

console.log(notOperational);


//Task 2: Get count of all cars with no Insurance

let uninsured = 0;

if (!gondola.insured){
  uninsured++;
}

if (!stockCar.insured){
  uninsured++;
}

if (!boxCar.insured){
  uninsured++;
}

if (!tankCar.insured){
  uninsured++;
}

console.log(uninsured);


//Refactor Task 2


//Task 3: Total dollar amount spent on tankCars, stockCars, boxCars over 6500.00
// if the dollar amount spent on each ^ > 6500.00 add to total




//Task 4: Output results
