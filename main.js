/*1 Функция принимает целое число 
и возвращает факториал этого числа.*/

function factorial(number){
    let result = 1;
    while(number){
        result *= number;
        number -=1
    }
    return result;
    
}
let num = 5;
console.log("Факториал: " + factorial(num));


/*2 Функция принимает строку и возвращает длину самого
длинного слова в этой строке.*/
function LengthWord(str) {
    let arr = str.split(/\s|_|(?=[A-Z])|-/)
    
    arr.sort(function(a,b){
        return b.length - a.length;
    });
    return arr[0].length;
    
}
console.log(LengthWord("My everyday meals"));


/*3 Функция принимает массив, состоящий из массивов целых
чисел и возвращает массив состоящий из
наибольшего числа каждого предоставленного подмассива.*/

let arr = [[3,56,43,9],[35,81,3,5],[320,84,4,28],[1,2,3000,900]];
function findMax(arr) {
    let arr1 = [];
    for (let i = 0;i<arr.length;i++){
        arr[i].sort(function(a,b){return b-a});
        arr1.push(arr[i][0]);
    }
    return arr1;
}
console.log(findMax(arr));

/*4 Функция принимает строку и целое число и обрезает строку,
если она длиннее заданной максимальной длины строки
и возвращает обрезанную строку с «…» в конце */
let str = "мама мыла раму"
let max = 9;
function splitStr (str, num) {
    if (str.length>num){
        str = str.slice(0, num);
        str+= "...";
        return str;
    }
    return str;
}

console.log(splitStr(str,max));

/* 5 Функция принимает строку и возвращает эту строку в
формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.
*/

function upperCase(str) {
    let arr = str.split(/\s|_|(?=[A-Z])|-/)
    let str1 = arr.join(' ');
    let str2 = str1.replace(/(^|\s)\S/g, function(a){return a.toUpperCase()});
    return str2;
}
console.log(upperCase('thisIs pop_spinalYap'));

/*6 Функция принимает два массива и целое число n. Функция
копирует каждый элемент первого массива во второй по порядку начиная с
индекса n второго массива и возвращает новый массив.*/

let arr1 = [1,2,3,4];let arr2 = [9,8,7,6,90,98];let num1 = 2;
function newArr (arr, arr1, num) {for (let i = 0 ; i<arr.length; i++) {
    arr1.splice(num+i,0,arr[i]);
}
    return arr1;
}
console.log(newArr(arr1,arr2,num1))

/*7 Функция принимает массив и удаляет в нем все "ложные
значения".*/

arr = [NaN, 0, 77, false, -17, '', 99, null, true];

function filterF(arr) {
    return arr.filter(function(a) { return a; });
}
console.log(filterF(arr))

/*8 Функцию принимает массив, состоящий из двух строк,
функция возвращает true, если строка в первом элементе массива содержит все
буквы строки во втором элементе массива.(регистр игнорируется)*/

arr = ["абВгДддддддГГггГГ","абвГд"];
function sravnStr(arr) {
    let arr1 = arr[0].split(/\s/).join('').toLowerCase();
    let arr2 = arr1.split(/(?=.)/);
    let count = 0;
    let str = arr[1].toLowerCase()
    for (let i = 0; i<arr2.length; i++){
        if (str.includes(arr2[i])){count+=1;}
    }
    if(arr2.length==count){return true}
    return false;
}
console.log(sravnStr(arr));

/*9  Функция принимает масссив и целое число, функция
разбивает массив на группы длиной size и
возвращает их в виде двумерного массива.*/

let arr55 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; let size = 6;
function rezArr(arr, size) {
    let arr1 = arr.slice(0,size);
    let arr2 = arr.slice(size,size+size);
    let arr3 = [];
    arr3[0] = arr1;
    arr3[1] = arr2;
    return arr3;
}
console.log(rezArr(arr55,size));

/*10*/
let arr56 = [];function sumTo(n, arr) {
    if (n == 1){ arr56.push(1); return arr56} ;
    arr56.push(n);
    sumTo(n-1);
    return arr56;
}
console.log( sumTo(19, arr56) );


/* 11 Функция аналог map*/

Array.prototype.mymap = function(cb) {
    let arrR = [];

    for (let index = 0; index < this.length; index++) {
        arrR.push(cb(this[index], index, this));
    }

    return arrR;
}
let arr58 = [2,4,6,8,10];
console.log(arr58.mymap(function(a){return a + 1;}))

/*12*/

Array.prototype.myfilter = function(cb) {
    let arrR = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            arrR.push(this[i])
        }
        
    }
    return arrR;
}

let arrList2 = [2,6,4,2,7,2,2];
console.log(arrList2.myfilter(function(a){return a == 2}))


/* 13 Функция аналог find*/

Array.prototype.myfind = function(cb) {
    for (let index = 0; index < this.length; index++) {
        if (cb(this[index],index,this)) {
            return this[index]
        }
    }
    return undefined;
}

function isMyFavoriteHobby(element, index, array) {
  const myFavoriteHobby = 'пить кофе'

  return element == myFavoriteHobby
}

let currentToDoList = [
  'смотреть сериальчики',
  'читать книгу',
  'пить кофе',
  'гладить кота',
  'гулять',
]

console.log(currentToDoList.myfind(isMyFavoriteHobby))

/* 14 Функция аналог some.*/

Array.prototype.mysome = function(cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return true
        }
        
    }
    return false;
}

let arrList = [2,6,4,8,7,9];
console.log(arrList.mysome(function(a){return a == 7}))

/* 15 Функция аналог every.*/

Array.prototype.myevery = function(cb) {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            count += 1;
        }
        if (count == this.length){return true;} 
        
    }
    return false;
}

let arrList1 = [2,6,4,8,9];
console.log(arrList1.myevery(function(a){return a !== 7}))


/* 16 Функция принимает на вход массив из двух чисел и возвращает
сумму этих двух чисел плюс сумму всех чисел между ними.*/

let arr57 = [2,1092]; 
function sumNum (arr) {
    let summ = arr[0];
    let count = arr[0]; 
    let fsum = 0 ;
    for(let i = 1; count < arr[1]-1; i++ ){
        fsum = fsum + (summ + i);
        count+=1;
    }
    let nsum = arr[0] + arr[1];
    let str = 'сумма чисел: '+nsum+', сумма между числами: '+fsum;
    return str
}

console.log(sumNum(arr57));

/*20 Функция конвертирует строку в spinal-case регистр.*/
function spinalCase(str) {
  let arr = str.split(/\s|_|(?=[A-Z])|-/)
  return arr.join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));






