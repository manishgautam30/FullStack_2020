var x = document.getElementById("result");
var dbt = document.getElementById("decbtn");
var dbt = document.getElementById("decbtn");
var ibt = document.getElementById("incbtn");

function inc() {
    x.value = 1 + parseInt(x.value);
    dbt.style.color = "black";
}

function dec() {
    if (parseInt(x.value) <= 1) {
        dbt.style.color = "gray";
        result.value = "0";

    } else {
        x.value = parseInt(x.value) - 1;
    }
}