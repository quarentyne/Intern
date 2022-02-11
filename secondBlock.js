'use strict';

function myBind(foo, context, ...rest) {
  return function (...args) {
    const uniqElement = Symbol();
    context[uniqElement] = foo;
    const result = context[uniqElement](...rest, ...args);
    delete context[uniqElement];
    return result;
  }    
}

function myCall(foo, context, ...args) {
  const uniqElement = Symbol();
  context[uniqElement] = foo;
  const result = context[uniqElement](...args);
  delete context[uniqElement];
  return result;
}

Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new Error('Callback have to be Function type');
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
}

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new Error('Callback have to be Function type');
  }
  const result = [];
  for (let i = 0; i < this.length; i++){
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result;
}

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new Error('Callback have to be Function type');
  }
  if (this.length === 0) {
    throw new Error('reduce of empty array with no initial value')
  }
  let result = initialValue || 0;
  for (let i = 0; i < this.length; i++){
    result = callback(result, this[i], i, this);
  }
  return result;
}

Array.prototype.myFind = function (callback) {
  if (typeof callback !== "function") {
    throw new Error('Callback have to be Function type');
  }
  for (let i = 0; i < this.length; i++){
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
}

Array.prototype.myForEach = function (callback) {
  if (typeof callback !== "function") {
    throw new Error('Callback have to be Function type');
  }
  for (let i = 0; i < this.length; i++){
    if (!this[i]) {
      continue;
    }
    callback(this[i], i, this);
  }
}