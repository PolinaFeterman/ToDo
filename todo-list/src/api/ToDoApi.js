export default class {
    static getToDoList() {
        const toDoList = window.localStorage.getItem('toDoList') || '[]';
        return JSON.parse(toDoList);
        // const data = [
        //     {
        //         title: 'Todo A11',
        //         completed: false,
        //         editMode: false,
        //         id: 1,
        //     },
        //     {
        //         title: 'Todo B',
        //         completed: true,
        //         editMode: false,
        //         id: 2,
        //     },
        //     {
        //         title: 'Todo C',
        //         completed: false,
        //         editMode: false,
        //         id: 3,
        //     },
        //     {
        //         title: 'Todo D',
        //         completed: false,
        //         editMode: false,
        //         id: 4,
        //     },
        //     {
        //         title: 'Todo E',
        //         completed: false,
        //         editMode: false,
        //         id: 5,
        //     },
        //     {
        //         title: 'Todo F',
        //         completed: true,
        //         editMode: false,
        //         id: 6,
        //     },
        //     {
        //         title: 'Todo G',
        //         completed: true,
        //         editMode: false,
        //         id: 7,
        //     },
        //     {
        //         title: 'Todo H',
        //         completed: false,
        //         editMode: false,
        //         id: 8,
        //     },
        // ];
        // return data;
    }
    static saveToDoList(toDoList) {
        window.localStorage.setItem('toDoList', JSON.stringify(toDoList));
    }
}
