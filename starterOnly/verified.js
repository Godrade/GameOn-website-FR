//Création de la class
class Form {
    $error;

    constructor() {
        this.form = document.querySelector('form');

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
        // Boucle de reset error
        //PRENOM
        if (this.first.length < 2) {
            this.$error = true;
            document.getElementById('first').style.borderColor = "red";
            document.getElementById('first-error').textContent = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
        }

        //NOM
        if (this.last.length < 2) {
            this.$error = true;
            document.getElementById('last').style.borderColor = "red";
            document.getElementById('last-error').textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        }

        //Email
        if (!this.email.match(this.emailRegex)) {
            this.$error = true;
            document.getElementById('email').style.borderColor = "red";
            document.getElementById('email-error').textContent = "Veuillez entrer une email valide.";
        }

        //Anniv
        if (!this.birthdate.match(this.birthdateRegex)) {
            this.$error = true;
            document.getElementById('birthdate').style.borderColor = "red";
            document.getElementById('birthdate-error').textContent = "Veuillez entrer une date de naissance.";
        }

        //Concour
        if (!this.quantity) {
            this.$error = true;
            document.getElementById('quantity').style.borderColor = "red";
            document.getElementById('quantity-error').textContent = "Veuillez entrer une quantitée.";
        }

        //Location
        if (!this.location) {
            this.$error = true;
            document.getElementById('location-error').textContent = "Veuillez selectionez une ville.";
        }

        //CGU
        if (!this.cgu) {
            this.$error = true;
            document.getElementById('cgu').style.borderColor = "red";
            document.getElementById('cgu-error').textContent = "Vous devez accepter les CGU.";
        }

        //El verifation
        if (!this.$error){
            document.getElementById('form').style.display = "none";
            document.getElementById('success').textContent = "Merci d'avoir soumis vos informations d'inscription";
        }
    }
}