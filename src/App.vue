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
            console.log("Funzione getApi");
            // let indirizzo = this.catalogo.apriUrl;
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
        <Section1 />
    </main>
</template>

<style scoped>

</style>
