var emptyString = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

while (emptyString.length < 1) {
  emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
} 
console.log(emptyString);