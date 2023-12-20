
// Методи Масивів

// 1) Перебор елементів масиву, спосіб 1

// let arr = [
//   "BMC",
//   "Giant",
//   "Bianchi"
// ]
// console.log (arr)

// for (let i=0; i < arr.length; i++) {
//   alert (arr[i]);
// }



// 2)  Перебор елементів масиву, спосіб 2

// let bicycles = [
//   "BMC",
//   "Giant",
//   "Bianchi",
//   "Specialized"
// ]

// for (let bicycle of bicycles) {
//   alert(bicycle);
// }

// 3) Метод перетворення елементів массиву на рядки

// let trees = [
//   "verba",
//   "smereka",
//   "300",
//   "dyb",
//   "kalyna"
// ]

// let unitedtrees = trees.join()
// console.log(unitedtrees);


// 4) Метод зміни порядку елементів в масиві (тут не створюється новий массив,
// а перезаписуеться той, що був даний нам на вході!)

// let trees = [
//   "verba",
//   "smereka",
//   "300",
//   "dyb",
//   "kalyna"
// ]

// let reversedtrees = trees.reverse() .//тут створилась нова змінна, якій присвоївся массив,
// що був дан на вході, і вона буде приймати його значення і після проведення операцій зі змінами
// за допомогою методів массиву.

// console.log(reversedtrees); //переверне всі значення
// console.log(trees.reverse()); //поверне значення назад
// console.log(reversedtrees);

// 5) Метод сортування массиву,  array.sort   якщо метод вікликається без аргументів- сортування рядків відбудеться в алфавітному порядку, якісь невизначені елементи перенесуться на кінець массиву...
// для сортування в будь якому іншому порядку, відмінному від алфавітного методу сорт можна передати функцію порівняння, як аргумент (компаратор)

// let trees = [
//   "verba",
//   77,
//   "smereka",
//   300,
//   "dyb",
//   12,
//   "kalyna"
// ]

// console.log(trees.sort());

// 6) Array.slice повертає фрагмент, або підмасив зазначеного массиву. В метод передеють аргументи,
// які визначають початковий індекс в заданому масиві і кінцевий індекс (але еелмент, який відповідае другому аргументу в методі не передається в новостворенний фрагмент)

// let trees = [
//   "verba",
//   77,
//   "smereka",
//   300,
//   "dyb",
//   12,
//   "kalyna"
// ]

// let slisedtrees = trees.slice (1, 4);
// console.log(trees);
// console.log(slisedtrees);

// let slicedtreeswithminusarguments = trees.slice (-3, -1)  //тут -3 це буде перший елемент з кінця, тобто покаже "dyb", -1 означає показати до -1 елементу з кінця, але не включати його, тобто покаже ще -2 елемент "12", а от "kalyna" вже не покаже.

// console.log(slicedtreeswithminusarguments);

// 7) Array.splice універсальний метод, що виконує вставку, або видалення елементів массиву
// Важливим є те, що метод .splice (на вдміну від .slice та .concat) Змінює вхідний массив, а не створює новий

// Array.splice(index[,deleteCount, elem1, ...elemN])
// .splice починає з позиції index, видаляє deletCount елементів і вставляє elem1, ...slicedtreeswithminusarguments, elemN на їхне місце. Повертає масив із видалених елементів.


// let trees = [
//   "verba",
//   77,
//   "smereka",
//   300,
//   "dyb",
//   12,
//   "kalyna"
// ]

// let generatedArray = trees.splice(-1, 0, "byk", "grab");

// console.log(trees);
// console.log(generatedArray);

// Я вважаю, що розібрався, переходимо до функцій.!



// Об'єкти

// const user = {
//   name: "John"
//   };
//   user.name = "Pete";
//   //
//   alert(user.name);
//   // Pete

// Демонстрація посилальних даних в об'єкті.
// let date1 = {
//   year: 2018,
//   month: "May",
//   day: 23
// };
// let date2 = date1;
// date2.day = 31;
// console.log(date1);




