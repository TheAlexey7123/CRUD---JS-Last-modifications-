export default class Alert {

    constructor(id) {
        this.alert = document.getElementById(id);
    }

    hide() {
        this.alert.classList.add('d-none');

    }

    show() {
        this.alert.classList.remove('d-none');
        this.alert.innerText = "Title and description are required";
    }
}