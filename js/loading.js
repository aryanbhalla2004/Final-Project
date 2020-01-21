var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("lds-ring").style.display = "none";
    document.getElementById("hide-content").style.display = "block";
}