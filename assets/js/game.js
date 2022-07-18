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

var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

return value;
};

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is still alive
    while(playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP"){
        // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
                playerMoney = Math.max(0,playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }      
        }        

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health reamaining"
        );
        
        // check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died! ");

            // award player money for winning
            playerMoney = playerMoney + 20;
            // leave while() loop since enemy is dead
            break;
        }   else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ")
        }

        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);
            console.log (
                enemyName + " attacked " + playerName +  ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }   else {
            window.alert(playerName + " still has " + playerHealth + " has left");
        }
    } //end of while loop 
}; //end of fight function 
// if no (false), ask question again by running fight again
        // else {
        // fight();
        // }
    // } else {
    // window.alert("You need to chose a valid option.Try again!");
    // }
    // }
// };


var startGame = function() {
    // reset player status
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        // if player is still alive, keep fighting
        if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            enemyHealth = randomNumber(40, 60);
  
      // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
  
      // reset enemyHealth before starting new fight
      
  
      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

        // if we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
            // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round");

            // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
    
    // if player isn't alive, stop the game
        else {
        window.alert('You have lost your robot in battle! Game Over!');
        break;
        }
};
  
    // play again
    endGame();
};
  
  // function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
  
  // if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + '."');
    }
    else {
        window.alert("You've lost your robot in battle");
    }
      
    var playAgainConfirm = window.confirm("Would you like to play again?");
  
    if (playAgainConfirm) {
      // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? PLease enter one: 'REFILL', 'UPGRADE',  or 'LEAVE' to make a choice."
    );

    // use switch to carr out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars");
        
        // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "UPGRADE": // new case
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars");

            // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "LEAVE": //new case
        case  "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again");

            // call shop() again to force player to pick a valid option

            shop();
            break;
    }
};

startGame();
  // start the game
  // startGame();
  