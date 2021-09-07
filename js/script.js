console.log('хуй');
document.getElementById('');
var a = 10;
console.log(a);
function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}

var s = [];

const length = 999;

for (let i = 0; i < length; i++) {
   s[i] = getRandomInt(1, 1000);
}
console.log(s);

var c = 0;
for (let i = 0; i < length - 1; i++) {
   for (let j = 0; j < length - 1 - i; j++) {
      if (s[j] > s[j + 1]) {
         c = s[j];
         s[j] = s[j + 1];
         s[j + 1] = c;
      }
   }
}
console.log(s);

const search = getRandomInt(1, 1000);

function binarSearch(arr) {
   var left = 0;
   var right = arr.length - 1;
   var center = 0;
   var counter = 0
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

const ans = binarSearch(s);
console.log('Искомое: ', search)
if (ans != -1) {
   console.log('Ответ: '  ,ans[0]);
   console.log('Элемент: ' + s[ans[0]]);
   console.log('Количество иттераций: ' + ans[1])
} else {
   console.log('Элемент не найден')
}