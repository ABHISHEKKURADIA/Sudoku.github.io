function checkEnd() {
  let arr = document.getElementsByTagName("td");

  if (rowCheck() && colCheck() && gCheck()) {
    alert("Finally you made it to the end");
  } else {
    alert("Review the number");
    return false;
  }

  return false;
}

function rowCheck() {
  let arr = [];
  let failed = false;
  for (let i = 1; i <= 9; i++) {
    let cols = document.getElementsByClassName(`r${i}`);
    for (let j = 0; j <= 8; j++) {
      let row = cols[j];
      if (arr.includes(row.innerHTML)) {
        row.style.color = "red";
        failed = true;
      } else {
        if (row.getAttribute("ContentEditable")) {
          row.style.color = "black";
        }
        arr.push(row.innerHTML);
      }
    }
    arr = [];
  }
  return failed ? false : true;
}
function colCheck() {
  let arr = [];
  let failed = false;
  for (let i = 1; i <= 9; i++) {
    let cols = document.getElementsByClassName(`c${i}`);
    for (let j = 0; j <= 8; j++) {
      let row = cols[j];
      if (arr.includes(row.innerHTML)) {
        row.style.color = "red";
        failed = true;
      } else {
        if (row.getAttribute("ContentEditable")) {
          row.style.color = "black";
        }
        arr.push(row.innerHTML);
      }
    }
    arr = [];
  }
  return failed ? false : true;
}
function gCheck() {
  let arr = [];
  let failed = false;
  for (let i = 1; i <= 9; i++) {
    let cols = document.getElementsByClassName(`g${i}`);
    for (let j = 0; j <= 8; j++) {
      let row = cols[j];
      if (arr.includes(row.innerHTML)) {
        row.style.color = "red";
        failed = true;
      } else {
        if (row.getAttribute("ContentEditable")) {
          row.style.color = "black";
        }
        arr.push(row.innerHTML);
      }
    }
    arr = [];
  }
  return failed ? false : true;
}
