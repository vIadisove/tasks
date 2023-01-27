/*1 Функция принимает целое число 
и возвращает факториал этого числа.*/

function factorial(number){
    if (number != 1)
        return number * factorial(number - 1)
    else 
        return 1
    
}
const num = 8;
console.log("Факториал: " + factorial(num));


/*2 Функция принимает строку и возвращает длину самого
длинного слова в этой строке.*/
function LengthWord(str) {
    const arr = str.split(/\s|_|(?=[A-Z])|-/)
    
    arr.sort((a,b) => b.length - a.length);
    return arr[0].length;
    
}
console.log(LengthWord("My everyday meals"));


/*3 Функция принимает массив, состоящий из массивов целых
чисел и возвращает массив состоящий из
наибольшего числа каждого предоставленного подмассива.*/

const arr = [[3,56,43,9],[35,81,3,5],[320,84,4,28],[1,2,3000,900]];
function findMax(arr) {
    const arrResult = [];
    for (let i = 0;i<arr.length;i++){
        arr[i].sort((a,b)=>b-a);
        arrResult.push(arr[i][0]);
    }
    return arrResult;
}
console.log(findMax(arr));

/*4 Функция принимает строку и целое число и обрезает строку,
если она длиннее заданной максимальной длины строки
и возвращает обрезанную строку с «…» в конце */
const str = "мама мыла раму"
const max = 9;
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
    const strRes = str.split(/\s|_|(?=[A-Z])|-/).join(' ').replace(/(^|\s)\S/g, (a) => a.toUpperCase());
    return strRes;
}
console.log(upperCase('thisIs pop_spinalYap-papp'));

/*6 Функция принимает два массива и целое число n. Функция
копирует каждый элемент первого массива во второй по порядку начиная с
индекса n второго массива и возвращает новый массив.*/

const arrFirst = [1,2,3,4];
const arrSecond = [9,8,7,6,90,98];
const numbersix = 2;
function newArr (arr, arr1, num) {
    for (let i = 0 ; i<arr.length; i++) {
    arr1.splice(num+i,0,arr[i]);
}
    return arr1;
}
console.log(newArr(arrFirst,arrSecond,numbersix))

/*7 Функция принимает массив и удаляет в нем все "ложные
значения".*/

const arrFalse = [NaN, 0, 77, false, -17, '', 99, null, true];

function filterF(arr) {
    return arr.filter((a)=> a);
}
console.log(filterF(arrFalse))

/*8 Функцию принимает массив, состоящий из двух строк,
функция возвращает true, если строка в первом элементе массива содержит все
буквы строки во втором элементе массива.(регистр игнорируется)*/

const arrWord = ["абВгДддддддГГггГГ","абвГд"];
function sravnStr(arr) {
    const arr1 = arr[0].split(/\s/).join('').toLowerCase();
    const arr2 = arr1.split(/(?=.)/);
    let count = 0;
    const str = arr[1].toLowerCase()
    for (let i = 0; i<arr2.length; i++){
        if (str.includes(arr2[i])){count+=1;}
    }
    if(arr2.length==count){return true}
    return false;
}
console.log(sravnStr(arrWord));

/*9  Функция принимает масссив и целое число, функция
разбивает массив на группы длиной size и
возвращает их в виде двумерного массива.*/

const arrNine = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const size = 6;
function rezArr(arr, size) {
    const arr1 = arr.slice(0,size);
    const arr2 = arr.slice(size,size+size);
    const arrRes = [];
    arrRes[0] = arr1;
    arrRes[1] = arr2;
    return arrRes;
}
console.log(rezArr(arrNine,size));

/*10*/
const arrTen = [];
function sumTo(n, arr) {
    if (n == 1){ arr.push(1);
                return arr} ;
    arr.push(n);
    sumTo(n-1, arr);
    return arr;
}
console.log( sumTo(19, arrTen) );


/* 11 Функция аналог map*/

Array.prototype.mymap = function(cb) {
    const arrR = [];

    for (let index = 0; index < this.length; index++) {
        arrR.push(cb(this[index], index, this));
    }

    return arrR;
}
const arrEleven = [2,4,6,8,10];
console.log(arrEleven.mymap((a)=> a + 1))

/*12*/

Array.prototype.myfilter = function(cb) {
    const arrR = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            arrR.push(this[i])
        }
        
    }
    return arrR;
}

const arrListTw = [2,6,4,2,7,2,2];
console.log(arrListTw.myfilter((a) => a == 2))


/* 13 Функция аналог find*/

Array.prototype.myfind = function(cb) {
    for (let index = 0; index < this.length; index++) {
        if (cb(this[index],index,this)) {
            return this[index]
        }
    }
    return undefined;
}


const arrThirteen = [
  'Раз',
  'Два',
  'Три',
  'Четыре'
]

console.log(arrThirteen.myfind((a)=>a==='Три'))

/* 14 Функция аналог some.*/

Array.prototype.mysome = function(cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return true
        }
        
    }
    return false;
}

const arrFourteen = [2,6,4,8,7,9];
console.log(arrFourteen.mysome((a)=> a == 7))

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

const arrFifteen = [2,6,4,8,9];
console.log(arrFifteen.myevery((a)=> a !== 7))


/* 16 Функция принимает на вход массив из двух чисел и возвращает
сумму этих двух чисел плюс сумму всех чисел между ними.*/

const arrSixteen = [2,5]; 
function sumNum (arr) {
    let summ = arr[0];
    let count = arr[0]; 
    let fsum = 0 ;
    for(let i = 1; count < arr[1]-1; i++ ){
        fsum = fsum + (summ + i);
        count+=1;
    }
    const nsum = arr[0] + arr[1];
    const result = nsum + fsum;
    const str = 'сумма чисел: '+nsum+', сумма между числами: '+fsum+', cумма двух чисел плюс сумма между числами: '+result;
    return str
}

console.log(sumNum(arrSixteen));

/*20 Функция конвертирует строку в spinal-case регистр.*/
function spinalCase(str) {
  let arr = str.split(/\s|_|(?=[A-Z])|-/)
  return arr.join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));






