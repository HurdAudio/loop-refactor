'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {


    return arr.reduce((a,b)=>{
      return a+b;
    }, base);
  },

  someObjsContainProp: (arr, prop) => {


    return arr.some((a)=>{
      return a.hasOwnProperty(prop);
    });
  },

  convertNameArrayToObject: (arr) => {

    return arr.map(name=>{
      return {first: name[0], last: name[1]};
    });
  },

  objContainsProp: (arr, prop) => {


    return arr.every(item=>{
      return item.hasOwnProperty(prop);
    });
  },

  stringMatch: (arr, str) => {

    return arr.filter(item=>{
      return (item.includes(str));
    });
  },
};
