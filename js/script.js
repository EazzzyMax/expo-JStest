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
   return arr;
}
//bubble sort
function bubbleSort(arr) {
   var c = 0;
   for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
         if (arr[j] > arr[j + 1]) {
            c = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = c;
         }
      }
   }
}

function binarSearch(arr) {
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

      result.innerHTML += '<p>';
      arr.forEach((element) => {
         result.innerHTML += element;
         result.innerHTML += ' ';
      });
      result.innerHTML += '<p>';
      
      // arr = bubbleSort(arr)
      // result.innerHTML += '<p>';
      // arr.forEach((element) => {
      //    result.innerHTML += element;
      //    result.innerHTML += ' ';
      // });
      // result.innerHTML += '<p>';

      result.innerHTML += '<div class="lineJS"></div>';
   }

   // result.innerHTML+='test'
}
