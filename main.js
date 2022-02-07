'use strict'


String.prototype.deleteSpaces = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
String.prototype.splitCharacters = function () {
    const wordsArray = [];
    for (let item of this) {
        wordsArray.push(item);
    }
    return wordsArray;
}

//1 ????????????????????????????????????????????????????????????????????????????????????????

const checkIsAnagramm = function (firstString, secondString) {
    firstString = firstString.deleteSpaces().toLowerCase();
    secondString = secondString.deleteSpaces().toLowerCase();
    if (firstString.length !== secondString.length) {
        return false;
    }
    const firstArray = firstString.splitCharacters().sort((a, b) => a.localeCompare(b));
    const secondArray = secondString.splitCharacters().sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            return false;
        }
    }
    return true;
}

const checkIsAnagramm2 = function (firstString, secondString) {
    firstString = firstString.deleteSpaces().toLowerCase();
    secondString = secondString.deleteSpaces().toLowerCase();
    if (firstString.length !== secondString.length) {
        return false;
    }
    const charFirstString = {};
    const charSecondString = {};
    for (let i = 0; i < firstString.length; i++) {
        if (!charFirstString[firstString[i]]) {
            charFirstString[firstString[i]] = 1;
        } else if (charFirstString[firstString[i]]) {
            charFirstString[firstString[i]]++;
        }
        if (!charSecondString[secondString[i]]) {
            charSecondString[secondString[i]] = 1;
        } else {
            charSecondString[secondString[i]]++;
        }
    }
    for (let key in charFirstString) {
        if (charFirstString[key] !== charSecondString[key]) {
            return false;
        }
    }
    return true;
}
// 2 Intern\block diagram\ex2.jpg

// 3

// С рекурсией 
const getNumberAmoutRecursion = function (number, count) {
    count = count || 0;
    if (number > -10 && number < 10) {
        return ++count;
    }
    count++;
    return getNumberAmoutRecursion(number / 10, count);
}

// Без рекурсии

const getNumberAmout = function (number) {
    let count = 0;
    for (count; number >= 1; count++) {
        num /= 10;
    }
    return count;
}

// 4

const checkIsPalindrom = function (str) {
    let result = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            result = false;
            return result;
        }
    }
    return result;
}
// 5 

const getCountUniqWords = function (string) {
    string = string.trim().toLowerCase().replace(/[^a-zа-яё\s]/g, '');
    const stringWords = string.split(' ').filter(value => value);
    const uniqWords = new Set(stringWords);
    return uniqWords.size;
}

// 6 

const getWordsCount = function (string) {
    string = string.trim().toLowerCase().replace(/[^a-zа-яё\s]/g, '');
    const wordCount = {};
    const stringWords = string.split(' ').filter(value => value);
    for (let word of stringWords) {
        if (!wordCount[word]) {
            wordCount[word] = 1;
        } else {
            wordCount[word]++;
        }
    }
    return wordCount;
}

// 7

// По классам
class Triangle {
    constructor(sideOne, sideTwo, sideThree) {
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;
    }
    getPerimeter() {
        return this.sideOne + this.sideTwo + this.sideThree;
    }
    getSquare() {
        let halfPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.sideOne) * (halfPerimeter - this.sideTwo) * (halfPerimeter - this.sideThree))
    }
};

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getPerimeter() {
        return 2 * this.radius * Math.PI;
    }
    getSquare() {
        return Math.PI * (this.radius ** 2);
    }
};

class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    getPerimeter() {
        return 2 * (this.width + this.length);
    }
    getSquare() {
        return this.width * this.length;
    }
};

// Функция конструктор

function TriangleConstructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.getPerimeter = function () {
        return this.sideOne + this.sideTwo + this.sideThree;
    }
    this.getSquare = function () {
        let halfPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.sideOne) * (halfPerimeter - this.sideTwo) * (halfPerimeter - this.sideThree))
    }
}

function CircleConstructor(radius) {
    this.radius = radius;
    this.getPerimeter = function () {
        return 2 * this.radius * Math.PI;
    }
    this.getSquare = function () {
        return Math.PI * (this.radius ** 2);
    }
}

