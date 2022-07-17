// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    // console.log(enemyNames[0]);
    // console.log(enemyNames[1]);
    // console.log(enemyNames[2]);
    // console.log(enemyNames.length);
    // for(var i=0; i < 3; i ++){
        // console.log("apple", i);
    // }
    // for(var i = 0; i < enemyNames.length; i ++) {
        // console.log(enemyNames[i]);
        // console.log(i);
        // console.log(enemyNames[i] + " is at " + i + " index");
    // }
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight == "fight" || promptFight === "FIGHT"){
        enemyHealth = enemyHealth - playerAttack;
        console.log (
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health reamaining"
        );

        if (enemyHealth <=0) {
            window.alert(enemyName + " has died! ");
        }   else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ")
        }

        playerHealth = (playerHealth-enemyAttack);
            console.log (
            enemyName + " attacked " + playerName +  ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }   else {
            window.alert(playerName + " still has " + playerHealth + " has left");
        }
    // if player chooses to skip
    }   else if (promptFight === "skip" || promptFight === "SKIP"){
    // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }   

// if no (false), ask question again by running fight again
        else {
        fight();
        }
    } else {
    window.alert("You need to chose a valid option.Try again!");
    }
};

    // if (playerHealth > 0) {
        // console.log("Your player is still alive!")
    // }

for(var i = 0; i < enemyNames.length; i ++) {
        fight(enemyNames[i]);
}

// run fight to start the game
// fight();
