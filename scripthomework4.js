// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

/*const studentInfo = {
  name: "name",
  subject: "subject",
  logInfo: function (grades, missedLessons) {
    console.group(`${this.name} info:`);
    console.log(`Name is : ${this.name}`);
    console.log(`Subject is : ${this.subject}`);
    console.log(`Grades are : ${grades}`);
    console.log(`Number of missed lessons is : ${missedLessons}`);
    console.groupEnd();
  },
};

const Ivan = {
  name: "Ivan",
  subject: "Arts",
};
const Olga = {
  name: "Olga",
  subject: "History",
};
const Irene = {
  name: "Irene",
  subject: "Physics",
};

studentInfo.logInfo.call(Ivan, "80", "4");
studentInfo.logInfo.call(Olga, "85", "2");
studentInfo.logInfo.call(Irene, "92", "3");

studentInfo.logInfo.apply(Ivan, ["85", "2"]);
studentInfo.logInfo.apply(Olga, ["80", "1"]);
studentInfo.logInfo.apply(Irene, ["90", "3"]);

studentInfo.logInfo.bind(Ivan, "70", "3")();
studentInfo.logInfo.bind(Olga, "80", "4")();
studentInfo.logInfo.bind(Irene, "90", "2")();*/

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення
//що це таке при натисканні на кнопку css -
//має видати коротке визначення що це таке

/*const definitions = {
  showDefinition() {
    alert(this.definition);
    console.log(this.definition);
  },
};

const html = {
  definition:
    "HTML is the standard markup language used to create the structure and content of web pages.",
};
const css = {
  definition:
    "CSS is a style sheet language used to describe the presentation of HTML elements on a webpage.",
};

document
  .querySelector("#html")
  .addEventListener("click", definitions.showDefinition.bind(html));
document
  .querySelector("#css")
  .addEventListener("click", definitions.showDefinition.bind(css));*/

//  --3--
// Написати функцію магазин, яка отримує назву товару,
//ціну за кг і кількість товару, функція має повертати назву
//товару і вартість
// перевірити на варіантах: 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

/*const fruitName = prompt("Enter fruit name (bananas, cherries, oranges):");
const weight = parseFloat(prompt("Enter weight in kg:"));

const banana = {
  name: "bananas",
  price: 30,
};

const cherry = {
  name: "cherries",
  price: 58,
};

const orange = {
  name: "oranges",
  price: 89,
};

const shopInfo = {
  getPrice() {
    let price = 0;
    switch (fruitName.toLowerCase()) {
      case "bananas":
        price = banana.price;
        break;
      case "cherries":
        price = cherry.price;
        break;
      case "oranges":
        price = orange.price;
        break;
      default:
        alert("Invalid fruit name!");
        return;
    }
    const totalPrice = price * weight;
    alert(`Total price for ${weight} kg of ${fruitName}: ${totalPrice} UAH`);
  },
};

shopInfo.getPrice();*/
