for(let i =0;i<5;i++)
{
    console.log("Hellow world",i)
}

// while loop
let i =0;
while(i<10)
{
    console.log("HEllo while",i);
    i++;
}

// do while loop
let j=0;

do{
    if(j%2 !== 0) console.log(i);
    j++;
}while(j<=5);

const person = 
{
    name:'Mosh',
    age:30
};

for(let key in person)
{
    console.log(key,person[key]);
}

const colors = ['red','green','blue'];

for(let index in colors)
{
    console.log(index)
}

for (let color of colors)
{
    console.log(color);
}