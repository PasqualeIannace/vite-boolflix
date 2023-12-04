<script>
import Section1 from './components/Section1.vue'
import AppSearch from './components/AppSearch.vue'

import axios from 'axios'
import { catalogo } from "./components/catalogo.js"

export default {
    components: {
        Section1,
        AppSearch
    },

    data() {
        return {
            catalogo,
        }
    },

    mounted() {
        this.getApi();
    },

    methods: {
        getApi() {
            let indirizzo = this.catalogo;

            axios.request(indirizzo).then(function (response) {
                console.log(response.data);
                catalogo.array = response.data.results;
                console.log("Il mio array", catalogo.array);
            })
            .catch(function (error) {
                console.error(error);
                console.log("Nessun risultato");
            });
        }
    }
}
</script>

<template>
    <header>
        <h1>Boolfix</h1>
    </header>

    <main class="container">
        <AppSearch />
        <Section1 v-for="i in catalogo.array" :film="i" />
    </main>
</template>

<style scoped></style>
