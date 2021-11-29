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
    // data function provides data to the template
    data() {
        return {
            todos: [],
        };
    },
    methods: {
        changeToDoEditMode(todoId, mode) {
            const todo = this.todos.find((t) => t.id === todoId);
            if (todo) {
                todo.editMode = mode;
            }
        },
        changeToDoStatus(todoId, status) {
            const todo = this.todos.find((t) => t.id === todoId);
            if (todo) {
                todo.completed = status;
            }
            ToDoApi.saveToDoList(this.todos);
        },
        onEditTodo(todoId) {
            this.changeToDoEditMode(todoId, true);
        },
        onSaveTodo(todoId) {
            this.changeToDoEditMode(todoId, false);
            ToDoApi.saveToDoList(this.todos);
        },
        onDeleteTodo(todoId) {
            const todoIndex = this.todos.findIndex((t) => {
                return t.id === todoId;
            });
            if (todoIndex !== -1) {
                this.todos.splice(todoIndex, 1);
            }
            ToDoApi.saveToDoList(this.todos);
        },
        onAddTodo() {
            this.todos.unshift(new ToDo());
        },
        onCompleteTodo(todoId) {
            this.changeToDoStatus(todoId, true);
            ToDoApi.saveToDoList(this.todos);
        },
        onReactivateToDo(todoId) {
            this.changeToDoStatus(todoId, false);

            ToDoApi.saveToDoList(this.todos);
        },
    },
    mounted() {
        this.todos = ToDoApi.getToDoList();
    },
};
</script>
