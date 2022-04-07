let person = prompt("Please enter your name", "lasya");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! whats up";
} 