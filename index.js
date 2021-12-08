const openback = () =>{
    var backs = document.getElementById("backlight");
    var backs2 = document.getElementById("backs");
    if(backs.style.backgroundColor == "red" && backs2.style.backgroundColor == "red"){
       backs.style.backgroundColor = "rgb(148, 71, 71)";
       backs2.style.backgroundColor = "rgb(0, 58, 22)";
    }else{
        backs.style.backgroundColor = "red";
        backs2.style.backgroundColor = "red";
    }
}
const openfront = () =>{
    var fronts = document.getElementById("frontlight");
    var frontfull = document.getElementById("frontfull");
    if(fronts.style.backgroundColor == "white" && frontfull.style.backgroundColor == "white"){
       fronts.style.backgroundColor = "gainsboro";
       frontfull.style.backgroundColor = "rgb(0, 58, 22)";
    }else{
        fronts.style.backgroundColor = "white";
        frontfull.style.backgroundColor = "white";
    }
}
const openindicator = () =>{
    document.getElementById("indicator").style.backgroundColor = "orangered";
    setTimeout("openindicator()", 2000);
}
window.onload = openindicator;