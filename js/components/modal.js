import Alert from "./alert.js";
import Model from "../model.js";

export default class Modal {

    constructor() {
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.save = document.getElementById('modal-btn');
        this.checkbox = document.getElementById('modal-completed');
        this.alert = new Alert('modal-alert');
        this.todo = null;
    }

    setData(todo) {
        this.todo = todo;
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.checkbox.checked = todo.completed;
        //({ title: this.title.value, description: this.description.value, checkbox: this.checkbox.checked }) = todo;
    }

    saveModal(todo) {
        const element = document.getElementById(todo.id);
        element.children[0].innerText = this.title.value;
        element.children[1].innerText = this.description.value;
        element.children[2].children[0].checked = this.checkbox.checked;

        const data = {
            title: element.children[0].innerText,
            description: element.children[1].innerText,
            completed: element.children[2].children[0].checked,
            id: todo.id
        }

        return data;
    }

    onclick(callback) {
        this.save.addEventListener('click', () => {
            if (!this.title.value || !this.description.value) {
                this.alert.show();
                return;
            }

            this.alert.hide();
            $('#modal').modal('toggle');

            callback(this.todo);

        })
    }
}