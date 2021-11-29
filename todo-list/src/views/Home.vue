<template>
    <todo-list
        :todos="todos"
        @addTodo="onAddTodo"
        @saveTodo="onSaveTodo"
        @deleteTodo="onDeleteTodo"
        @editTodo="onEditTodo"
        @completeTodo="onCompleteTodo"
        @reactivateToDo="onReactivateToDo"
    ></todo-list>
</template>
<script>
import TodoList from '../components/ToDoList';
import ToDoApi from '../api/ToDoApi';
import ToDo from '../models/ToDo';
export default {
    name: 'Home',

    components: {
        TodoList,
    },
    data() {
        return {
            todos: [],
        };
    },
    methods: {
        // get todo by id, change propert and save
        changeToDoProperty(todoId, property, value) {
            const todo = this.todos.find((t) => t.id === todoId);
            if (todo) {
                todo[property] = value;
            }
            ToDoApi.saveToDoList(this.todos);
        },
        // put todo in edit mode and save
        onEditTodo(todoId) {
            this.changeToDoProperty(todoId, 'editMode', true);
        },
        // put todo in regular mode and save
        onSaveTodo(todoId) {
            this.changeToDoProperty(todoId, 'editMode', false);
        },
        // delete todo and save
        onDeleteTodo(todoId) {
            const todoIndex = this.todos.findIndex((t) => {
                return t.id === todoId;
            });
            if (todoIndex !== -1) {
                this.todos.splice(todoIndex, 1);
            }
            ToDoApi.saveToDoList(this.todos);
        },
        //add new todo
        onAddTodo() {
            this.todos.unshift(new ToDo());
        },
        // put todo in completed mode and save
        onCompleteTodo(todoId) {
            this.changeToDoProperty(todoId, 'completed', true);
        },
        // reactivate todo and save
        onReactivateToDo(todoId) {
            this.changeToDoProperty(todoId, 'completed', false);
        },
    },
    // get all todos from local storage
    mounted() {
        this.todos = ToDoApi.getToDoList();
    },
};
</script>
