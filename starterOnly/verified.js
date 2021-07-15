//Create class
class Form {
    $error;

    constructor() {
        this.form = document.querySelector('form');

        //Get value input
        this.firstName = this.form.elements.firstName.value.trim();
        this.lastName = this.form.elements.lastName.value.trim();
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
        if (this.firstName.length < 2) {
            this.$error = true;
            this.addError('firstName', 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.');
        } else {
            this.removeError('firstName');
        }

        //Check lastname
        if (this.lastName.length < 2) {
            this.$error = true;
            this.addError('lastName', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        } else {
            this.removeError('lastName');
        }

        //Check email
        if (!this.email.match(this.emailRegex)) {
            this.$error = true;
            this.addError('email', 'Veuillez entrer un e-mail valide.');
        } else {
            this.removeError('email');
        }

        //Check birthdate
        if (!this.birthdate.match(this.birthdateRegex)) {
            this.$error = true;
            this.addError('birthdate', 'Veuillez entrer une date de naissance.');
        } else {
            this.removeError('birthdate');
        }

        //Check quantity
        if (!this.quantity) {
            this.$error = true;
            this.addError('quantity', 'Veuillez entrer une quantité.');
        } else {
            this.removeError('quantity');
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

    //Add error message
    addError(id, message, border = true){
        if (border){
            document.getElementById(id).style.borderColor = "red";
        }
        document.getElementById(`${id}-error`).textContent = message;
    }

    //Remove error message
    removeError(id, border = true){
        if (border){
            document.getElementById(id).style.borderColor = "white";
        }
        document.getElementById(`${id}-error`).textContent = "";
    }
}