var prompt = require('prompt-sync')();

var money = 1000;
var items = [];

while (money>0){
    console.log("You have $"+ money +" left. Sword = $500, Food = $100");
    var answer = promptSync("Which item do you want to buy? ");
    if(answer == "sword"){
        money = money - 500;
        items.push("Sword");
        console.log("You brought a Sword!");
    }else if(answer == "Food"){
        money = money - 100;
        items.push ("Food");
        console.log("You brought Food!");
    }
}