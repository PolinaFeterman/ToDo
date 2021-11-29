export default class {
    static getToDoList() {
        const toDoList = window.localStorage.getItem('toDoList') || '[]';
        return JSON.parse(toDoList);
    }
    static saveToDoList(toDoList) {
        window.localStorage.setItem('toDoList', JSON.stringify(toDoList));
    }
}
