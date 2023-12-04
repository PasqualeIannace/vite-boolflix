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

            console.log("Catalogo: ", this.catalogo.cerca);

            // se il campo ricerca è vuoto
            if (this.catalogo.cerca == "") {
                axios.request(indirizzo).then(function (response) {
                    console.log(response.data);
                    catalogo.array = response.data.results;
                    console.log("Axios IF");
                });
            // altrimenti
            } else {
                catalogo.params.query = catalogo.cerca;
                
                axios.request(indirizzo).then(function (response) {
                    console.log(response.data);
                    catalogo.array = response.data.results;
                    console.log("Axios ELSE");
                })
                .catch(function (error) {
                        console.error(error);
                        console.log("Nessun risultato");
                    });
            }
        }
    }
}
</script>

<template>
    <header>
        <h1>Boolfix</h1>
        <AppSearch @getSearch="getApi" />
    </header>

    <main class="container">
        <Section1 v-for="i in catalogo.array" :film="i" />
    </main>
</template>

<style scoped></style>
