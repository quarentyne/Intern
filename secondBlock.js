'use strict';

Function.prototype.myBind = function (context, ...rest) {
  const there = this;
  let insideObject;

  if (typeof context === 'object' || typeof context === 'function') {
    insideObject = Object.create(context);
  }
  if (typeof context === 'number') {
    insideObject = new Number(context);
  }
  if (typeof context === 'string') {
    insideObject = new String(context);
  }
  if (typeof context === 'boolean') {
    insideObject = new Boolean(context);
  }

  return function (...args) {
    const uniqElement = Symbol();
    insideObject[uniqElement] = there;
    const result = insideObject[uniqElement](...rest, ...args);
    delete insideObject[uniqElement];
    return result;
  }
};

Function.prototype.myCall = function (context, ...args) {
  let insideObject;

  if (typeof context === 'object' || typeof context === 'function') {
    insideObject = Object.create(context);
  }
  if (typeof context === 'number') {
    insideObject = new Number(context);
  }
  if (typeof context === 'string') {
    insideObject = new String(context);
  }
  if (typeof context === 'boolean') {
    insideObject = new Boolean(context);
  }

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

  let accumulator = initialValue || 0;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
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
    if (this[i] === undefined) {
      continue;
    }
    callback(this[i], i, this);
  }
};