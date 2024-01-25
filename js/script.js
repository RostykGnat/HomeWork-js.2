// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// if (1 > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (0 > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (-3 > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
// const variables = "test";
// if (variables === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (variables === "qwerty") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (variables === "true") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
// const a = 1;
// const b = 10;
// const c = 13;
// if (a > 10) {
//   console.log(a - 5);
// } else {
//   console.log(a + 5);
// }
// if (b > 10) {
//   console.log(b - 5);
// } else {
//   console.log(b + 5);
// }
// if (c > 10) {
//   console.log(c - 5);
// } else {
//   console.log(c + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const c = prompt("Номер місяця");
// const m = Number(c);
// switch (m) {
//   case 1:
//     alert("Січень");
//     break;
//   case 2:
//     alert("Лютий");
//     break;
//   case 3:
//     alert("Березень");
//     break;
//   case 4:
//     alert("Квітень");
//     break;
//   case 5:
//     alert("Травень");
//     break;
//   case 6:
//     alert("Червень");
//     break;
//   case 7:
//     alert("Липень");
//     break;
//   case 8:
//     alert("Серпень");
//     break;
//   case 9:
//     alert("Вересень");
//     break;
//   case 10:
//     alert("Жовтень");
//     break;
//   case 11:
//     alert("Листопад");
//     break;
//   case 12:
//     alert("Грудень");
//     break;
//   default:
//     alert("Не вірно введене значення!");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let a = prompt("Введіть тризначне число");
// let numeric = Number(a);

// const first = Math.floor(numeric / 100);
// console.log(first);
// const second = Math.floor((numeric / 100 - first) * 10);
// console.log(second);
// const third = Math.round((numeric / 10 - Math.floor(numeric / 10)) * 10);
// console.log(third);
// const sum = first + second + third;
// console.log(sum);
