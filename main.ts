import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    } 
    fueldecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
    fuelincrease(){
        this.fuel = 100
    }
}
class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    } 
    fueldecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt([
    {
        name: "Username",
        type: "input",
        message: "Please enter your name",
    }
])

let opponent = await inquirer.prompt([
    {
        name: "selectOpponent",
        type: "list",
        message: "Select your Opponent",
        choices:['Spiderman','ironman','aquaman','hulk','thanos'].map(choice => ({ name: choice, value: choice }))
    }
])

let P1 = new Player(player.Username);
let O1 = new Opponent(opponent.selectOpponent);

do{
    //Spiderman
    if(opponent.selectOpponent == 'Spiderman'){
    let ask = await inquirer.prompt([
        {
          name: "OPP",
          type: "list",
          message: "Please Select your mode",
          choices: ["Attack", "Drink Potion", "Run for life"].map(choice => ({ name: choice, value: choice }))
        }
      ]);
    
      if (ask.OPP == "Attack") {
        let num = Math.floor(Math.random() * 2)
        if (num > 0) {
          P1.fueldecrease()
          console.log(`${P1.name} fuel is ${P1.fuel}`);
          console.log(`${O1.name} fuel is ${O1.fuel}`);
          if (P1.fuel <= 0) {
            console.log("you lose better luck next time");
            process.exit()
          }
    
        } if (num <= 0) {
          O1.fueldecrease()
          console.log(`${P1.name} fuel is ${P1.fuel}`);
          console.log(`${O1.name} fuel is ${O1.fuel}`);
          if (O1.fuel <= 0) {
            console.log("you win");
            process.exit()
          }
        }
    
      }
      if (ask.OPP == "Drink Potion") {
        P1.fuelincrease()
        console.log(`Health recovery ${P1.fuel}`);
      }
      if (ask.OPP == "Run for life") {
        console.log("you lose better luck next time");
        process.exit()
      }
    }
//ironman

//aquaman

//hulk
 
//thanos
}
while(true)
