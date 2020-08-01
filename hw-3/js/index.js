// ____________Task1_____________
console.log('___________Task1____________')
const number = prompt("Введите число: ", 10)
number == 10 ? console.log("Равно") : number > 10 ? console.log("Больше") : console.log("Меньше");

// ____________Task2_____________
console.log('___________Task2____________')
const age = prompt("Введите свой возраст: ", 18)
if(age >= 18){
    alert("Позравляем! Ваш возраст является допустимым")
    console.log("Позравляем! Ваш возраст является допустимым")
}
else{
    alert("А родители разрешили?")
    console.log("А родители разрешили?")
}
age >= 18 ? console.log("Позравляем! Ваш возраст является допустимым") : console.log("А родители разрешили?");

// ____________Task3_____________
console.log('___________Task3____________')
const num1 = +prompt("Введите первое число: ")
const num2 = +prompt("Введите второе число: ") 
const num3 = +prompt("Введите третие число: ")
let max = num1
if(max < num2) {
    max = num2
}
if(max < num3) {
    max = num3
}
alert(`Максимальное число : ${max}`)
console.log("Максимальное число: ", max)


// ____________Task4_____________
console.log('___________Task4____________')
const login = prompt("Введите логин: ", 'test')
if(login === 'test'){
    const password = prompt("Введите логин: ", 'password')
    if(password === 'password'){
        alert('Поздравляем! Логин и пароль были введены верно')
        console.log('Поздравляем! Логин и пароль были введены верно') 
    }    
    else{
        alert('Неверный пароль') 
        console.log('Неверный пароль') 
    }
}
else{
    alert('Нет такого пользователя')
    console.log('Нет такого пользователя')
}

// ____________Task5_____________
console.log('___________Task5____________')
let password = 'password1'
let checkPassword = prompt("Введите старый пароль", 'password1')
if(checkPassword === password){
    password = prompt('Введите новый пароль', 'newPassword')
    if(password == false || password == 'password1'){
        alert("Вы ввели недопустимый пароль")
        console.log('Вы ввели недопустимый пароль')
    }
    else{
        alert("Пароль успешно изменён")
        console.log('Пароль успешно изменён')
    }
} 
else{
    alert("Вы ввели неверный старый пароль")
    console.log('Вы ввели неверный старый пароль')
}

// ____________Task6_____________
console.log('___________Task6____________')
const usd = 1;
const eur = 2
let uah = +prompt("Введите сумму в гривнах", 1)
let currency = +prompt("Выберите валюту: 1 - usd, 2 - eur", 1)
switch(currency){
    case 1: 
        let usdSum = uah * 0.04;
        alert(`${uah} гривен = ${usdSum} долларов`);
        console.log(`${uah} гривен = ${usdSum} долларов`)    
        break;
    case 2: 
        let eurSum = uah * 0.03;
        alert(`${uah} гривен = ${eurSum} евро`);
        console.log(`${uah} гривен = ${eurSum} евро`)    
        break;
    default:
        alert("Вы неправильно выбрали валюту")
        console.log("Вы неправильно выбрали валюту")        
}

// ____________Task1***_____________
console.log('___________Task1***____________')
let number1 = +prompt("Введите первое число")
let number2 = +prompt("Введите второе число")
let result = +prompt("Введите результат умножения, введенных вами чисел")
if(number1 * number2 === result){
    alert("Верно");
    console.log("Верно");
}
else{
    result = number1 * number2
    alert(`Вы ошиблись, результат равне ${result}`)
    console.log(`Вы ошиблись, результат равне ${result}`);
}

// ____________Task2***_____________
console.log('___________Task2***____________')
let user = +prompt("(1) - камень; (2) - ножницы; (3) - бумага;")
let computer = Math.floor(Math.random()*(4-1) + 1)
user === 1 ? user = 'камень' : user === 2 ? user = 'ножницы' : user = 'бумага';
computer === 1 ? computer  = 'камень' :computer  === 2 ? computer  = 'ножницы' : computer  = 'бумага';
if (user == computer){
alert(`${user} = ${computer} \nНичья`)
}
else if(user === 'бумага'){
computer === 'камень' ? alert(`${user} > ${computer} \nВы выиграли`) : alert(`${user} < ${computer} \nВы проиграли`)
}
else if(user === 'ножницы'){
    computer === 'бумага' ? alert(`${user} > ${computer} \nВы выиграли`) : alert(`${user} < ${computer} \nВы проиграли`)
}
else{
    computer === 'ножницы' ? alert(`${user} > ${computer} \nВы выиграли`) : alert(`${user} < ${computer} \nВы проиграли`)
}

// ____________Task3***_____________
console.log('___________Task3***____________')
user == computer ? alert(`${user} = ${computer} \nНичья`) : user == 'камень' && computer  == 'ножницы' ||  user == 'ножницы' && computer  == 'бумага' ||  user == 'бумага' && computer  == 'камень' ? alert(`${user} > ${computer} \nВы выиграли`) : alert(`${user} < ${computer} \nВы проиграли`)

