var x = 5
console.log(x);

var clicks =0;

document.getElementById("btn").addEventListener("click",function()
{ clicks +=1;
    var val = document.getElementById("data").value
    document.getElementById("demo").innerHTML=val+" "+clicks;
    console.log(val)
})

