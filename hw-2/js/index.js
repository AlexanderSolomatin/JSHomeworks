// __________Task1____________
console.log(" __________Task1____________")
console.log(1 == 2) //false
console.log(1 != 2) //true
console.log(1 != 1) //false
console.log("text" == 5) //false
console.log("text" != 5) //true
console.log("text" == "Text") //false
console.log("text" == "text") //true
console.log(true == "true") //false
console.log(true == false) //false
console.log(false == 0) //true
console.log(false === 0) //false
console.log("" == false) //true
console.log("" !== false) //true
console.log(undefined === null) //false
console.log(undefined == null) //true
console.log(17 === true) //false
console.log("17" === true)  //false
console.log({} === {})  //false

// __________Task2____________
console.log(" __________Task2____________")
let number1 = prompt("Input number for task 2")
console.log(number1 % 2 == 0)

// __________Task3____________
console.log(" __________Task3____________")
let number2 = prompt("Input number for task 3")
console.log(number2 % 2 == 1)

// __________Task4____________
console.log(" __________Task4____________")
let num = 5
num += 4 // 9
num **= 2 // 81
num %= 2 // 1
console.log("num =", num)

// __________Task5____________
console.log(" __________Task5____________")
let a = "100"
console.log("Первый способ:", Number(a))
console.log("Второй способ:", +a)
console.log("Третий способ:", a /= 1)

// __________Task6____________
console.log(" __________Task6____________")
let x = Math.floor(Math.random()*(100-1)+1)
let y = Math.floor(Math.random()*(100-1)+1)
console.log("Является равенством: ", (x+y) * (x-y) === x*x - y*y)

// __________Task1 ***____________
console.log(" __________Task1***____________")
let num1 = prompt("input first number for task1*") 
let num2 = prompt("input second number for task1*") 
let num3 = prompt("input third number for task1*") 
alert((num1 * 10 + num2 * 10 + num3 * 10))

// __________Task2 ***____________
console.log(" __________Task2***____________")
let sideA = 14
let sideB = 82
let sideC = 94
console.log(sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA)

// __________Task3 ***____________
console.log(" __________Task3***____________")
let xCub = Math.floor(Math.random()*(100-1)+1)
let yCub = Math.floor(Math.random()*(100-1)+1)
console.log("Является равенством: ", (xCub + yCub) ** 3 === xCub ** 3 + 3 * xCub ** 2 * yCub + 3 * xCub * yCub ** 2 + yCub**3)


