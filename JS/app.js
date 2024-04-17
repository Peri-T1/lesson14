//  var name = prompt("Your name?", "");

//  alert(name.length);
// var name = prompt("Your name?", "");
// for (name.length = 0; name.length < 5; name.length++) {
//   // Запускается 5 раз, с шагом от 0 до 4.
//   alert(name);
// }
 

var callback = () => {
  var name = prompt("your name", "");
    alert(name.length);
            };
    
    var button = document.querySelector('#myBtn');
    button.addEventListener('click', callback);

    

 
//  let arr =prompt ['your name', ''];
// let obj = {arr};
// let arrAndObj =  arr.concat(obj);
// alert(arrAndObj);
// let obj = {x: 1, y: 2, z: 3};
// let sum = 0;
// for (let key in obj) {
//     sum += obj[key];
// }
// alert(sum);
// let arr = [];
//  for (let i = 1; i <= 11; i++)  {
//     arr.push(i);}


// var isname = confirm("more one");
// alert(isname):
// let input = document.getElementsByTagName("INPUT")[0];
// let p = document.getElementsByTagName("P")[0]
// let words = ["милая", "миленький", "ужасный"]; //аналог списка слов, хранящегося в БД

// name('input', function() { 
//   p.innerHTML = '';
//   if (this.value.length > 1) {
//     let part = getPart(this.value);
//     for (let i in words) {
//       if (part == getPart(words[i])) { //сравниваем половины слов
//         p.innerHTML = 'Найдено';
//         break;
//       }
//        else {p.innerHTML = 'Не найдено';
//        break;
//      }
//     }
//   }
// });