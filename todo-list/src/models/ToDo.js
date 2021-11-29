export default class ToDo {
    constructor(todo) {
        this.id = (todo && todo.id) || this.uid();
        this.completed = (todo && todo.completed) || false;
        this.editMode = true;
        this.title = '';
        this.text = '';
    }
    uid() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
            (
                c ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
            ).toString(16)
        );
    }
}
