'use strict'

//1

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
// 5 ?????????????????????????????????????????????????????????????????????

const getCountUniqWords = function(string){
    const stringWords = string.split(' ');
    const uniqWords = new Set(stringWords);
    return uniqWords.size;
}

// 6

const getWordsCount = function(string){
    const wordCount = {};
    const stringWords = string.split(' ');
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

// Факториал числа без рекурсии ?????????????????????????????????????????????????????????

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

// 11 ????????????????????????????????????????????????????????????????????????????????????
function fromBinary(num) {
  return parseInt(num, 2);
}
function toBinary(num) {
	return parseInt(num, 10)
}



// console.log(toBinary(7));

// 12 ?????????????????????????????????????????????????????????????????????????????????????????????

const takeActionWithTwoDimensionalArray = function (array, func, callback) {
	let newArray = [];
	for (let i = 0; i < array.length; i++){
		newArray = newArray.concat(array[i]);
	}
	return func(newArray, callback);
}

// 13

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

// ?????????????????????????????????????????????????????????????????????????????????????????????
// const getSumFromSegmentOfNumbersMemoized = function () {
// 	const memo = {/*параметр функции*/};
// 	return function getSum(min, max, callback, result) {
// 		let result = result || null;
// 		while (min < max) {
			
// 		}
// 		return result;
// 	}
// }

// // 14

// const getMeanFromArray = function (array){
//     if(Array.isArray(array[1])){
//         array = array[0].concat(array[1]);
//     }
//     let even = [];
//     let odd = [];
//     for(let num of array){
//         if(num%2 === 0){
//             even.push(num);
//         }else{
//             odd.push(num);
//         }
//     }
//     let evenMean = even.reduce((a,b) => a+b, 0)/even.length;
//     let oddMean = odd.reduce((a,b) => a+b, 0)/odd.length;
//     return ([evenMean, oddMean])
// }
// console.log(getMeanFromArray([[1,2,3,4,5,5],[1,3,5,2,1]]))

// 15

const sumMatrix = function (matrix){
    const transposed = matrix[0].map((col, i) => matrix.map(row => row[i]));
    const matrixSum = [];
    for(let i = 0; i<matrix.length; i++){
        if(matrix[i].length !== transposed[i].length){
            throw new Error('Сложение невозможно, матрицы разного размера');
        }
        matrixSum[i] = [];
        for(let j = 0; j<matrix[i].length; j++){
            matrixSum[i][j] = matrix[i][j] + transposed[i][j];
        }
    }
    return matrixSum;
}

// 16

// const deleteRowsWithZero = function (array){
//     for(let i = 0; i<array.length; i++){
//         if(array[i].includes(0)){
//             array.splice(i,1);
//         }
//     }
//     return array;
// }

// const deleteColumnWithZero = function (array){
//     const deleteIndex = new Set();
//     let key = 0;
//     for(let i = 0; i<array.length; i++){
//         for(let j = 0; j<array[i].length; j++){
//             if(array[i][j] === 0 && key <= j){
//                 deleteIndex.add(j);
//                 key++;
//             }
//         }
//     }
//     let count = 0;
//     for(let key of deleteIndex.values()){
//         for(let i = 0; i<array.length; i++){
//             array[i].splice(key+count,1);

//         }   
//         // Если происходило удаление, то нужно уменьшить каунт?????
//     }
//     return array;
// }
// console.log(deleteColumnWithZero([[0, 0, 1, 7, 3, 0], [2, 1, 1, 6, 4, 1], [0, 8, 1, 2, 0, 1]]));

