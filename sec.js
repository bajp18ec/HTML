
function myfunc()
{
    var n = document.getElementById("name").value
    var col = document.getElementById("college").value
    var pla = document.getElementById("place").value

    var rows='';
    rows += "<tr><td>"+n+"</td><td>"+col+"</td><td>"+pla+"</td></tr>";
    
    // document.getElementById("bodydata").innerHTML = rows;

    var tbody = document.querySelector("#list tbody");
    var tr = document.createElement("tr");
    
    tr.innerHTML = rows;
    tbody.appendChild(rows);

    const inputs = document.querySelectorAll('#name,#college,#place');

    inputs.forEach(input =>{
        input.value = ' ';
    })

    // console.log("Button clicked")
}
