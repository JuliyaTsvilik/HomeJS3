// // Напишите функцию, которая принимает два числовых
// аргумента и возвращает наименьшее из них.
// function resultnumber (number1, number2) {
//       if(number1 < number2) {
//         console.log(number1)
//       } else if(number2 < number1) {
//           console.log(number2)
//       } else {
//           console.log(number1 + " равно " + number2)
//       }
//   }
//   resultnumber (10, 6)



// Напишите функцию, которая принимает два числовых
// аргумента и выводит в консоль все четные числа от большего
// к меньшему.
//   function numbers(number1, number2){
//      for (let i = number1; i >= number2; i--) {
        
//         if (i % 2 === 0) {
//                         console.log(i);}
//         }
//     }
//    numbers(10, 16)
//    numbers(100, 90)


//    //Напишите функцию power, которая принимает два числовых
// аргумента (основание степени и саму степень) и возвращает
// число в указанной степени. Значение степени должно быть
// указано по умолчанию 2.
//  function power (number1, number2 ) {
// const result = number1 **number2
//      console.log(result)
//  }
// power (10,2)
// power (8,2)
// power (78,2)
// power (6,2)


// Напишите функцию, которая принимает числовой аргумент n и
// считает сумму чисел от 1 до n.
// function nomer (n){
//     for ( let i =0; i < n; i++) {
//               console.log(i)
//              } 
// }
//  nomer (5)
//  nomer(8)



// Напишите функцию, которая принимает два числовых
// аргумента n и m и считает сумму четных чисел и нечетных
// чисел от n до m. Суммы выведите в консоль (в начале сумму
// четных чисел, а затем сумму нечетных).

// function nomers(n, m) {
//     let sum1 = 0;
//     let sum2 = 0;

//           for (let i = n; i <= m; i++) {
             
//               if (i % 2 === 0) {
//                 sum1 =sum1 + i;
//             } else {
//                 sum2 =sum2 + i;
//             }
//           }
        
//           console.log("Сумма четных чисел:", sum1);
//           console.log("Сумма нечетных чисел:", sum2);
//         }
//                  nomers(5, 8);
//                  nomers (10, 24)


// ● Напишите функцию, которая принимает в качестве аргументов
// массив строк, а возвращает первый самый длинный элемент
// массива. Если входной массив пуст, функция возвращает null.
// Если есть несколько одинаковых по длине элементов -
// функция возвращает первый из этих элементов.

// arr = ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        
function weeks (arr) {
    if (arr.length === 0) {
        return null;
    } 
    let weeks = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > weeks.length) {
            weeks = arr[i];
        }
    }

    return weeks;
}

  
const stringsArr = ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(weeks(stringsArr))