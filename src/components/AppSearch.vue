<script>
import { search } from "./catalogo.js"

export default {
    data() {
        return {
            search
        }
    },

    methods: {
        getMovie() {
            this.$emit();
        },
        getTVshow() {
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
        <input type="text" name="" id="" placeholder="Cerca..." v-model="search.cerca" @keyup="$emit('getMovie')">
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