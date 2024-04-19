import Modal from "./components/modal.js";

export default class View {
    constructor() {
        this.model = null;

        this.modal = new Modal();
        this.modal.onclick((todo) => this.saveModal(todo));
    }

    setModel(model) {
        this.model = model;
    }

    saveModal(todo) {
        const data = this.modal.saveModal(todo);
        this.model.saveModal(data);
    }

    removeTodo(id) {
        this.model.removeTodo(id);
    }

    toggleCompleted(id) {
        this.model.toggleCompleted(id);
    }

    editTodo(id) {
        const todo = this.model.editTodo(id);
        this.modal.setData(todo);
    }

    createRow(todo) {
        const tr = document.createElement('tr');
        tr.setAttribute('id', todo.id);
        tr.innerHTML = `
            <td>
                ${todo.title}
            </td>
            <td>
                ${todo.description}
            </td>

            <td class="text-center">
                
            </td>

            <td class="text-right">

            </td>
        </tr>
        `;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;

        const pencil = document.createElement('button');
        pencil.classList.add('btn', 'btn-primary', 'mb-1');
        pencil.innerHTML = `<i class="fa fa-pencil"></i>`;
        pencil.setAttribute('data-toggle', 'modal');
        pencil.setAttribute('data-target', '#modal');

        const remove = document.createElement('button');
        remove.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        remove.innerHTML = `<i class="fa fa-trash"></i>`;

        tr.querySelectorAll('td')[2].append(checkbox);
        tr.querySelectorAll('td')[3].append(pencil, remove);
        table.appendChild(tr);

        checkbox.addEventListener('click', () => {
            this.toggleCompleted(todo.id);
        });

        pencil.addEventListener('click', () => {
            this.editTodo(todo.id);
        });

        remove.addEventListener('click', () => {
            this.removeTodo(todo.id);
        })
    }
}