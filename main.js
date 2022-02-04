'use strict'

//1 ????????????????????????????????????????????????????????????????????????????????????????

const checkIsAnagramm = function(str1, str2){
    return str1.split('').sort().join('')===str2.split('').sort().join('');
}

// 2 ?????????????????????????????????????????????????????????????????????????????????????????

// 3

// С рекурсией 
const getNumberAmout = function(num, count){    
    count = count || 0;
    if(num>-10 && num<10){
        return ++count;
    }    
    count++;
    return getNumberAmout(num/10, count);
}

// Без рекурсии

const getNumberAmout2 = function(num){
    let count = 0;
    for(count; num>=1; count++) {
        num/=10;
    }
    return count;
}

// 4

const checkIsPalindrom = function(str){
    let result = true;
    for(let i = 0; i<str.length; i++){
        if(str[i] !== str[str.length-1-i]){
            result = false;
            return result;
        }
    }
    return result;
}
// 5 

const getCountUniqWords = function(string){
    string = string.trim().toLowerCase().replace(/[^a-zа-яё\s]/g, '');  
    const stringWords = string.split(' ').filter(value => value);
    const uniqWords = new Set(stringWords);
    console.log(uniqWords);
    return uniqWords.size;
}

// 6 

const getWordsCount = function (string) {
    string = string.trim().toLowerCase().replace(/[^a-zа-яё\s]/g, ''); 
    const wordCount = {};
    const stringWords = string.split(' ').filter(value => value);
    for(let word of stringWords){
        if(!wordCount[word]){
            wordCount[word] = 1;
        }else{
          wordCount[word]++;}
    }
    return wordCount;
}

// 7

// По классам
class Triangle{
    constructor(sideOne, sideTwo, sideThree){
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;
    }
    getPerimeter(){
        return this.sideOne + this.sideTwo + this.sideThree;
    }
    getSquare(){
        let halfPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.sideOne) * (halfPerimeter - this.sideTwo) * (halfPerimeter - this.sideThree))
    }
};

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getPerimeter(){
        return 2 * this.radius * Math.PI;
    }
    getSquare(){
        return Math.PI * (this.radius ** 2);
    }
};

class Rectangle{
    constructor(width, length){
        this.width = width;
        this.length = length;
    }
    getPerimeter(){
        return 2 * (this.width + this.length);
    }
    getSquare(){
        return this.width * this.length;
    }
};

// Функция конструктор

function TriangleConstructor(sideOne, sideTwo, sideThree){
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.getPerimeter = function(){
        return this.sideOne + this.sideTwo + this.sideThree;
    }
    this.getSquare = function(){
        let halfPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.sideOne) * (halfPerimeter - this.sideTwo) * (halfPerimeter - this.sideThree))
    }
}

function CircleConstructor(radius){
    this.radius = radius;
    this.getPerimeter = function(){
        return 2 * this.radius * Math.PI;
    }
    this.getSquare = function(){
        return Math.PI * (this.radius ** 2);
    }
}

function RectangleConstructor(length ,width){
    this.length = length;
    this.width = width;
    this.getPerimeter = function(){
        return 2 * (this.length + this.width);
    }
    this.getSquare = function(){
        return this.length * this.width;
    }
}
//  8

const factorial = (function(){
    const cashe = {};
    return function getFactorial(num) {
        if(num === 0){
            return 1;
        }
        if(!cashe[num]){
            cashe[num] = getFactorial(num-1);
        }
        return num * cashe[num];
    }
})();


// Факториал числа без рекурсии с мемоизацией

const fact = (function(){
    const cashe = {};
    return function getFact(num) {
        let result = 1;
        for(let i = 0; i<=num; i++){
            if(i===0){
                cashe[0]=1;
            }
            if(!cashe[i]){
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
	if (callback(array[index])){
		element = array[index];
	}
	result += element;
	return getSummFromArrayRecursion(array, callback, result, ++index);
}


// Без рекурсии
const getSummFromArray = function(array, callback){
	let result = null;
	for (let i = 0; i < array.length; i++){
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
function fromBinary(num) {
    let result = 0;
    const arr = [];
    const numLength = Math.ceil(Math.log10(num + 1));
    let i = 10 ** (numLength-1);
    while (i >= 1) {
        let trunced = Math.trunc(num / i);
        arr.push(trunced);
        trunced = trunced * i;
        i = i / 10;
        num = num - trunced;
    }
    for (let index = 0; index < arr.length; index++){
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
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            if (callback(array[i][j])) {
			result += array[i][j];
		    }
        }
    }
    return result;
}

const getElemsCountTwoDimensionalArray = function (array, callback) {
    let result = 0;
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            if (callback(array[i][j])) {
                result++;
            }
        }
    }
    return result;
}

// 13 ???????????????????????????????????????????????????????????????????????????????????????????????

// Без рекурсии

const getSumFromSegmentOfNumbers = function (min, max, callback) {
	let result = null;
	for (let i = min; i <= max; i++){
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

// 14

const averageArraysElements = function (array, callback) {
    const filteredArray = array.filter(callback);
    return filteredArray.reduce((a, b) => a + b, 0)/filteredArray.length;
}

const averageTwoDimensionalArraysElements = function (array, callback) {
    let result = null;
    for (let i = 0; i < array.length; i++){
        const filtered = array[i].filter(callback);
        if(filtered.length!==0){
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
    const err = 'Эти массивы не могут быть просуммированы';    
    for (let i = 0; i < matrix1.length; i++){
        if (matrix1[i].length !== matrix2[i].length) {
            throw new Error(err);
        }
        matrixSum[i] = [];
        for (let j = 0; j < matrix1[i].length; j++){
            matrixSum[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }    
    return matrixSum;
}



// 16

const deleteRowsWithZero = function (array){
    for(let i = 0; i<array.length; i++){
        if(array[i].includes(0)){
            array.splice(i,1);
        }
    }
    return array;
}

const deleteColumnWithZero = function (array){
    const deleteIndex = new Set();
    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<array[i].length; j++){
            if(array[i][j] === 0 ){
                deleteIndex.add(j);
            }
        }
    }
    const zeroesIndex = [];
    let count = 0;
    for (let key of deleteIndex.values()) {
        zeroesIndex.push(key);
    }
    zeroesIndex.sort((a, b) => a > b);
    for(let key of zeroesIndex){
        for(let i = 0; i<array.length; i++){
            array[i].splice(key+count,1);
        }  
        count--;
    }
    return array;
}
console.log(deleteColumnWithZero([[0, 0, 1, 0, 2, 3, 0, 1, 0, 4], [2, 1, 1, 8, 2, 3, 0, 0, 5, 4], [0, 8, 1, 7, 2, 3, 0, 9, 5, 4]]));

// 17
// i === j - главная ось, должны правильно пробежаться циклы. Если выполняется условие, то вызывается коллбек

const takeActionOnMatrix = function (matrix, direction, callback) {
    
}