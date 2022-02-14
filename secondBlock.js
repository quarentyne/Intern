'use strict';

Function.prototype.myBind = function (context, ...rest) {
  if (typeof context !== 'object' || typeof context !== 'function') {
    return function boundFunc() {
    };
  }
  const there = this;
  const insideObject = Object.create(context);
  return function (...args) {
    const uniqElement = Symbol();
    insideObject[uniqElement] = there;
    const result = insideObject[uniqElement](...rest, ...args);
    delete insideObject[uniqElement];
    console.log(result);
    return result;
  }
};

Function.prototype.myCall = function (context, ...args) {
  const insideObject = Object.create(context);
  const uniqElement = Symbol();
  insideObject[uniqElement] = this;
  const result = insideObject[uniqElement](...args);
  delete insideObject[uniqElement];
  return result;
};

Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new Error('Callback have to be Function type');
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new Error('Callback have to be Function type');
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new Error('Callback have to be Function type');
  }
  if (this.length === 0) {
    throw new Error('reduce of empty array with no initial value')
  }
  let result = initialValue || 0;
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

Array.prototype.myFind = function (callback) {
  if (typeof callback !== "function") {
    throw new Error('Callback have to be Function type');
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

Array.prototype.myForEach = function (callback) {
  if (typeof callback !== "function") {
    throw new Error('Callback have to be Function type');
  }
  for (let i = 0; i < this.length; i++) {
    if (!this[i]) {
      continue;
    }
    callback(this[i], i, this);
  }
};