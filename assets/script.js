let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");

let input_birthday = document.getElementById("input-birthday");

input_birthday.onfocus = function(){
    input_birthday.attributes["type"].value = "date";
}

input_birthday.onblur = function(){
    input_birthday.attributes["type"].value = "text";
}
option0.onclick = function() {
    option1.className = "";
    option2.className = "";
    option3.className = "";
}

option1.onclick = function() {
    option1.className = "active-nav";
    option2.className = "";
    option3.className = "";
}

option2.onclick = function() {
    option1.className = "";
    option2.className = "active-nav";
    option3.className = "";
}

option3.onclick = function() {
    option1.className = "";
    option2.className = "";
    option3.className = "active-nav";
}

