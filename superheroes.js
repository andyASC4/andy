function superhero(realName, ability, gender, archEnemy) {
    this.realName = realName,
    this.ability = ability,
    this.gender = gender,
    this.archEnemy = archEnemy

    this.newAbility = function(ability2) {
        this.ability = ability2;
    }
}

var batman = new superhero("Bruce Wayne", "dat money", "male", "Joker");
var staticShock = new superhero("Virgil");

console.log(batman.ability);
batman.newAbility("drop kick");
console.log(batman.ability);