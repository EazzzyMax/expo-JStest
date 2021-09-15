'use strict';

//рандомизатор
function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}

//random array
function getRandomArrayOfInt(len) {
   let arr = [];
   for (let i = 0; i < len; i++) {
      arr[i] = getRandomInt(0, len);
   }
   return arr;
}
//bubble sort
function bubbleSort(inArr) {
   console.log('Вход: ', inArr);
   let c = 0;
   let arr = inArr;
   for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
         if (arr[j] > arr[j + 1]) {
            c = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = c;
         }
      }
   }
   10;
   console.log('Выход: ', arr);
   return arr;
}

//бысстрая сортировка
function qSort(arr1) {
   //базовый случай
   let arr = arr1.slice();
   if (arr.length <= 1) {
      return arr;
   }
   if (arr.length == 2) {
      if (arr[0] < arr[1]) {
         return arr;
      }
      return [arr[1], arr[0]];
   }

   //рекурсивный случай
   let centerIndex = getRandomInt(1, arr.length);
   let center = arr[centerIndex];
   console.log(' ');
   console.log('centerIndex = ' + centerIndex + '  center = ' + center);
   arr.splice(centerIndex, 1);

   let leftArr = [];
   let rightArr = [];

   arr.forEach((element) => {
      if (element < center) {
         leftArr.push(element);
      } else {
         rightArr.push(element);
      }
   });

   leftArr = qSort(leftArr);
   rightArr = qSort(rightArr);

   let forReturn = [];
   leftArr.push(center);
   forReturn = leftArr.concat(rightArr);
   return forReturn;
}

function binarSearch(arr, search) {
   let left = 0;
   let right = arr.length - 1;
   let center = 0;
   let counter = 0;
   while (left <= right) {
      counter++;
      center = Math.floor((left + right) / 2);
      // console.log(left, right);
      // console.log(center);
      if (arr[center] == search) {
         return [center, counter];
      } else if (search < arr[center]) {
         right = center - 1;
      } else {
         left = center + 1;
      }
   }
   return -1;
}

function intLen(a) {
   return String(a).length;
}
function printItem(item, itemLen) {
   result.innerHTML += item;
   for (let i = 0; i <= itemLen - intLen(item); i++) {
      result.innerHTML += '&ensp;';
   }
}
function getMaxOfArray(arr) {
   return Math.max.apply(null, arr);
}
function printArray(arr) {
   const itemLen = intLen(getMaxOfArray(arr));

   arr.forEach((element) => {
      printItem(element, itemLen);
   });
}

let result = document.getElementById('for-result');

function reset() {
   result.innerHTML = '';
}

function generate() {
   result.innerHTML = '';
   console.log('Start generate');
   const search = Number(document.getElementById('search').value);
   const len = Number(document.getElementById('len').value);
   console.log('Desried number: ' + search);
   console.log('Array size: ' + len);
   if (len != 0) {
      let arr = getRandomArrayOfInt(len);

      result.innerHTML += 'Random array: ';
      printArray(arr);

      result.innerHTML += '</br>Sorted array: ';
      arr = bubbleSort(arr);
      printArray(arr);

      result.innerHTML += '</br></br>Search result:</br>';
      ans = binarSearch(arr, search);
      if (ans == -1) {
         result.innerHTML += 'desired number: ' + search;
         result.innerHTML += '</br>not found';
      } else {
         result.innerHTML += 'desired number: ' + search;
         result.innerHTML += '</br>';
         result.innerHTML += 'element position: ' + ans[0];
         result.innerHTML += '</br>';
         result.innerHTML += 'number of iterations: ' + ans[1];
      }
      result.innerHTML += '<div class="lineJS"></div>';
   }

   // result.innerHTML+='test'
}

function generateQuick() {
   result.innerHTML = '';
   console.log('Start generate');
   const search = Number(document.getElementById('search').value);
   const len = Number(document.getElementById('len').value);
   console.log('Desried number: ' + search);
   console.log('Array size: ' + len);
   if (len != 0) {
      let arr = getRandomArrayOfInt(len);

      result.innerHTML += 'Random array: ';
      printArray(arr);

      result.innerHTML += '</br>Sorted array: ';
      arr = qSort(arr);
      printArray(arr);

      result.innerHTML += '</br></br>Search result:</br>';
      let ans = binarSearch(arr, search);
      if (ans == -1) {
         result.innerHTML += 'desired number: ' + search;
         result.innerHTML += '</br>not found';
      } else {
         result.innerHTML += 'desired number: ' + search;
         result.innerHTML += '</br>';
         result.innerHTML += 'element position: ' + ans[0];
         result.innerHTML += '</br>';
         result.innerHTML += 'number of iterations: ' + ans[1];
      }
      result.innerHTML += '<div class="lineJS"></div>';
   }

   // result.innerHTML+='test'
}

function pResult(str) {
   result.innerHTML += str;
}

function pizda() {
   let string = 'ФИСВУАПРШОЛДЬТЩЗЙКЫЕГМЦЧНЯ;ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let result = document.getElementById('for-result');
   for (let i = 0; i < 26; i++){
      pResult(`{
         "before": ["${string[i]}"],
         "after": ["${string[i+27]}"]
      },`)
   }
}
