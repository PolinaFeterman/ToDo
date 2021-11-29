<template>
    <v-card class="card white--text" color="blue-grey lighten-2">
        <v-card-title> To-do application </v-card-title>
        <v-card-text class="white--text">
            <div>This great application can:</div>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="white">mdi-send</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle class="white--text"
                    >List all Todo Items</v-list-item-subtitle
                >
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="white">mdi-plus </v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle class="white--text"
                    >Add a Todo item</v-list-item-subtitle
                >
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="white">mdi-pencil </v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle class="white--text"
                    >Update a Todo item</v-list-item-subtitle
                >
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="white">mdi-content-save </v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle class="white--text"
                    >Save updated Todo item</v-list-item-subtitle
                >
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="white">mdi-delete </v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle class="white--text"
                    >Delete Todo item</v-list-item-subtitle
                >
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="white">mdi-check </v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle class="white--text"
                    >Mark Todo item as Completed</v-list-item-subtitle
                >
            </v-list-item>
            <v-list-item color="white">
                <v-list-item-icon>
                    <v-icon color="white">mdi-reload </v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle class="white--text"
                    >Reactivate Todo item</v-list-item-subtitle
                >
            </v-list-item>
        </v-card-text>
    </v-card>
</template>
