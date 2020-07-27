// __________Task1____________
console.log("My first debug");

// __________Task2____________
let dogsName = "Sparky";
let dogsAge = 4;
console.log(dogsName, dogsAge);

// __________Task3____________
dogsAge = 5;
console.log(dogsName, dogsAge);

// __________Task4____________
let winesName = "Tenuta San Guido Sassicaia";
let winesPrice = 1750;
let isDry = true;
let historyOfCreation = null;
let someArray = [10, 11, 12, 13];
let someObject = {
	someNum: 1,
	someString: "some text"
};
let placeOfProduction;
console.log(typeof winesName, typeof winesPrice, typeof isDry, typeof historyOfCreation, typeof someArray, typeof someObject, typeof placeOfProduction);

// __________Task5____________
const student = {name: "{Alexander}", surname: "{Solomatin}", isActive: true};
console.log(typeof student.isActive);

// __________Task6____________
let apples = {
	froot: "apple",
	priceForKg: 30.55,
	country: "Ukraine",
	isImport: false  
}
let oranges = {
	froot: "orange",
	priceForKg: 59.99,
	country: "Spain",
	isImport: true  
}
let tangerines = {
	froot: "tangerine",
	priceForKg: 40.30,
	country: "Turkey",
	isImport: true  
}
let peaches = {
	froot: "peach",
	priceForKg: 33.15,
	country: "Ukraine",
	isImport: false  
}
let apricots = {
	froot: "apricot",
	priceForKg: 28.80,
	country: "Ukraine",
	isImport: false  
}

let froots = [apples, oranges, tangerines, peaches, apricots];
console.log(froots);

let firstNumber = {
	number: 5,
	isOdd: true	
}
let secondNumber = {
	number: 8,
	isOdd: false	
}
let thirdNumber = {
	number: 48,
	isOdd: false	
}
let fourthNumber = {
	number: 99,
	isOdd: true	
}
let fifthNumber = {
	number: 777,
	isOdd: true	
}

let numbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber];
console.log(numbers);

let firstStudent = {
	name: "Alexander",
	surname: "Solomatin",
	yearOfBirth: 2001,
	isActive: true
}
let secondStudent = {
	name: "Vlad",
	surname: "Kulibaba",
	yearOfBirth: 2001,
	isActive: false
}
let thirdStudent = {
	name: "Pavlik",
	surname: "Morzov",
	yearOfBirth: 1999,
	isActive: true
}
let fourthStudent = {
	name: "Vasily",
	surname: "Pupkin",
	yearOfBirth: 2000,
	isActive: false
}
let fifthStudent = {
	name: "Alexander",
	surname: "Zinchenko",
	yearOfBirth: 1999,
	isActive: false
}

let students = [firstStudent, secondStudent, thirdStudent, fourthStudent, fifthStudent];
console.log(students);

// __________Task*____________
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array[0], array[array.length-1]);

let message = `${firstStudent.name} ${firstStudent.surname}, сейчас активен: ${firstStudent.isActive}`;
console.log(message)
