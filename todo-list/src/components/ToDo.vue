<template>
    <v-card
        class="card white--text"
        :color="todo.completed ? 'blue-grey lighten-2' : 'blue-grey darken-1'"
    >
        <v-card-title>
            <span class="font-weight-light text-truncate" v-if="!todo.editMode">
                {{ todo.title }}
            </span>
            <v-text-field
                background-color="blue-grey lighten-1"
                color="white"
                clearable
                dense
                v-if="todo.editMode"
                label="Enter title"
                outlined
                v-model="todo.title"
            />
        </v-card-title>
        <v-divider />
        <v-card-text class="white--text">
            <span v-if="!todo.editMode">
                <div class="mr-2" v-if="!todo.editMode">{{ todo.text }}</div>
                <div class="mr-2">
                    Status: {{ todo.completed ? 'Completed' : 'Active' }}
                </div>
            </span>
            <v-textarea
                background-color="blue-grey lighten-1"
                color="white"
                clearable
                rows="1"
                auto-grow
                outlined
                v-if="todo.editMode"
                label="Enter text"
                v-model="todo.text"
            />
        </v-card-text>
        <v-card-actions>
            <v-btn
                id="editToDo"
                icon
                @click="editToDo"
                v-if="!todo.editMode && !todo.completed"
            >
                <v-icon color="white"> mdi-pencil </v-icon>
            </v-btn>
            <v-btn
                id="completeToDo"
                icon
                @click="completeToDo"
                v-if="!todo.editMode && !todo.completed"
            >
                <v-icon color="white"> mdi-check </v-icon>
            </v-btn>
            <v-btn
                icon
                @click="reactivateToDo"
                v-if="!todo.editMode && todo.completed"
            >
                <v-icon color="white"> mdi-reload</v-icon>
            </v-btn>
            <v-btn icon @click="saveToDo" v-if="todo.editMode">
                <v-icon color="white"> mdi-content-save</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn icon @click="deleteToDo">
                <v-icon color="white"> mdi-delete </v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script type="text/javascript">
export default {
    name: 'Todo',
    props: {
        todo: {
            type: Object,
            default: () => {},
            required: true,
        },
    },

    methods: {
        reactivateToDo() {
            this.$emit('reactivateToDo', this.todo.id);
        },
        editToDo() {
            this.$emit('editToDo', this.todo.id);
        },
        deleteToDo() {
            this.$emit('deleteToDo', this.todo.id);
        },
        completeToDo() {
            this.$emit('completeToDo', this.todo.id);
        },
        saveToDo() {
            this.$emit('saveToDo', this.todo.id);
        },
    },
};
</script>
