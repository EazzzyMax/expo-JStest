//рандомизатор
function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}

//random array
function getRandomArrayOfInt(len) {
   arr = [];
   for (let i = 0; i < len; i++) {
      arr[i] = getRandomInt(0, len);
   }
   return arr;
}
//bubble sort
function bubbleSort(inArr) {
   console.log('Вход: ', inArr);
   var c = 0;
   var arr = inArr;
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

function qSort(arr1) {
   //базовый случай
   var arr = arr1.slice();
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
   var centerIndex = getRandomInt(1, arr.length);
   var center = arr[centerIndex];
   console.log(' ')   
   console.log('centerIndex = ' + centerIndex + '  center = ' + center);
   arr.splice(centerIndex, 1);

   var leftArr = [];
   var rightArr = [];

   arr.forEach((element) => {
      if (element < center) {
         leftArr.push(element);
      } else {
         rightArr.push(element);
      }
   });
   console.log('left: ' + leftArr);
   console.log('right: ' + rightArr);

   leftArr = qSort(leftArr);
   rightArr = qSort(rightArr);

   var forReturn = [];
   leftArr.push(center);
   forReturn = leftArr.concat(rightArr);
   return forReturn;
}

function binarSearch(arr, search) {
   var left = 0;
   var right = arr.length - 1;
   var center = 0;
   var counter = 0;
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

var result = document.getElementById('for-result');

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
      var arr = getRandomArrayOfInt(len);

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
      var arr = getRandomArrayOfInt(len);

      result.innerHTML += 'Random array: ';
      printArray(arr);

      result.innerHTML += '</br>Sorted array: ';
      arr = qSort(arr);
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
