import Addtodo from "./components/add-todo.js";
import Form from "./components/form.js";;

export default class Model {
    constructor() {
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));
        this.currentId = 0;
        this.form = new Form();

        if (!this.todos || this.todos.length < 1) {
            this.todos = [{
                title: "Learn JS",
                description: "Watch Javascript tutorials on Youtube",
                id: this.currentId++,
                completed: false,
            }];
        }

        else {
            this.currentId = this.todos[this.todos.length - 1].id + 1;
        }

        this.addTodoForm = new Addtodo();
        this.addTodoForm.onclick((title, description) => this.createRow(title, description));
        this.form.onclick(this.todos);
    }

    render() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
        this.todos.forEach(todo => this.view.createRow(todo));
        //this.save();
    }

    editTodo(id) {
        const index = this.getIndex(id);
        return this.todos[index];
    }

    setView(view) {
        this.view = view;
    }

    getIndex(id) {
        return this.todos.findIndex(t => t.id == id);
    }

    saveModal(todo) {
        console.log("fkdnfgdk")
        const index = this.getIndex(todo.id);
        this.todos[index].title = todo.title;
        this.todos[index].description = todo.description;
        this.todos[index].completed = todo.completed;
        this.save();
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    toggleCompleted(id) {
        const index = this.getIndex(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        this.save();
    }

    removeTodo(id) {
        const index = this.getIndex(id);
        this.todos.splice(index, 1);
        document.getElementById(id).remove();
        this.save();
    }

    createRow(title, description) {
        const todo = this.addTodo(title, description);
        this.view.createRow(todo);
    }

    addTodo(title, description) {
        const todo = {
            title,
            description,
            id: this.currentId++,
            completed: false,
        }

        this.todos.push(todo);
        this.save();
        return todo;
    }
}