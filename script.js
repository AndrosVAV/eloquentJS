var str = "Javascript - это круто!!!";

//Выразительный JS(Марейн Хавербеке);

//Теория + повторение
/*
//тернарный оператор(c.26);
console.log(true ? 1 : 2);//1
console.log(false ? 1 : 2);//2
//Логический оператор(c.);
console.log(null || "user");//user
console.log("Karl" || "user");//Karl

console.log(true || x1);//true
console.log(false && x);//false

console.log(!true);//false
console.log(!false);//true

var one = 1,two = 2;
console.log(one + two);
*/
//console.log(Math.max(2,4));
//console.log(Math.min(2,4) + 100);





//Условное выполнение
/*
var num = prompt("Выбери число");
if(isNaN(num)){
    alert("Твоё число - квадратный корень из " + num * num);
};


var num = prompt("Выбери число");
if(!isNaN(num)){
    alert("Твоё число - квадратный корень из " + num * num);
};


var num = prompt("Выбери число");
if(!isNaN(num)){
    alert("Твоё число - квадратный корень из " + num * num);
}else{
    alert("Ну ты что число-то не ввел");
};



var num = prompt("Выбери число");
if(num < 10){
alert("Маловато");
}else if(num < 100){
alert("Нормально");
}else{
alert("Многовато");
};

*/







//ЦИКЛЫ while(c.39)
/*
var number = 0;
while(number <= 12){
    console.log(number);
    number = number +=2;
}
*/


/*
var counter = 0;
var result = 1;

while(counter <= 10){
    result = result *= 2;
    counter = counter += 1;
}
console.log(result);
*/

//Цикл for(c.42);
/*
var result = 1;
for(var counter = 0;counter <= 10;counter += 1){
    result *= 2;
    console.log(result);
}
*/

/*
var result = 1;
for(var counter = 0;counter <= 10;counter += 1)
    result *= 2;
    console.log(result);
*/

//Выход из цикла(c.43)
/*
for(var current = 20;current++){
    if(current % 7 === 0 && current <= 100){
        break;
}
console.log(current);
*/


/*
for(var current = 20;current <= 100;current++){
    if(current % 7 == 0){
	console.log(current);
     }
}
*/

//switch(c.44);
/*
switch(prompt("Как погодка?")){
    case "дождь" : alert("Не забудь зонт");
    break;
    case "снег" : alert("Блин мы в России");
    break;
    case "солнечно": alert("Оденься полегче");
	break;
	case "облачно" : alert("Иди гуляй");
	break;
	default : alert("Непонятная погода");
	break;
};
*/


//Упражнения


var counter = 0;
var result = "#";
//console.log("#");
while(counter < 8){
    //result += "#";
	console.log(result);
	result += "#";
    counter++;
}



