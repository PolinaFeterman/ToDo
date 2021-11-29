<template>
    <span>
        <v-app-bar dense color="blue-grey darken-1" dark>
            <v-btn
                text
                class="hidden-sm-and-down blue-grey darken-2 px-2"
                to="/"
                >{{ appTitle }}</v-btn
            >
            <v-spacer class="hidden-sm-and-down" />
            <v-btn
                text
                class="hidden-sm-and-down blue-grey darken-2 px-2"
                to="/about"
                >About</v-btn
            >
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Todo List',
        };
    },
};
</script>

<style scoped></style>
