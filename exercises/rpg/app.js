// const rs = require("readline-sync");


// rs.question("whos your daddy, and what does he do? ");
// rs.question("who does number two work for? ");
// rs.question("")


// const readline = required(`readline-sync`);

// const options = ["Go to store", "Go fight"];

// let health = 100;

// function Monster(health, strength, name){
// this.health = health;
// this.strength - strength;
// this.name = name;
// this.flavorText = function(){
//         return `
//         it's a hit!       
//         `;
//     }
// }

// const newMonster = new Monster(50, 20, "Jack");

// while(health > 0){
//     const i = readline.keyinSelect(options, "What is your name?: ");
//     if(options[i] === "Go to store"){
//      goToStore();
//     } else {
//         console.trace()
//         goFIght();
//     }
     
// }


const readlineSync = require("readline-sync");



const health = (min, max) => {
    // console.log("health", Math.floor(Math.random() * (max - min) + min));

    return Math.floor(Math.random() * (max - min) + min);
};

const AgentStatus = function (name, health, inventory) {
    this.name = name;
    this.health = health || 100;
    this.inventory = inventory || [];
    this.printStatus = () => {
        console.log(`Secrect Agent:, ${this.name}, health:, ${this.health}`);
        console.log(this.inventory);
        for (let i = 0; i < this.inventory; i++) {
            console.log(inventory[i]);
        }
    }
};

const Enemy = function (leader, poisonDoses) {
    this.leader = leader;
    this.poisonDoses = poisonDoses;
    this.printEnemy = () => {
        console.log(`You have came upon cult leader ${this.leader}, and he has ${this.poisonDoses} doses. `);
    }
};

const enemyTarget = () => {
    let enemyLeader = ["Charles Manson", "David Koresh", "Jim Jones"];
    let randomEnemy = enemyLeader[health(0, enemyLeader.length)];
    let randomDoses = 0;
    if (randomEnemy === "Charles Manson") {
        randomDoses = health(70,90);
    } else if (randomEnemy === "David Koresh") {
        randomDoses = health(60,80);
    } else {
        randomDoses = health(50,80 );
    }
         let constructedEnemy = new Enemy(randomEnemy, randomDoses);
    return constructedEnemy;
};

console.log(`You are a Secret Agent for a classified government organization. 
Your Mission: Help us fight against the cult leaders of america. 
We need you to pose undercover as a member of the cult, and take out the leader in a battle of wits. `);


const name = readlineSync.question("What is your secret agent name? ");
const agent =  new AgentStatus(name);
console.clear();
const poison = readlineSync.question("Which poison do you choose: kool-aid or lsd? ");
console.clear();
if (poison === "kool-aid") {
   
    console.log("Kool-aid. Get your leader to drink from your cup. Remember to not take a drink!");
    
} else {
    
    console.log("LSD. Use this powerful drug to alter the mind of your enemy, and take him out!");
};

console.log(`Secret Agent ${name}, you are now ready for your mission.`)

while (agent.health > 0) {
    let input = readlineSync.question("Enter 'w' to walk: ");
    console.clear();
    if (input == "w") {
        let chance = health(0,100)
    
        if (chance >= 50) {
            let target = enemyTarget();
            target.printEnemy();
        
            while (agent.health > 0 && target.poisonDoses > 0) {
                input = readlineSync.question("Do you want to run or battle? ");
                if (input == "battle") {
                    let poison = health(50,80);
                    target.poisonDoses -= poison;
                    console.clear();
                    console.log(`You poisoned ${target.leader} for ${poison} doses. `);
                
                    if (target.poisonDoses < 0) {
                        console.clear();
                        console.log(`You killed the leader ${target.leader}. `);
                        let revive = health(30,60);
                        agent.health += revive;
                        agent.inventory.push("healing juice");
                        console.log(`You now have ${agent.health} percent health. `);
                    }
                    // console.log(`Your leader has ${target.poisonDoses} percent health. `);

                    let poison2 = health(50,60);
                    agent.health -= poison2;
                    console.clear();
                    console.log(`Your leader, ${target.leader}, poisoned you with ${poison2} doses. `);
                    console.log(`Agent, you have ${agent.health} percent health left. `);

                } else {
                    let poisonChance = health(0,10);
                    if (poisonChance < 5) {
                        let loseHealth = health(50,80);
                        // console.log(loseHealth, agent);
                        agent.health -= loseHealth;
                        console.clear();
                        console.log(`You have escaped from ${target.leader}, but you now have ${agent.health} percent health. `);
                    
                    } else {
                        console.clear();
                        console.log("You did not escape, poison your leader.");
                        let loseHealth = health(50,70);
                        // console.log(loseHealth);
                        agent.health -= loseHealth;
                        console.clear();
                        console.log(`Your leader has poisoned you. You lost ${loseHealth} percent health. `);
                        console.log(`You have ${agent.health} percent health. `);
                    }
                        if (agent.health < 0) {
                            console.clear();
                            console.log(`Your leader ${target.leader} has poisoned you to death.`);
                            console.log(`Secret Agent ${name}, you have died. MISSION FAILED.`);
                        
                        }
                }
            }    
        } else {
            console.clear();
            console.log("No cult leaders near by. Continue to walk.");

        }
            // if (agent.health < 0) {
            // console.log(`Your leader ${this.leader} has poisoned you to death.`);
            // console.log(`Secret Agent ${name}, you have died. MISSION FAILED.`);


    } else {
    console.clear();
    console.log("Here are your stats")
        agent.printStatus();
        }
        //  } else if (input == "print") {
        //     agent.printStatus();
         
    
};