// function mOver(obj) {
//   obj.innerHTML = "Thank You";
// }

// function mOut(obj) {
//   obj.innerHTML = "Mouse Over Me";
// }

document.getElementById("my_form").onsubmit = myFunction;

// document.getElementById("bid").onmouseover = mOver(
//   document.getElementById("bid")
// );
// document.getElementById("bid").onmouseout = mOut(
//   document.getElementById("bid")
// );

// function redact(editingText, arrayOfUnwanted) {
//   for (let word of arrayOfUnwanted) {
//     if (editingText.includes(word))
//       editingText = editingText.replaceAll(word, "*".repeat(word.length));
//   }
//   return editingText;

// }

function redact(editingText, arrayOfUnwanted) {
  for (let word of arrayOfUnwanted) {
    if (editingText.includes(word))
      editingText = editingText.replaceAll(
        word,
        word.charAt(0).toString() +
          "*".repeat(word.length - 2) +
          word.charAt(word.length - 1)
      );
  }
  return editingText;
}

function myFunction(e) {
  e.preventDefault();
  let textIWantToEdit = document.getElementById("comment").value;
  let wordsIWantToRedact = document.getElementById("wordsToRedact").value;
  let badWords = wordsIWantToRedact.match(/\w/g);
  let textReply = redact(textIWantToEdit, badWords);
  document.getElementById("result").textContent = textReply;
  document.getElementById("result").style.color = "red";
  document.getElementById("result").style.fontSize = "50px";
  document.getElementById("date").innerHTML = "Date : " + Date();
}
