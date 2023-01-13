alert("Hello world");

// how to validate each of them
let userName = prompt("Enter a userName");
while (userName.length > 10) {
  userName = prompt("userName can not be more than 10 \n Enter userName again");
}

let password = prompt("Enter password");
while (password.length < 6) {
  password = prompt(
    "password can not be less than 6 characters\nEnter your password again "
  );
}

let confirmPassword = prompt("confirm your password");
while (password !== confirmPassword) {
  confirmPassword = prompt("password do not match\nEnter your password again");
}

alert("You have successfully signed up.");
console.log("Username: ", userName, "\nPassword: ", password);

// creation of user object
// user is the variableName
// userName(is the key): userName(is the value entered)
let user = {
  userName: userName,
  password: password,
  confirmPassword: confirmPassword,
};

//how to print out
console.log(user);

// how to create what is going to be in the span in html. by writing all this in  javascript we have selected the span in html
let userNameSpan = (document.getElementById("userNameSpan").innerHTML =
  user.userName);
let passwordSpan = (document.getElementById("passwordSpan").innerHTML =
  user.password);
let confirmpasswordSpan = (document.getElementById(
  "confirmpasswordSpan"
).innerHTML = user.confirmPassword);
