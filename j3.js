

let points = 10;
let type = points >100 ? 'gold' : 'Silver';// ternary operator
console.log(type)

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

// conditional sataments
// oif hour is between 6am and 12pm :GooD morning
// if it is betwwn 12pm and 6pm :Good afternoon
// otherwisw good evening!

let hour = 13;
if (hour>=6 && hour<12)
{
    console.log("Good morning");
}
else if(hour>=12 && hour<17)
{
    console.log("Good afternoon");
}
else{
    console.log("Good evening")
}

// switch case
let role="guest";

switch(role)
{
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    default:
        console.log("Unkown role")
}


