//Création de la class
class Form {
    $number;

    constructor() {
        this.form = document.querySelector('form');

        this.first = this.form.elements.first.value.trim();
        this.last = this.form.elements.last.value.trim();
        this.email = this.form.elements.email.value;
        this.birthdate = this.form.elements.birthdate.value;
        this.quantity = parseInt(this.form.elements.quantity.value);
        this.location = this.form.elements.location.value;
        this.cgu = this.form.elements.cgu.checked;
        this.newsletter = this.form.elements.newsletter.checked;

        //Regex
        this.emailRegex = new RegExp(/^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/);
        this.birthdateRegex = new RegExp(/^\d{4}\-\d{1,2}\-\d{1,2}$/);
    }

    verifiedElements() {
        this.$number = 0;
        console.log("------------")
        //PRENOM
        if (this.first.length > 2) {
            console.log("PRENOM OK");
            this.$number++;
        } else {
            console.warn("PRENOM NO OK");
        }

        //NOM
        if (this.last.length > 2) {
            console.log("NOM OK");
            this.$number++;
        } else {
            console.warn("NOM NO OK");
        }

        //Email
        if (this.email.match(this.emailRegex)) {
            console.log("EMAIL OK");
            this.$number++;
        } else {
            console.warn("EMAIL NO OK");
        }

        //Anniv
        console.log(this.birthdate)
        if (this.birthdate.match(this.birthdateRegex)) {
            console.log("ANNIV OK");
            this.$number++;
        } else {
            console.warn("ANNIV NO OK");
        }

        //Concour
        if (this.quantity) {
            console.log("CONCOUR OK");
            this.$number++;
        } else {
            console.warn("CONCOUR NO OK");
        }

        //Location
        if (this.location) {
            console.log("LOCATION OK");
            this.$number++;
        } else {
            console.warn("LOCATION NO OK");
        }

        //CGU
        if (this.cgu) {
            console.log("CGU OK");
            this.$number++;
        } else {
            console.warn("CGU NO OK");
        }
        console.log("------------")

        //El verifation
        if (this.$number >= 7){
            console.log("TOUT TOUT BIEN");
        } else {
            this.$number = 0;
            console.log("TOUT TOUT PA BIEN");
        }
    }
}