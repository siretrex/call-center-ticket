

function generateCode() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
  const startLetter = letters[Math.floor(Math.random() * letters.length)];
  const endLetter = letters[Math.floor(Math.random() * letters.length)];

  const number = Math.floor(100000 + Math.random() * 900000);

  return startLetter + number + endLetter;
}

console.log(generateCode());