// Клонування обекту в новий обєкт (в новому можна буд змінювати данні без впливу на оригінальний.перший обєкт)

// let cat = {
//   name: "Kysia",
//   age: "5 years"
// };
// let cloneCat = {};
// for (let znacenniaKlychiv in cat) {
//   cloneCat[znacenniaKlychiv] = cat[znacenniaKlychiv];
// }
// console.log(cloneCat);

// cloneCat.name = "Basia";
// cloneCat.age = 7;
// console.log(cloneCat);
// console.log(cat);



// Перебираемо властивості глобального обекта у браузері (обєкт window)!!!

// for (let globalProperties in window);
// console.log (globalProperties, window[globalProperties]);

// let arr = ["Kysia", "Kulibabenko"];
// let [firstname, surnaeme] = arr;
// console.log(firstname);


// callback функції

// Класичний запис:
// function ask(question, yes, no) {
//   if(confirm(question)) yes()
//   else no();
// }

// function showOk () {
//   alert("Ви погодились");
// }

// function showNo() {
//   alert("Ви скасували виконання!");
// }

// ask ("Ви погоджуєтесь?", showOk, showNo);

// Запис через стрілкову функцію

// ask(question, yes, no) => {if(confirm(question)) yes() else no()};  не працює


// function showOk () {
//   alert("Ви погодились");
// }

// function showNo() {
//   alert("Ви скасували виконання!");
// }

// ask ("Ви погоджуєтесь?", showOk, showNo);

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// // function expression  ------ в попередній приклад передаємо функції-аргументи безпосередньо у викликану функцію

// ask("Ви погоджуєтесь?", function() { alert("Ви погодились."); }, function() { alert("Ви відмінили виконання")});


// стрілкові функції---------

// 1) Класичний запис
// let functionPractice = function (a, b, c, SumFunc) {
//   if (a === Number && b === Number && c === Number) SumFunc; else (alert("введіть цифри, а не якусь хуйню!"));
// }

// let SumAllArg = function (){
//   let Sum = (a + b + c);
//   return (Sum);
// }

// functionPractice (prompt("Введіть перше число"), prompt("Введіть друге число"), prompt("Введіть друге число"), SumAllArg);


// 2)Стрілкова функція:
// let age = prompt("Cкільки тобі років?", 18);
// let welcome = (age < 18)? () => alert("Привіт!"): () => alert("Доброго дня, Шкура!");
// welcome();



// З лекції
// const items =[
//   {name: "Chocolate",category: "Sweets", stock:20},
//   {name: "Apple",category: "Fruits", stock:0},
//   {name: "Pineapple",category: "Fruits", stock:5},
//   {name: "Lamp",category: "Electronic", stock:10},
//   {name: "Orange",category: "Fruits", stock:0}
// ]

// const result=(items.filter(items=>items.category === "Fruits")).reduce((accumulator, currentValue) =>accumulator + currentValue.stock, 0);

// console.log(result);
// може буде в тесті )


// // ще з лекції
// const items =[
//   {name: "Chocolate",category: "Sweets", stock:20, total:50},
//   {name: "Apple",category: "Fruits", stock:0,total:5},
//   {name: "Pineapple",category: "Fruits", stock:5,total:10},
//   {name: "Lamp",category: "Electronic", stock:10,total:30},
//   {name: "Orange",category: "Fruits", stock:0,total:20}
// ]
// let result=items.reduce((sum,i)=>sum+i.stock,0);

// console.log(result)

// // -------------------------------


// // Ще де-що роздивитись!!!!
// const items =[
//   {name: "Chocolate",category: "Sweets", stock:20, total:50},
//   {name: "Apple",category: "Fruits", stock:0,total:5},
//   {name: "Pineapple",category: "Fruits", stock:5,total:10},
//   {name: "Lamp",category: "Electronic", stock:10,total:30},
//   {name: "Orange",category: "Fruits", stock:0,total:20}
// ]