function RectangleConstructor(length, width) {
    this.length = length;
    this.width = width;
    this.getPerimeter = function () {
        return 2 * (this.length + this.width);
    }
    this.getSquare = function () {
        return this.length * this.width;
    }
}
//  8

const factorial = (function () {
    const cashe = {};
    return function getFactorial(num) {
        if (num === 0) {
            return 1;
        }
        if (!cashe[num]) {
            cashe[num] = getFactorial(num - 1);
        }
        return num * cashe[num];
    }
})();


// Факториал числа без рекурсии с мемоизацией

const fact = (function () {
    const cashe = {};
    return function getFact(num) {
        let result = 1;
        for (let i = 0; i <= num; i++) {
            if (i === 0) {
                cashe[0] = 1;
            }
            if (!cashe[i]) {
                result = result * i;
                cashe[i] = result;
            }
        }
        return cashe[num];
    }
})();

// 9
// С рекурсией
const getSummFromArrayRecursion = function (array, callback, result, index) {
    result = result || null;
    index = index || 0;
    if (index >= array.length) {
        return result;
    }
    let element = 0;
    if (callback(array[index])) {
        element = array[index];
    }
    result += element;
    return getSummFromArrayRecursion(array, callback, result, ++index);
}


// Без рекурсии
const getSummFromArray = function (array, callback) {
    let result = null;
    for (let i = 0; i < array.length; i++) {
        let element = 0;
        if (callback(array[i])) {
            element = array[i];
        }
        result += element;
    }
    return result;
}


// 10
const getElemsCount = function (array, callback) {
    let count = 0;
    for (let number of array) {
        if (callback(number)) {
            count++;
        }
    }
    return count;
}

// 11 
function toDecimal(num) {
    let result = 0;
    const arr = [];
    const numLength = Math.ceil(Math.log10(num + 1));
    let i = 10 ** (numLength - 1);
    while (i >= 1) {
        let trunced = Math.trunc(num / i);
        arr.push(trunced);
        trunced = trunced * i;
        i = i / 10;
        num = num - trunced;
    }
    for (let index = 0; index < arr.length; index++) {
        result = result * 2 + arr[index];
    }
    return result;
}

function toBinary(num) {
    const array = [];
    while (num / 2 > 0) {
        array.push(num % 2);
        num = Math.floor(num / 2);
    }
    return array.reverse().join('');
}

// 12 

const getSumTwoDimensionalArray = function (array, callback) {
    let result = null;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (callback(array[i][j])) {
                result += array[i][j];
            }
        }
    }
    return result;
}

const getElemsCountTwoDimensionalArray = function (array, callback) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (callback(array[i][j])) {
                result++;
            }
        }
    }
    return result;
}

// 13 

// Без рекурсии

const getSumFromSegmentOfNumbers = function (min, max, callback) {
    let result = null;
    for (let i = min; i <= max; i++) {
        if (callback(i)) {
            result += i;
        }
    }
    return result;
}

// С рекурсией

const getSumFromSegmentOfNumbersRecursion = function (min, max, callback, result) {
    result = result || null;
    if (min >= max) {
        return result;
    }
    if (callback(min)) {
        result += min;
    }
    min++;
    return getSumFromSegmentOfNumbersRecursion(min, max, callback, result)
}

// Блок схема Intern\block diagram\ex13.jpg

// 14

const averageArraysElements = function (array, callback) {
    const filteredArray = array.filter(callback);
    return filteredArray.reduce((a, b) => a + b, 0) / filteredArray.length;
}

const averageTwoDimensionalArraysElements = function (array, callback) {
    let result = null;
    for (let i = 0; i < array.length; i++) {
        const filtered = array[i].filter(callback);
        if (filtered.length !== 0) {
            result += filtered.reduce((a, b) => a + b, 0) / filtered.length;
        }
    }
    return result;
}

// 15 

const transposeMatrix = function (matrix) {
    const transposed = [];
    const originalLength = matrix.length;
    for (let i = 0; i < originalLength; i++) {
        transposed.push([]);
    }
    for (let i = 0; i < originalLength; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            transposed[j].push(matrix[i][j]);
        }
    }
    return transposed;
}


