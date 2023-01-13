document.getElementById("my_form").onsubmit = myFunction;

function redact(editingText, arrayOfUnwanted) {
  for (let word of arrayOfUnwanted) {
    if (editingText.includes(word))
      editingText = editingText.replaceAll(word, "*".repeat(word.length));
  }
  return editingText;
}

function myFunction(e) {
  e.preventDefault();
  let textIWantToEdit = document.getElementById("comment").value;
  let wordsIWantToRedact = document.getElementById("wordsToRedact").value;
  let badWords = wordsIWantToRedact.split(" ");
  let textReply = redact(textIWantToEdit, badWords);
  document.getElementById("result").textContent = textReply;
}
