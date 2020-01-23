var myVar;

//Duration of the loading screen
function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

//after the duration show the normal webpage
function showPage() {
    document.getElementById("lds-ring").style.display = "none";
    document.getElementById("hide-content").style.display = "block";
}