const getMatrixSum = function (matrix1, matrix2) {
    const matrixSum = [];
    for (let i = 0; i < matrix1.length; i++) {
        if (matrix1[i].length !== matrix2[i].length) {
            throw new Error('Эти массивы не могут быть просуммированы');
        }
        matrixSum[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            matrixSum[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return matrixSum;
}



// 16

const deleteRowsWithZero = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(0)) {
            array.splice(i, 1);
        }
    }
    return array;
}

const deleteColumnWithZero = function (array) {
    const deleteIndex = new Set();
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 0) {
                deleteIndex.add(j);
            }
        }
    }
    const zeroesIndex = [];
    let count = 0;
    for (let key of deleteIndex.values()) {
        zeroesIndex.push(key);
    }
    zeroesIndex.sort((a, b) => a - b);
    for (let key of zeroesIndex) {
        for (let i = 0; i < array.length; i++) {
            array[i].splice(key + count, 1);
        }
        count--;
    }
    return array;
}

// 17 ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// i === j - главная ось, должны правильно пробежаться циклы. Если выполняется условие, то вызывается коллбек

const takeActionOnMatrix = function (matrix, direction, func) {
    let elements = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (direction(i, j)) {
                elements.push(matrix[i][j]);
            }
        }
    }
    return func(elements);
}

// 18

const fibonachiObject = {
    start: 0,
    end: 5,
    current: 1,
    prev: 0,
    [Symbol.iterator]() {
        return {
            start: this.start,
            end: this.end,
            current: this.current,
            prev: this.prev,
            nextNum: 0,
            next() {
                if (this.start < this.end) {
                    this.nextNum = this.prev;
                    this.prev = this.current;
                    this.current = this.nextNum + this.current;
                    this.start++;
                    return {
                        value: this.nextNum,
                        done: false,
                    };
                } else {
                    return {
                        value: undefined,
                        done: true,
                    };
                }
            },
        };
    },
};

const fiboObj = {
    start: 0,
    end: 10,
    current: 1,
    prev: 0,
    nextNum: 0,
    [Symbol.iterator]: function* () {
        for (let i = this.start; i < this.end; i++) {
            this.nextNum = this.prev;
            this.prev = this.current;
            this.current = this.nextNum + this.current;
            yield this.nextNum;
        }
    }
}


function* fibonachi() {
    let prev = 0;
    let current = 1;
    while (true) {
        let result = prev;
        prev = current;
        current = result + current;
        yield result;
    }
}
let generatorFibonachy = fibonachi();


// //////////////////////////////////////

const fibonachiRecursion = function (number) {
    if (number <= 1) {     
        return number;        
    } else {        
        return fibonachiRecursion(number - 1) + fibonachiRecursion(number - 2);        
    }
}

 const fibonachiMemoized = (function() {
  const memory = {};
  function func(number) {
    let value;
    if (number in memory) {
        value = memory[number];
    } else {
      if (number === 0 || number === 1)
        value = number;
      else
        value = func(number - 1) + func(number - 2);
        memory[number] = value;
    }
    return value;
  }
  return func;
})();

// 19
function* trafficLightGenerator () {
    while (true) {
        yield red;
        yield yellow
        yield green
        yield yellow
    }
}

// 20 

const checkIsNegativeNumber = function (num) {
    return (num & (1 << 63)) === (1 << 63);
    return num << -1;
}

const getNumberOfBits = function (num) {
    num = toBinary((num >>> 0));
    let zeroes = 32;
    let units = 0;
    for (let number of num) {
        if (number === '1') {
            units++;
        }
    }
    const result = {};
    result[0] = zeroes - units;
    result[1] = units;
    return result;
}

const bitwiseNotEasy = function (num) {
    return -num - 1;
}
const bitwiseNot = function (num) {
    return num ^ (-1);
}

let a = 1;
let s = "";
for (let i = 0; i < 100; i++) {
    if ((a & (1 << i)) === (1 << i)) {
        s += "1";
    } else {
        s += "0";
    }
}
console.log(s);