var gallade = {
    "NAME" : "Gallade",
    "TYPE" : "Psychic and Fighting",
    "HP" : 190,
    "DEF" : 105,
    "ATK" : 235,
    "LEGEND" : false
};

var gengar = {
    "NAME" : "Gengar",
    "TYPE" : "Ghost and Posion",
    "HP" : 175,
    "DEF" : 100,
    "ATK" : 250,
    "LEGEND" : false
};

var armaldo = {
    "NAME" : "Armaldo",
    "TYPE" : "Rock and Bug",
    "HP" : 220,
    "DEF" : 190,
    "ATK" : 100,
    "LEGEND" : false
};

var rayquaza = {
    "NAME" : "Rayquaza",
    "TYPE" : "Dragon and Flying",
    "HP" : 200,
    "DEF" : 170,
    "ATK" : 275,
    "LEGEND" : true
};

var kyogre = {
    "NAME" : "Kyogre",
    "TYPE" : "Water",
    "HP" : 250,
    "DEF" : 175,
    "ATK" : 250,
    "LEGEND" : true
};

var steelix = {
    "NAME" : "Steelix",
    "TYPE" : "Steel and Ground",
    "HP" : 190,
    "DEF" : 280,
    "ATK" : 175,
    "LEGEND" : false
};

var roster = [gallade,gengar,armaldo,rayquaza,kyogre,steelix];
console.log(roster[0]);

function pokeRoster(NAME,TYPE,HP,DEF,ATK,LEGEND) {
    this.NAME = NAME,
    this.TYPE = TYPE,
    this.HP = HP,
    this.DEF = DEF,
    this.ATK = ATK,
    this.LEGEND = LEGEND
    this.attacked = function(decrease){
        this.HP -= decrease;
    }
}

var gallade = new pokeRoster("Gallade","Psychic and Fighting",190,105,235,false);
console.log(gallade.HP);
gallade.attacked(10);
console.log(gallade.HP);
