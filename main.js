/*1*/
var userObj = {
firstName: 'Valeriia',
lastName: 'Saltanovska',
age: 25
};
console.log(userObj);

/*2*/
var userObj = {
  firstName: 'Valeriia',
  lastName: 'Saltanovska',
  age: 25,
  fullName: function() { return userObj.firstName + ' ' + userObj.lastName;}
  };
console.log(userObj);
console.log(userObj.fullName());

/*3*/

function defUpperStr(str) {
  return (str || 'Default text').toUpperCase();
}
console.log(defUpperStr('My text')); 
console.log(defUpperStr());

/*4*/
function evenFn(n) {
  let arr = [];
  for (let x= 1; x <= n; x++) if (x % 2 === 0) arr.push(x); /*if x % 2 == 0 проверяет, является ли число четным.
  x % 2 равно 1 когда число нечетное, а 0 – четное.*/
  return arr;
}
console.log(evenFn(10)); 
console.log(evenFn(15));  
console.log(evenFn(20)); 

/*5*/

function weekFn(n) {
  let str = '';
  switch (n) {
    case 1: str = 'Понедельник'; break;
    case 2: str = 'Вторник'; break;
    case 3: str = 'Среда'; break;
    case 4: str = 'Четверг'; break;
    case 5: str = 'Пятница'; break;
    case 6: str = 'Суббота'; break;
    case 7:  str = 'Воскресенье'; break;
    default: str = null;
  }
      return str;
  }
console.log(weekFn(5)); 
console.log(weekFn(4)); 
console.log(weekFn(3)); 
console.log(weekFn(8)); 
console.log(weekFn(9)); 
console.log(weekFn(10));   
  
/*6*/
function ageClassification(n) {
    return n < 0 ? str = null:
    n <= 24 ? str = 'детский возраст' :
    n <= 44 ? str = 'молодой возраст' :
    n <= 65 ? str = 'средний возраст' :
    n <= 75 ? str = 'пожилой возраст' :
    n <= 90 ? str ='старческий возраст' :
    n <= 122 ? str ='долгожители' :
     str = null;
  } 
  console.log(ageClassification(-5));
  console.log(ageClassification(0));
  console.log(ageClassification(20));
  console.log(ageClassification(43.99))
  console.log(ageClassification(63));
  console.log(ageClassification(73));
  console.log(ageClassification(122.05)); 
                    
/*7*/
function oddFn(n) {
let arr = [];
let x = 0;
while (x++ < n) if (x % 2 == 1) arr.push(x);
return arr;
}
console.log(oddFn(10)); 
console.log(oddFn(15)); 
console.log(oddFn(20)); 

/*8*/
function mainFunc(a, b, func){
  if (func && typeof func === 'function') return func(a, b);
  return false;
}
console.log(mainFunc(2, 5));

function cbRandom(a, b, callback) {
  return Math.ceil(Math.random() * (a - b) + b);
}
console.log(mainFunc(2,5,cbRandom));


function cbPow(a, b) {
return Math.pow(a, b);
}
console.log(mainFunc(2,5,cbPow));

function cbAdd(a, b) {
return a + b;
} 
console.log(mainFunc(2,5,cbAdd));


     





