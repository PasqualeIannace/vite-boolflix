<script>
import { catalogo } from "./catalogo.js"

export default {
    data() {
        return {
            catalogo
        }
    },

    methods: {
        getSearch() {
            this.$emit()
        }
    },

    mounted() {
        console.log("App search");
    }
}
</script>

<template>
    <input type="text" name="" id="" placeholder="Cerca..." v-model="catalogo.cerca" @keyup="$emit('getSearch')">
</template>

<style scoped>
    input {
        background: #000000ba;
        border: 1px solid white;
        padding: 0 0.7em;
        color: white;
    }
</style>