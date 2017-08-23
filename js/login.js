var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal1 = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

// handle different event
function signUp() {
    document.getElementById('id01').style.display='none';
    document.getElementById('id02').style.display='block';
}

function signUpCancel() {
    document.getElementById('id01').style.display='block';
    document.getElementById('id02').style.display='none';
}

// check if the user enter informations meet the required format
function validateForm() {
    var b = document.forms["signUpForm"]["birth"].value;
    var e = document.forms["signUpForm"]["email"].value;
    var checkb = true;
    if(b.length != 10 || b.charAt(2) != "-" || b.charAt(5) != "-") {
        checkb = false;
    }
    if (checkb == false) {
        alert("Wrong Type of Birthday Input");
        return false;
    }
    if(e.includes("@")==false) {
        alert("Wrong Type of Email Input");
        return false;
    }
}
