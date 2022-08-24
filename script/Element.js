var body=document.getElementsByTagName("body")[0];

//Create Elements
var div=document.createElement("div");
var table=document.createElement("table");
var validator=document.createElement("button");
//Define Attribute
validator.innerHTML="Validate";
validator.setAttribute("onclick","return confirmEnd()");

//Define Class
div.className="container"


//Append Elements

for(let i=1;i<=9;i++)
{
    var tr=document.createElement("tr");
    for(let j=1;j<=9;j++)
    {
        var td=document.createElement("td");
        td.setAttribute("onkeypress","validate(this)");
        td.contentEditable="true";
        td.className=`r${i} c${j} cell`;
        tr.appendChild(td);
    }    
    table.append(tr);    
}

//td.className="cell";


div.append(table);
div.insertAdjacentElement("beforeend",validator);
body.appendChild(div);

