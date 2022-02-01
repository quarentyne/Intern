'use strict'

//1

const checkIsAnagramm = function(str1, str2){
    return str1.split('').sort().join('')===str2.split('').sort().join('');
}

// 3

// С рекурсией 
let count = 0;
const getNumberAmout = function(num){   
    console.log(num);
    if(num>-10 && num<10){
        console.log(++count);
        return count++;
    }    
    count++;
    getNumberAmout(num/10);
}
console.log(getNumberAmout(100));

// Без рекурсии

const getNumberAmout2 = function(num){
    return num.toString().length;
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
    let resultString = '';
    for(let word in wordCount){
        resultString += `'${word}' встретилось ${wordCount[word]} раз; `;
    }
    return resultString;
}

// 7

class Triangle{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter(){
        return this.a + this.b + this.c;
    }
    getSquare(){
        let halfPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c))
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
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    getPerimeter(){
        return 2 * (this.a + this.b);
    }
    getSquare(){
        return this.a * this.b;
    }
};

//  8

const factorial = function(){
    const cashe = {};
    return function getFactorial(num) {
        console.log(num);
        if(num === 0){
            return 1;
        }
        if(!cashe[num]){
            cashe[num] = getFactorial(num-1);
        }
        return num * cashe[num];
    }
};

// Факториал числа без рекурсии

const fact = num => {
    let result = 1;
    while (num>0){
        result *= num;
        num--;
    }
    return result;
}

// 9

// const getSummFromArray = function(arr){
//     let odd = odd || 0;
//     let even = even || 0;
//     let oddPositive = oddPositive || 0;
//     if(arr.length){
        
//     }
// }

// 10

// const getElemsCount = function (arr){
//     let zero = 0;
//     let positive = 0;
//     let negative = 0;
//     let simple = 0;
//     for(let elem of arr){
//         console.log(simple);
//         if(elem === 0){
//             zero++;
//         }else{
//             for (let i = 2; i <= elem; i++) {
//                 let flag = 1;
//                 for (let j = 2; (j <= i/2)&&(flag==1); j++) {
//                    if (i%j==0) {
//                        flag=0;
//                     }
//                   }
//                 }
//                if (flag) {
//                    simple++;
//                }
//             }
//             if(elem < 0){
//                 negative++;
//             }
//             else{
//                 positive++;
//             }                   
//     const result = [zero, positive, negative, simple];
//     return result;
//     }
// }
// console.log(getElemsCount([0,2,4,-3,9,8,-7]));

// 11


// 12