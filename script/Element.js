var body = document.getElementsByTagName("body")[0];

//Create Elements
var div = document.createElement("div");
var table = document.createElement("table");
var validator = document.createElement("button");
var br = document.createElement("br");
var cbr = br.cloneNode(true);
var sbr = document.createElement("button");


//Define Attribute

validator.innerHTML = "Validate";
validator.className = "btn btn-primary";
validator.setAttribute("onclick", "return checkEnd()");
sbr.innerHTML = "Solve";
sbr.className = "btn btn-success";
sbr.style.marginLeft = "40px";
sbr.setAttribute("onClick", "return solver()");

//Define Class
div.className = "container";

//Append Elements

let count = 1;
let g = 0;
let sg = 0;
let ng = 0;

for (let i = 1; i <= 9; i++) {
  var tr = document.createElement("tr");
  for (let j = 1; j <= 9; j++) {
    var td = document.createElement("td");
    td.setAttribute("onkeypress", "validate(this)");
    td.contentEditable = "true";
    td.className = `r${i} c${j} cell g${g + 1}`;
    if (count % 3 == 0) {
      g++;
      if (g % 3 == 0) {
        g = 0;
        sg++;
        if (sg % 3 == 0) {
          ng += 3;
        }
        g += ng;
      }
    }
    count++;
    td.addEventListener("keypress", function (e) {
      let key = parseInt(e.key);
      if (key < 1 || key > 9 || isNaN(key)) {
        e.preventDefault();
      }
    });
    tr.appendChild(td);
  }
  table.append(tr);
}

//td.className="cell";

div.append(table);
let x = 0;
while (x <= 3) {
  div.appendChild(document.createElement("br"));
  x++;
}
div.appendChild(validator);
div.appendChild(sbr);
body.appendChild(div);

var elements = document.querySelectorAll('[contenteditable="true"]');

elements = document.querySelectorAll("td");

var currentIndex = 0;

document.onkeydown = function (e) {
  switch (e.key) {
    case "ArrowLeft":
      currentIndex = currentIndex == 0 ? elements.length - 1 : --currentIndex;
      elements[currentIndex].focus();
      break;
    case "ArrowRight":
      currentIndex = currentIndex + 1 == elements.length ? 0 : ++currentIndex;
      elements[currentIndex].focus();
      break;
  }
};
