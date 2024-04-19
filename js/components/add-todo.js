import Alert from "./alert.js";

export default class Addtodo {

    constructor() {
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        this.add = document.getElementById('add');
        this.alert = new Alert('alert');
        this.table = document.querySelector('tbody');
    }

    onclick(callback) {

        this.add.addEventListener('click', () => {
            if (!this.title.value || !this.description.value) {
                this.alert.show();
            }

            else {
                this.alert.hide();
                callback(this.title.value, this.description.value);
            }
        });
    }
}