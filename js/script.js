console.log('хуй');
document.getElementById('');
var a = 10;
console.log(a);

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
   console.log(arr);
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

function binarSearch(arr, search) {
   var left = 0;
   var right = arr.length - 1;
   var center = 0;
   var counter = 0;
   while (left <= right) {
      counter++;
      center = Math.floor((left + right) / 2);
      console.log(left, right);
      console.log(center);
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

// const ans = binarSearch(arr);
// console.log('Искомое: ', search)
// if (ans != -1) {
//    console.log('Ответ: '  ,ans[0]);
//    console.log('Элемент: ' + arr[ans[0]]);
//    console.log('Количество иттераций: ' + ans[1])
// } else {
//    console.log('Элемент не найден')
// }

function go() {
   const len = Number(document.getElementById('len').value);
   var result = document.getElementById('for-result');
   if (len != 0) {
      var arr = getRandomArrayOfInt(len);

      result.innerHTML += 'Random array: ';
      arr.forEach((element) => {
         result.innerHTML += element;
         result.innerHTML += ' ';
      });

      result.innerHTML += '</br>Sorted array: ';
      arr = bubbleSort(arr);
      arr.forEach((element) => {
         result.innerHTML += element;
         result.innerHTML += ' ';
      });

      const search = Number(document.getElementById('search').value);

      result.innerHTML += '</br></br>Search result:</br>';
      ans = binarSearch(arr, search);
      if (ans == -1) {
         result.innerHTML += 'not found';
      } else {
         result.innerHTML += 'element position: ' + ans[0];
         result.innerHTML += '</br>';
         result.innerHTML += 'number of iterations: ' + ans[1];
      }
      result.innerHTML += '<div class="lineJS"></div>';
   }

   // result.innerHTML+='test'
}
