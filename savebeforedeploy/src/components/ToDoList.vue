<template>
    <v-data-iterator
        :items="filteredTodos"
        :items-per-page.sync="ipp"
        :page.sync="page"
        hide-default-footer
        class="d-flex flex-column mh-100 overflow-hidden"
    >
        <template v-slot:header>
            <v-toolbar dark color="blue-grey lighten-3" class="shrink mb-2">
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="blue-grey darken-2"
                    @click="addTodo"
                >
                    <v-icon dark> mdi-plus </v-icon>
                </v-btn>
                <v-spacer />
                <v-btn-toggle
                    v-model="filterTodos"
                    tile
                    color="blue-grey  darken-2"
                    background-color="blue-grey  lighten-3"
                    group
                >
                    <v-btn class="ma-2" outlined id="showAll"> Show all </v-btn>
                    <v-btn class="ma-2" outlined id="showActive">
                        Show active
                    </v-btn>
                    <v-btn class="ma-2" outlined id="showCompleted">
                        Show completed
                    </v-btn>
                </v-btn-toggle>
            </v-toolbar>
        </template>
        <template v-slot:default="props">
            <v-row class="fill-height overflow-auto px-2 py-2" id="container">
                <v-col
                    v-for="item in props.items"
                    :key="item.id"
                    :cols="12 / itemsPerRow"
                    class="py-2"
                >
                    <todo
                        :todo="item"
                        @editToDo="onEditToDo"
                        @deleteToDo="onDeleteToDo"
                        @saveToDo="onSaveToDo"
                        @completeToDo="onCompleteToDo"
                        @reactivateToDo="onReactivateToDo"
                    />
                </v-col>
            </v-row>
        </template>
        <template v-slot:footer>
            <v-row class="no-gutters mt-auto py-2 shrink" justify="center">
                <v-spacer />
                <span class="mr-4 grey--text">
                    Page {{ page }} of
                    <span
                        v-text="numberOfPages"
                        class="font-weight-bold"
                        color="blue-grey darken-3"
                    />
                </span>
                <v-btn
                    small
                    dark
                    rounded
                    color="blue-grey darken-3"
                    class="mr-1"
                    @click="formerPage"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                    small
                    dark
                    rounded
                    color="blue-grey darken-3"
                    class="ml-1"
                    @click="nextPage"
                >
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </v-row>
        </template>
    </v-data-iterator>
</template>

<script>
import Todo from './ToDo';
export default {
    name: 'todo-list',
    props: {
        todos: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        Todo,
    },
    data() {
        return {
            filterTodos: 0,
            bottom: false,
            rowsPerPageArray: [3, 4, 6],
            rpp: 4,
            page: 1,
            busy: false,
        };
    },
    computed: {
        filteredTodos() {
            switch (this.filterTodos) {
                case 1: {
                    return this.todos.filter((t) => t.completed === false);
                }
                case 2: {
                    return this.todos.filter((t) => t.completed !== false);
                }
            }
            return this.todos;
        },
        numberOfPages() {
            return Math.ceil(this.todos.length / this.ipp);
        },
        rowsPerPage() {
            return this.rpp;
        },
        itemsPerRow() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return 1;
                case 'sm':
                    return 2;
                case 'md':
                    return 3;
                case 'lg':
                    return 4;
                case 'xl':
                    return 6;
            }
            return 1;
        },
        ipp: {
            set(val) {
                console.log(val);
            },
            get() {
                return Math.ceil(this.rowsPerPage * this.itemsPerRow);
            },
        },
    },
    methods: {
        onReactivateToDo(todoId) {
            this.$emit('reactivateToDo', todoId);
        },
        onCompleteToDo(todoId) {
            this.$emit('completeTodo', todoId);
        },
        onDeleteToDo(todoId) {
            this.$emit('deleteTodo', todoId);
        },
        onEditToDo(todoId) {
            this.$emit('editTodo', todoId);
        },
        addTodo() {
            this.$emit('addTodo');
        },
        onSaveToDo(todoId) {
            this.$emit('saveTodo', todoId);
        },
        nextPage() {
            if (this.page + 1 <= this.numberOfPages) this.page += 1;
        },
        formerPage() {
            if (this.page - 1 >= 1) this.page -= 1;
        },
        calcRowsPerPage() {
            let minItemHeight = 180;
            const viewport = window.visualViewport;
            let containerHeight = 0;
            if (viewport) {
                containerHeight = viewport.height - 200;
            }
            this.rpp = Math.floor(
                Math.max(containerHeight, minItemHeight) / minItemHeight
            );
        },
    },
    mounted() {
        this.calcRowsPerPage();
        window.addEventListener('resize', () => {
            //debounce
            if (!this.busy) {
                this.busy = true;
                setTimeout(() => {
                    this.calcRowsPerPage();
                    this.busy = false;
                }, 300);
            }
        });
    },
};
</script>
<style scoped>
.overflow-hidden {
    overflow: hidden;
}
</style>
