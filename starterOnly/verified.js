//Création de la class
class Form {
    $error;

    constructor() {
        this.form = document.querySelector('form');

        //Get value input
        this.first = this.form.elements.first.value.trim();
        this.last = this.form.elements.last.value.trim();
        this.email = this.form.elements.email.value;
        this.birthdate = this.form.elements.birthdate.value;
        this.quantity = Number(this.form.elements.quantity.value);
        this.location = this.form.elements.location.value;
        this.cgu = this.form.elements.cgu.checked;

        //Regex
        this.emailRegex = new RegExp(/^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/);
        this.birthdateRegex = new RegExp(/^\d{4}\-\d{1,2}\-\d{1,2}$/);
    }

    verifiedElements() {
        this.$error = false;
        //Check firstname
        if (this.first.length < 2) {
            this.$error = true;
            this.addError('first', 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.');
        } else {
            this.removeError('first');
        }

        //Check lastname
        if (this.last.length < 2) {
            this.$error = true;
            document.getElementById('last').style.borderColor = "red";
            document.getElementById('last-error').textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        } else {
            document.getElementById('last').style.borderColor = "white";
            document.getElementById('last-error').textContent = "";
        }

        //Check email
        if (!this.email.match(this.emailRegex)) {
            this.$error = true;
            document.getElementById('email').style.borderColor = "red";
            document.getElementById('email-error').textContent = "Veuillez entrer un e-mail valide.";
        } else {
            document.getElementById('email').style.borderColor = "white";
            document.getElementById('email-error').textContent = "";
        }

        //Check birthdate
        if (!this.birthdate.match(this.birthdateRegex)) {
            this.$error = true;
            document.getElementById('birthdate').style.borderColor = "red";
            document.getElementById('birthdate-error').textContent = "Veuillez entrer une date de naissance.";
        } else {
            document.getElementById('birthdate').style.borderColor = "white";
            document.getElementById('birthdate-error').textContent = "";
        }

        //Check quantity
        if (!this.quantity) {
            this.$error = true;
            document.getElementById('quantity').style.borderColor = "red";
            document.getElementById('quantity-error').textContent = "Veuillez entrer une quantité.";
        } else {
            document.getElementById('quantity').style.borderColor = "white";
            document.getElementById('quantity-error').textContent = "";
        }

        //Check location
        if (!this.location) {
            this.$error = true;
            this.addError('location', 'Veuillez sélectionner une ville.', false)
        } else {
            this.removeError('location', false);
        }

        //Check CGU
        if (!this.cgu) {
            this.$error = true;
            document.getElementById('cgu-error').textContent = "Vous devez accepter les CGU.";
        } else {
            document.getElementById('cgu-error').textContent = "";
        }

        //Check if error is false
        if (!this.$error){
            document.getElementById('form').style.display = "none";
            document.getElementById('success').style.display = "flex";
        }
    }

    addError(name, message, border = true){
        if (border){
            document.getElementById(name).style.borderColor = "red";
        }
        document.getElementById(`${name}-error`).textContent = message;
    }

    removeError(name, border = true){
        if (border){
            document.getElementById(name).style.borderColor = "white";
        }
        document.getElementById(`${name}-error`).textContent = "";
    }
}