let name = `Deco`;
let role = `Marksman`;

if (name === ``) {
    console.log(`You must had a name!`);
}   else if (role === ``) {
    console.log(`${name}, Pick Your Role First!`);
}   else if (role === `Knight`) {
    console.log(`Hello Knight ${name}, Help us with your power!`);
}   else if (role === `Wizard`) {
    console.log(`Hello wizard ${name}, Help us with your magic!`);
}   else if (role === `Healer`) {
    console.log(`Hello angel ${name}, Help us to heal our wounded troops`);
}   else if (role === `Marksman`) {
    console.log(`Hello Marksman ${name}, Help us to attack the enemy from afar!`);
}
else {
    console.log(`Seems like you havent pick any role, its ok you can be a bot then`);
}