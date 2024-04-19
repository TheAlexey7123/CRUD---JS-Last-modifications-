export default class Form {

    constructor() {
        this.filters = document.getElementById('filters');
        this.search = document.getElementById('search');
    }

    onclick(todos) {
        this.search.addEventListener('click', (e) => {

            e.preventDefault();

            let filter = this.filters.type.value;
            let word = this.filters.children[7].value;

            if (!filter || filter.length < 1) {
                filter = 'all';
            }

            todos.forEach(t => {

                let shouldHide = false;

                if (!t.title.includes(word) || !t.description.includes(word)) {
                    shouldHide = true;
                }

                let isCompleted = filter == "completed";

                if (filter != "all" && (isCompleted !== t.completed)) {
                    shouldHide = true;
                }

                if (shouldHide) {
                    document.getElementById(t.id).classList.add('d-none');
                }

                else {
                    document.getElementById(t.id).classList.remove('d-none');
                }

            });

        });
    }
}