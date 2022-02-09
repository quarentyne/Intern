'use strict'

Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        };
    };
    return result;
};

Array.prototype.mySort = function(){
    for(let i = 0; i < this.length; i++) {
        for(let j = 0; j < this.length; j++) {
            if(this[j] > this[j + 1]){
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            };
        };
    };
    return this;
}

Array.prototype.myJoin = function (separator) {
    let string;
    if (separator !== undefined) {
        string = this.toString().replace(/,/g, separator);
    } else {
        string = this.toString();
    };
    return string;
};

Array.prototype.myIncludes = function (element) {
    for (let item of this) {
        if (item === element) {
            return true;
        };
    };
    return false;
}

String.prototype.deleteSpaces = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

String.prototype.mySplitForSymbol = function () {
    return Array.from(this);
};

String.prototype.mySplit = function (separator, limit) {
    limit = limit || null;
    let word = '';
    const wordsArray = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== separator) {
            word += this[i];
        };
        if (this[i] === separator || i === this.length - 1) {
            wordsArray.push(word);
            word = '';
            if (wordsArray.length === limit) {
                break;
            };
        };
    };
    return wordsArray;
};

//1 

const checkIsAnagramm = function (firstString, secondString) {
    if (typeof firstString !== 'string' || typeof secondString !== 'string') {
        throw new Error('Operators type have to be String');
    };
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
        };
    };
    for (let key in charFirstString) {
        if (charFirstString[key] !== charSecondString[key]) {
            return false;
        };
    };
    return true;
}
// 2 Intern Diagrams/diagramEx2.png

// 3

// С рекурсией 
const getNumberAmoutRecursion = function (number, count) {
    if (typeof number !== 'number') {
        throw new Error('Operator type have to be Number');
    };
    count = count || 0;
    if (number > -10 && number < 10) {
        return ++count;
    };
    count++;
    return getNumberAmoutRecursion(number / 10, count);
}
// Без рекурсии

const getNumberAmout = function (number) {
    if (typeof number !== 'number') {
        throw new Error('Operator type have to be Number');
    };
    let count = 0;
    for (count; number >= 1; count++) {
        number /= 10;
    };
    return count;
}

// 4

const checkIsPalindrom = function (str) {
    if(typeof str !== 'string'){
        throw new Error('Operator type have to be String');
    };
    let result = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            result = false;
            return result;
        };
    };
    return result;
}

// 5 

const getCountUniqWords = function (string) {
    if(typeof string !== 'string'){
        throw new Error('Operator type have to be String');
    };
    string = string.deleteSpaces().toLowerCase().replace(/[^a-zа-яё\s]/g, '');
    const stringWords = string.mySplit(' ').myFilter(value => value);
    const uniqWords = new Set(stringWords);
    return uniqWords.size;
}

// 6 

const getWordsCount = function (string) {
    if(typeof string !== 'string'){
        throw new Error('Operator type have to be String');
    };
    string = string.deleteSpaces().toLowerCase().replace(/[^a-zа-яё\s]/g, '');
    const wordCount = {};
    const stringWords = string.mySplit(' ').myFilter(value => value);
    for (let word of stringWords) {
        if (!wordCount[word]) {
            wordCount[word] = 1;
        } else {
            wordCount[word]++;
        };
    };
    return wordCount;
}

// 7

// По классам
class Triangle {
    constructor(base, firstAdditionalSide, secondAdditionalSide) {
        if (typeof base !== 'number' || base < 1 || typeof firstAdditionalSide !== 'number' ||
            firstAdditionalSide < 1 || typeof secondAdditionalSide !== 'number' || secondAdditionalSide < 1) {
            throw new Error('Operators cannot be negative and have to be Numbers');
        };
        this.base = base;
        this.firstAdditionalSide = firstAdditionalSide;
        this.secondAdditionalSide = secondAdditionalSide;
    }
    getPerimeter() {
        return this.base + this.firstAdditionalSide + this.secondAdditionalSide;
    }
    getSquare() {
        let halfPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.base) * (halfPerimeter - this.firstAdditionalSide) *
            (halfPerimeter - this.secondAdditionalSide))
    }
};

