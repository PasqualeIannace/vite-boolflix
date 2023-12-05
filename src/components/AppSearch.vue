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
    <div>
        <input type="text" name="" id="" placeholder="Cerca..." v-model="catalogo.cerca" @keyup="$emit('getSearch')">
    </div>
</template>

<style scoped>
input {
    background: #000000ba;
    border: 1px solid white;
    padding: 0 0.7em;
    color: white;
    height: 100%;
}

select {
    height: 100%;
    width: 4em;
}
</style>