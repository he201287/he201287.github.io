var data={};
function defaultValue() {
    document.querySelector("a[href*=\"index\"]").focus();
    var logo = document.querySelector('#logo');
    logo.dataset.url = "formLogo.html";
    //logo.setAttribute('onclick','newAjaxJSON(this)');
    //logo.title = "Changement du logo";
}
function onMouseOver(id) {
    document.getElementById(id).style.display="block";
}
function onMouseOut(id) {
    document.getElementById(id).style.display="none";
}

function getElem(id){
    return document.getElementById(id);
}

function setElem(id, v){
    // place la valeur v dans l'élément id
    document.getElementById(id).innerHTML = v;
}