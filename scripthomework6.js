/*Створіть функцію-конструктор Calculator, 
який створює об’єкти з трьома методами:
read() запитує два значення за допомогою 
prompt і запам’ятовує їх у властивостях об’єкта.
sum() повертає суму цих властивостей.
mul() повертає результат множення даних властивостей.*/

// Перший варіант

/*function Calculator() {
  const readNumber1 = parseInt(prompt("Enter first numbers"));
  const readNumber2 = parseInt(prompt("Enter second number"));

  const calculation = {
    readNumber1: readNumber1,
    readNumber2: readNumber2,
    sum: readNumber1 + readNumber2,
    mul: readNumber1 * readNumber2,
  };

  console.log(calculation.readNumber1, calculation.readNumber2);
  console.log(calculation.sum);
  console.log(calculation.mul);
  alert(`${readNumber1} + ${readNumber2} = ${calculation.sum}`);
  alert(`${readNumber1} * ${readNumber2} = ${calculation.mul}`);
}

Calculator();*/

// Другий варіант

/*function Calculator() {
  const readNumber1 = parseInt(prompt("Enter first numbers"));
  const readNumber2 = parseInt(prompt("Enter second number"));

  let sum = readNumber1 + readNumber2;
  let mul = readNumber1 * readNumber2;

  console.log(readNumber1, readNumber2);
  console.log(sum);
  console.log(mul);
  alert(`${readNumber1} + ${readNumber2} = ${sum}`);
  alert(`${readNumber1} * ${readNumber2} = ${mul}`);
}

Calculator();*/
