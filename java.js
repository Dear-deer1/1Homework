// первая домашка//
let str = 'abcde';
alert(str[0]); 
alert(str[1]); 
alert(str[4]); 

let a = parseInt(prompt("Введите первое число:"));
        let b = parseInt(prompt("Введите второе число:"));
        console.log(a > 0 || b > 0);


        let age = parseInt(prompt("Введите ваш возраст:"));
        if (age >= 18) {
            console.log("Совершеннолетний"); } 
            else {
            console.log("Несовершеннолетний"); }

// вторая домашка //

// номер 1 //
let age = parseInt(prompt("Введите ваш возраст:"));
if (age < 65) {
    console.log("Вам ещё рано на пенсию");
} else {
    console.log("Поздравляем с пенсионным возрастом!");
}

// номер 2//
let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));

if (num1 > num2) {
    console.log("Первое число больше");
} else if (num2 > num1) {
    console.log("Второе число больше");
} else {
    console.log("Числа равны");
}

// номер 3//
let num = parseInt(prompt("Введите число:"));

if (num % 2 === 0) {
    console.log("Это чётное число");
} else {
    console.log("Это нечётное число");
}

// домашка 3//


let box = document.querySelectorAll(".clickbox");
box.forEach(function(clickbox) {
    clickbox.addEventListener("click", function() {
        let currentColor = window.getComputedStyle(clickbox).backgroundColor;
        if (currentColor === "rgb(176, 196, 222)") { 
            clickbox.style.backgroundColor = "yellow";
            clickbox.style.margin = "2vw";
            console.log("Цвет изменён на жёлтый");
        } else {
            clickbox.style.backgroundColor = "lightsteelblue";
            clickbox.style.margin = "1vw";
            console.log("Цвет изменён на lightsteelblue");
        }
    });
});
