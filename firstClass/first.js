console.log("Working");
console.log(document);




document.body.firstElementChild.innerHTML = "New Users";
// document.body.children[1];
// document.body.children[1].lastElementChild;
document.body.lastElementChild;
document.body.lastElementChild.lastElementChild;




alert(navigator.userAgent);

let name = "Cement";
var age = 12;
name = "Dee";
let firstName = "Adeola";
let lastName = "Adekunle";
console.log(firstName + " " + lastName);
alert(firstName + " " + lastName);
console.log(name);
console.log(age);
console.log(firstName.repeat(3));
let very_big_number = 343457364956357264928653486592523476567;
let another_number =
  BigInt(
    58347543287832314598753478564197867859578346055184365108946089610754701385870365034783475346081765872
  );
console.log(typeof firstName);
console.log(typeof lastName);

console.log(`${firstName} ${lastName} is ${age} years old`);
let user = {
  id: "Sku-1234",
  surname: "Adekunle",
  firstName: "Adeola",
  age: "20",
  phoneNumber: "08103078881",
};
console.log(user.id);
console.log(user["id"]);
user["age"] = 10;
console.log(Object.keys);

let client = {
  id: "",
  lName: "",
  fName: "",
  phoneNumber: "",
};
let userId = prompt("What's your id");
client.id = userId;
let fName = prompt("What is your firstName");
client.fName = fName;
let lName = prompt("What is your last name");
client.lName = lName;
let contact = prompt("What is your phone number");
client.phoneNumber = contact;

console.log(client);

numbers = [13, 25, 31, 43, 59, 62, 76, 84, 59];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
for (let item of object) {
  console.log(item);
}
for (let item in object) {
  console.log(item);
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
let sub = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};
let add = (firstNumber, secondNumber) => firstNumber + secondNumber;
function allTogether(add1, add2) {
  return add1(4, 5) + add2(2, 3);
}
console.log(sum(1, 2));
console.log(sub(2, 3));
console.log(add(2, 3));
console.log(allTogether(sum, add));
console.log(
  allTogether(sum, (firstNumber, secondNumber) => firstNumber + secondNumber)
);
