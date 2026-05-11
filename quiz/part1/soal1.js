let name = ``;
let role = ``;


if (name === ``) {
    console.log(`You must had a name!`);
}   else if (role === ``) {
    console.log(`You must pick a role!`);
}   else if (role === `Knight`) {
    console.log(`Halo Knight ${name} , kamu dapat menyerang!`);
}   else if (role === `Healer`) {
    console.log(`Halo Healer ${name} , Bantu temanku!`);
}   else if (role === `Wizard`) {
    console.log(`Halo Wizard ${name} , Ciptakan keajaiban!`);
}   
else {
    console.log(`Kamu belum milih role ya, yaudah kamu jadi bot aja deh!`);
}