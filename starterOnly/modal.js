function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
//const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//Close modal
const modalClose = document.querySelectorAll(".close");
modalClose.forEach((btn) => btn.addEventListener("click", CloseModal));

function CloseModal() {
    modalbg.style.display = "none";
}

//Verified elements
function validate(){
    document.addEventListener('submit', function (e) {
        e.preventDefault();

        let $form = new Form();
        $form.verifiedElements();

    })
}

console.clear();