// let result = (map,value)=>{
//   if (map[value]==null){
//       map[value]=1;
//   }
//   else {
//       ++map[value];
//   }
//   return map;
//   }
// console.log(items.map(char=>char.category).reduce(result, {}));
// // _______________________________________________


// // Ще прикольцик

// let text1=new String("Petro");
// console.log(text1);
// console.log(typeof(text1));
// // --------


// class User{
//   constructor(age,name){
//       this.name=name;
//       this.age= age;
//       this.eye_color="red";
//   }

// }

// class Child extends User{
//   constructor(age,name){
//       super(age,name);
//       this.happy=150;
//   }
//   getVoice(){
//       return "la-la-la"
//   }
// }
// let user=new User(123, "Y");

// let child=new Child(12, "X");

// console.log(child)
// console.log(user)


// ------------------------------
// Фільтрація по властивості об'єкту---
// var heroes = [
//   {name: “Batman”, franchise: “DC”},
//   {name: “Ironman”, franchise: “Marvel”},
//   {name: “Thor”, franchise: “Marvel”},
//   {name: “Superman”, franchise: “DC”}
// ];

// var marvelHeroes =  heroes.filter(function(hero) {
//   return hero.franchise == “Marvel”;
// });

// [ {name: “Ironman”, franchise: “Marvel”}, {name: “Thor”, franchise: “Marvel”} ]    - результат пошуку по властивості франчайз Марвел.



// array method .filter    testing

// let massiv = [
//   1,
//   -3,
//   -2,
//   8,
//   5
// ]

// let someConditionnewArr = massiv.filter (function (value, position) {
//   return value > 0 && position > 2
// });

// alert(someConditionnewArr);


// array method .map     testing
// let massivZnachen = [
//   'Kysia',
//   'Kysia serayja shkyra',
//   'Rus Ni Peace Da',
//   'Glory to Ukraine',
//   21
// ];

// let testMaping = massivZnachen.map(function(znacennia, indexZnachen) {
//   if indexZnachen > 1
//   return znacennia.length;
// });


// const name = 'Tirion';
// console.log(name.toLowerCase().toUpperCase());



// -------------------------метод контексту .bind---------------------------
// function Calc(){
//     console.log( "Hello", this)
// }
// let user={
//     name:"Petro",
//     calc_smth: Calc,
//     calc_smth_more:Calc.bind(this),
//     logInfo: function(){
//         console.log(`Name is ${this.name}`)
//     }

// }

// let user2={
//     name:"vasya",
//     age:35,
//     logInfo: function(){
//         console.log(`1111 ${this.name}`)
//     }
// }
// user.logInfo.bind(user2)()
// -----------------------------------------------------------------------------------------------


// -------------------------метод контексту .call------------------------------------------------
// let user={
//     name:"Petro",
//     calc_smth: Calc,
//     calc_smth_more:Calc.bind(this),
//     logInfo: function(job,sex){
//         console.log(`Name is ${this.name}`)
//         console.log(`Job is ${job}`)
//         console.log(`Sex is ${sex}`)
//     }

// }

// let user2={
//     name:"vasya",
//     age:35,
//     logInfo: function(){
//         console.log(`1111 ${this.name}`)
//     }
// }
// user.logInfo.call(user2,"Developer", "F")
// ------------------------------------------------------------------------------------------------

// -------------------------метод конетексту .apply------------------------------------------------



// -------------------------метод конетексту створюємо нову пропертю для глобального обекта Массив------------------------------------------------
// let array=[12,234,54]
// let array2=[1,2,3,4,5]

// Array.prototype.mult=function(n) {
//     console.log(this.map(function(i){
//         return i*n
//     }))


// }
// array.mult(2)

// ------------------------------------------------------------------------------------------------

// -------------------------додатково глянути самостійно-----------------------------------------------

// class User{

//     static type="Admin";
//     constructor(age,name){
//         this.name=name;
//         this.age= age;
//         this.eye_color="red";
//     }
//     getVoice(){
//         return "bla-bla-bla";
//     }

// }