class Circle {
    constructor(radius) {
        if (typeof radius !== 'number' || radius < 1) {
            throw new Error('Operator cannot be negative and have to be Number');
        };
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
        if (typeof width !== 'number' || width < 1 || typeof length !== 'number' || length < 1) {
            throw new Error('Operators cannot be negative and have to be Numbers');
        };
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

function TriangleConstructor(base, firstAdditionalSide, secondAdditionalSide) {
    if (typeof base !== 'number' || base < 1 || typeof firstAdditionalSide !== 'number' ||
        firstAdditionalSide < 1 || typeof secondAdditionalSide !== 'number' || secondAdditionalSide < 1) {
        throw new Error('Operators cannot be negative and have to be Numbers');
    };
    this.base = base;
    this.firstAdditionalSide = firstAdditionalSide;
    this.secondAdditionalSide = secondAdditionalSide;
}

TriangleConstructor.prototype.getPerimeter = function () {
    return this.base + this.firstAdditionalSide + this.secondAdditionalSide;
}

TriangleConstructor.prototype.getSquare =  function () {
    let halfPerimeter = this.getPerimeter() / 2;
    return Math.sqrt(halfPerimeter * (halfPerimeter - this.base) * (halfPerimeter - this.firstAdditionalSide) *
        (halfPerimeter - this.secondAdditionalSide));
}

function CircleConstructor(radius) {
    if (typeof radius !== 'number' || radius < 1) {
        throw new Error('Operator cannot be negative and have to be Number');
    };
    this.radius = radius;
}

CircleConstructor.prototype.getPerimeter = function () {
    return 2 * this.radius * Math.PI;
}

CircleConstructor.prototype.getSquare = function () {
    return Math.PI * (this.radius ** 2);
}

function RectangleConstructor(length, width) {
    if (typeof width !== 'number' || width < 1 || typeof length !== 'number' || length < 1) {
        throw new Error('Operators cannot be negative and have to be Numbers');
    };
    this.length = length;
    this.width = width;
}

RectangleConstructor.prototype.getPerimeter = function () {
    return 2 * (this.length + this.width);
}

RectangleConstructor.prototype.getSquare = function () {
    return this.length * this.width;
}
    

//  8

const getFactorialMemo = (function () {
    const memory = {};
    return function recursionFact(number) {
        if (typeof number !== 'number') {
            throw new Error('Operator have to be Number');
        };
        if (number === 0) {
            return 1;
        };
        if (!memory[number]) {
            memory[number] = recursionFact(number - 1);
        }
        return number * memory[number];
    };
})();

const getFactorialCycle = function (number) {
    if (typeof number !== 'number') {        
        throw new Error('Operator have to be Number');
    };
    let result = 1;
    for (let i = 1; i <= number; i++){
        result = result * i;
    };
    return result;
}

// 9
// С рекурсией
const getSummFromArrayRecursion = function (array, callback, result, index) {
    if (typeof callback !== 'function') {
        throw new Error('Callback have to be Function type');
    };
    result = result || null;
    index = index || 0;
    if (index >= array.length) {
        return result;
    };
    let element = 0;
    if (callback(array[index])) {
        element = array[index];
    };
    result += element;
    return getSummFromArrayRecursion(array, callback, result, ++index);
}


// Без рекурсии
const getSummFromArray = function (array, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback have to be Function type');
    };
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
    if (typeof callback !== 'function') {
        throw new Error('Callback have to be Function type');
    };
    let count = 0;
    for (let number of array) {
        if (callback(number)) {
            count++;
        };
    };
    return count;
}

// 11 

function toDecimal(number) {
    let result = 0;
    const numbersArray = [];
    const numLength = Math.ceil(Math.log10(number + 1));
    let i = 10 ** (numLength - 1);
    while (i >= 1) {
        let trunced = Math.trunc(number / i);
        numbersArray.push(trunced);
        trunced = trunced * i;
        i = i / 10;
        number = number - trunced;
    };
    for (let index = 0; index < numbersArray.length; index++) {
        result = result * 2 + numbersArray[index];
    };
    return result;
}

function toBinary(number) {
    const numbersArray = [];
    while (number / 2 > 0) {
        numbersArray.push(number % 2);
        number = Math.floor(number / 2);
    };
    let result = '';
    for (let i = numbersArray.length - 1; i >= 0; i--){
        result += numbersArray[i];
    };
    return result;
}

// 12 

const getSumTwoDimensionalArray = function (array, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback have to be Function type');
    };
    let result = null;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (callback(array[i][j])) {
                result += array[i][j];
            };
        };
    };
    return result;
}

const getElemsCountTwoDimensionalArray = function (array, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback have to be Function type');
    };
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (callback(array[i][j])) {
                result++;
            };
        };
    };
    return result;
}

// 13 

// Без рекурсии

const getSumFromSegmentOfNumbers = function (min, max, callback) {
    if (typeof callback !== 'function' || typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Incorrect data entered. Minimum and maximum have to be Numbers. Callback have to be Function type');
    };
    let result = null;
    for (let i = min; i <= max; i++) {
        if (callback(i)) {
            result += i;
        };
    };
    return result;
}

// С рекурсией

const getSumFromSegmentOfNumbersRecursion = function (min, max, callback, result) {
    if (typeof callback !== 'function' || typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Incorrect data entered. Minimum and maximum have to be Numbers. Callback have to be Function type');
    };
    result = result || null;
    if (min > max) {
        return result;
    };
    if (callback(min)) {
        result += min;
    };
    min++;
    return getSumFromSegmentOfNumbersRecursion(min, max, callback, result);
}

// Блок схема Intern\block diagram\ex13.jpg

// 14

const takeAverageArrayElements = function (array, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback have to be Function type');
    };
    const filteredArray = array.myFilter(callback);
    return filteredArray.reduce((a, b) => a + b, 0) / filteredArray.length;
}

