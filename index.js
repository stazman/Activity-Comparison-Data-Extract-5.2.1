let gondola = {quantity: 7, insured: true, operational: true, pricePer: 3800};
let stockCar = {quantity: 1, insured: true, operational: false, pricePer: 6500};
let boxCar = {quantity: 8, insured: true, operational: true, pricePer: 4157};
let tankCar = {quantity: 3, insured: true, operational: true, pricePer: 7200};


//Task 1: Get list of all cars reported as non operational (operational = false)


//For lesson version

let allCars = [];

allCars.push(gondola, stockCar, boxCar, tankCar);

const notOperational = [];

// if (!gondola.operational){
//   notOperational.push(gondola);
// }

// if (!stockCar.operational){
//   notOperational.push(stockCar);
// }

// if (!boxCar.operational){
//   notOperational.push(boxCar);
// }

// if (!tankCar.operational){
//   notOperational.push(tankCar);
// }

// console.log(notOperational);


//Attempt at refactoring Task 1 --  this didn't work; very hard to do without built-in ES6 functions such as forEach()

// for (let i = 0; i < allCars.length; i++){
//  for (const car of allCars){
//    if (car.operational === false){
//      notOperational.push(car)
//    }
//  }
// }

//Refactored Task 1:

function nonOperatingCars (arr) {

  arr.forEach(cObj => {
    if (!cObj.operational){
      notOperational.push(cObj)
    }
  });
  console.log(notOperational);
}

nonOperatingCars(allCars);



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

function notInsured(arr){

  let uninsured = 0;

  arr.forEach(cObj => {
    if (!cObj.insured){
      uninsured++;
    }
  })
  console.log(uninsured);
}

notInsured(allCars);



//Task 3: Total dollar amount spent on tankCars, stockCars, boxCars over 6500.00
// if the dollar amount spent on each ^ > 6500.00 add to total

let expensiveCars = 0;

if (gondola.pricePer >= 6500.00){
  expensiveCars+=gondola.pricePer;
}

if (stockCar.pricePer >= 6500.00){
  expensiveCars+=stockCar.pricePer;
}

if (boxCar.pricePer >= 6500.00){
  expensiveCars+=boxCar.pricePer;
}

if (tankCar.pricePer >= 6500.00){
  expensiveCars+=tankCar.pricePer;
}

console.log(expensiveCars);


//Refactor Task 3




//Task 4: Output results