// class Child extends User{
//     constructor(age,name){
//         super(age,name);
//         this.happy=150;
//     }
//     getVoice(){
//         super.getVoice();
//         return "la-la-la";
//     }
// }
// let user=new User(123, "Y");

// let child=new Child(12, "X");

// console.log(child.getVoice())
// console.log(user)

// ------------------------------------------------------------------------------------------------

// створення обєкта через new-----------------------------------------
// const person=Object.create(
//   {},
//   {
//       name:{
//           value:"Kate"
//           writeable:true;
//           enumerable: true;
//       },
//       eye_color:{
//           value:"red"
//       },
//       year:{
//           value: 1023
//       },
//       age: {
//         get(){
//           return new Date().getFullYear - this.year;
//         }
//       }
//   }
// )
// console.log(person);
// person.name = Vasiliy;
// for (let key in person);
// console.log(person[key]);



// тут не можна обєкту, наприклад змінити імя person.name=Vasyl   не поміняеться, АЛЕ МОЖЕМО ПРОПИСАТИ ПЕВНІЙ ВЛАСТИВОСТІ writeable:true;
// ЩОБ ДАТИ ДОСТУП ЗЗОВНІ ДЛЯ ЗАМІНИ. Для того, щоб спрацював перебор фором прописуємо властивість enumerable: true;
// І звернутись до нього фором теж не можу для перебору властивостей
// -------------------------------------------------------------------------------------

// Навішування стилей на n-кнопок за допомогою ДОМ-------------------------------------
{/* <form>
      <input type="button" value="Click me!" class="button">
      <input type="button" value="Click me!" class="button">
      <input type="button" value="Click me!" class="button">
      <input type="button" value="Click me!" class="button">
      <input type="button" value="Click me!" class="button">
   </form>

   <script>
      const button = document.querySelectorAll('.button');

      function showMessage() {
         alert('Hi')
      };

      button.forEach(buttonItem => {
         buttonItem.addEventListener('click', showMessage)
      })

    </script> */}
    // -------------------------------------------------------------------------------------------------

// Достукатись до кнопок чекрез форму------------------------------------------------------------
    // <form class="form">
    //     <input type="button" value="Click me!" class="button">
    //     <input type="button" value="Click me!" class="button">
    //     <input type="button" value="Click me!" class="button">
    //     <input type="button" value="Click me!" class="button">
    //     <input type="button" value="Click me!" class="button">
    
    // </form>
    // <script>
    //         const form=document.querySelector('.form')
    
    //         function showMessage(){
    //             alert("HI");
    //         }
    //         form.addEventListener('click', function(event) {
    //             if (event.target.closest('.button')){
    //                 showMessage();
    //             }
    //         })
{/* 

// ------------------------------------------------------------------------------------------------- */}\




// Погода  API---------------------------------

url='https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kharkiv&appid=d78c0ab9f68a695a2837a4ba0c754bb0'

fetch(url).then((response)=>{
    return response.json();
})
.then((data)=> {
    console.log(data)
})


// -----------------------------------------------


// ---------------------Проміс з погодою, що віддає JSON у консоль-------------------------

const update = ms =>{
    return new Promise(resolve =>{
        setTimeout(() => resolve(),ms)
    })
} 
url='https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lviv&appid=d78c0ab9f68a695a2837a4ba0c754bb0'

function getData(){
    console.log("Preparing data...")
    return update(2000)
    .then(()=>{
        return fetch(url)
    })
    .then((response)=> response.json()) 
}

getData().then(data=>{
    console.log(data)
})
// ---------------------------------------------------------------------------


// --------------------------POST--------------------------------------------------

url='https://jsonplaceholder.typicode.com/comments'
let user={
    name:"Kate",
    age:123
}

let response=fetch(url, {
    method:'POST',
    headers: {
        'Content-Type': ' application/json; charset=utf-8'
    },
    body: JSON.stringify(user)
}).then((response)=>{
    if(response.ok){
        return response.json()
    }
}).catch(()=>{
    console.log("Error")
})


// ------------------------------------------------------------------------------