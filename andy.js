function rand(num) {
    var randomDec = Math.random() * num;
    var randomInt = Math.floor(randomDec);
    console.log(randomInt);
    return randomInt;
}

rand(50);