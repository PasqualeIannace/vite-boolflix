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
            // console.log(indirizzo);

            // axios.get(indirizzo).then(result => {
            //     console.log(result.data);
            // })
            axios
                .request(indirizzo)
                .then(function (response) {
                    console.log(response.data);
                    console.log(indirizzo);
                })
                .catch(function (error) {
                    console.error(error);
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
        <Section1 />
    </main>
</template>

<style scoped></style>