const takeAverageTwoDimensionalArrayElements = function (array, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback have to be Function type');
    };
    let result = null;
    for (let i = 0; i < array.length; i++) {
        const filtered = array[i].myFilter(callback);
        if (filtered.length !== 0) {
            result += filtered.reduce((a, b) => a + b, 0) / filtered.length;
        };
    };
    return result;
}

// 15 

const transposeMatrix = function (matrix) {
    if (matrix.length === 0) {
        throw new Error('The input parameter must be a matrix');
    };
    const transposed = [];
    const originalLength = matrix.length;
    let maxLength = 0;
    for (let i = 0; i < originalLength; i++) {
        maxLength = Math.max(maxLength, matrix[i].length);        
    };
    while (maxLength > 0) {
        transposed.push([]);
        maxLength--;
    };
    for (let i = 0; i < originalLength; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            transposed[j].push(matrix[i][j]);
        };
    };    
    if (transposed[transposed.length - 1].length === 0) {
            transposed.length = transposed.length - 1;
    };
    return transposed;
}

const getMatrixSum = function (matrix1, matrix2) {
    const matrixSum = [];
    for (let i = 0; i < matrix1.length; i++) {
        if (matrix1[i].length !== matrix2[i].length) {
            throw new Error('The arrays are not the same size. Addition not possible');
        };
        matrixSum[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            matrixSum[i][j] = matrix1[i][j] + matrix2[i][j];
        };
    };
    return matrixSum;
}

// 16

const deleteRowsWithZero = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].myIncludes(0)) {
            array.splice(i, 1);
        };
    };
    return array;
}

const deleteColumnWithZero = function (array) {
    const deleteIndex = new Set();
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 0) {
                deleteIndex.add(j);
            };
        };
    };
    const zeroesIndex = [];
    let count = 0;
    for (let key of deleteIndex.values()) {
        zeroesIndex.push(key);
    };
    zeroesIndex.mySort((a, b) => a - b);
    for (let key of zeroesIndex) {
        for (let i = 0; i < array.length; i++) {
            array[i].splice(key + count, 1);
        };
        count--;
    };
    return array;
}

// 17 

const takeActionOnMatrix = function (matrix, direction, resultFunction) {
    if (typeof direction !== 'function' || typeof resultFunction !== 'function') {
        throw new Error('Check the introduced functions');
    };
    let elements = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (direction(i, j)) {
                elements.push(matrix[i][j]);
            };
        };
    };
    return resultFunction(elements);
}

// 18

const fibonachiObject = {
    start: 0,
    end: 10,
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
                };
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
        };
    },
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

const fibonachiRecursion = function (number) {
    if (number <= 1) {     
        return number;        
    } 
    return fibonachiRecursion(number - 1) + fibonachiRecursion(number - 2);        
}

 const fibonachiMemoized = (function() {
    const memory = {};
    return function func(number) {
        if (typeof number !== 'number') {
            throw new Error('Operator have to be Number');
        };
        let value;
        if (number in memory) {
            value = memory[number];
        } else {
            if (number === 0 || number === 1)
                value = number;
            else
                value = func(number - 1) + func(number - 2);
            memory[number] = value;
        };
        return value;
    };
 })();

// 19
function* trafficLightGenerator () {
    while (true) {
        yield 'red';
        yield 'yellow';
        yield 'green';
        yield 'yellow';
    };
}

const trafficIterator = {
    color: ['red', 'yellow', 'green', 'yellow'],
    [Symbol.iterator]() {
        return {
            color: this.color,
            index: 0,
            next() {
                if (this.index === this.color.length) {
                    this.index = 0;
                };
                while (this.index < this.color.length) {
                    return {
                        value: this.color[this.index++],
                        done: false,
                    };
                };
            },
        };
    },
}

// 20 

const checkIsNegativeNumber = function (number) {
    if (typeof number !== 'number') {
       throw new Error('Operator have to be Number');
    };
    return (number & (1 << 31)) === (1 << 31);
}

const getNumberOfBits = function (number) {
    if (typeof number !== 'number') {
        throw new Error('Operator have to be Number');
    };
    number = toBinary((number >>> 0));
    let zeroes = 32;
    let units = 0;
    for (let num of number) {
        if (num === '1') {
            units++;
        }
    }
    const result = {};
    result[0] = zeroes - units;
    result[1] = units;
    return result;
}

const bitwiseNotEasy = function (number) {
    if (typeof number !== 'number') {
        throw new Error('Operator have to be Number');
    };
    return -number - 1;
}

const bitwiseNot = function (number) {
    if (typeof number !== 'number') {
        throw new Error('Operator have to be Number');
    };
    return number ^ (-1);
}

const bitwiseNot2 = function (number) {
    let result = 0;
    for (let i = 0; i < 32; i++){
        if (((number >> i) & 1) !== 1) {
            result = result | (1<<i);
        }
    }
    return result
}