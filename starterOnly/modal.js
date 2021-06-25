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
const form = document.getElementById("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    form.reset();
    document.getElementById('success').style.display = "none";
    document.body.classList.add('open-modal');
    form.style.display = "block";
    modalbg.style.display = "block";
}

//Close modal
const modalClose = document.querySelectorAll(".close");
const btnModalClose = document.getElementById("close-modal");
modalClose.forEach((btn) => btn.addEventListener("click", CloseModal));
btnModalClose.addEventListener("click", CloseModal);

function CloseModal() {
    document.body.classList.remove('open-modal');
    modalbg.style.display = "none";
}

//Verified elements
function validate() {
    let $form = new Form();
    $form.verifiedElements();
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    validate();
});


