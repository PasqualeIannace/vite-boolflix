<script>
import Section1 from './components/Section1.vue'
import Section2 from './components/Section2.vue'
import AppSearch from './components/AppSearch.vue'

import axios from 'axios'
import { catalogoFilm } from "./components/catalogo.js"
import { catalogoTVshow } from "./components/catalogo.js"
import { search } from "./components/catalogo.js"

export default {
    components: {
        Section1,
        Section2,
        AppSearch
    },

    data() {
        return {
            catalogoFilm,
            catalogoTVshow,
            search
        }
    },

    mounted() {
        this.getApi(this.catalogoFilm, this.catalogoTVshow);
    },

    methods: {
        getApi(film, tvShow) {

            // RICHIAMO API FILM

            // se il campo ricerca è vuoto
            if (this.search.cerca == "") {
                axios.request(film).then(response => {
                    // console.log(response.data);
                    this.catalogoFilm.array = response.data.results;
                });
                // altrimenti
            } else {
                this.catalogoFilm.params.query = this.search.cerca;
                // console.log(film);

                axios.request(film).then(response => {
                    // console.log(response.data);
                    this.catalogoFilm.array = response.data.results;
                    console.log("Axios ELSE");
                })
                    .catch(error => {
                        console.error(error);
                        console.log("Nessun risultato");
                    });
            }


            // RICHIAMO LE SERIE TV

            // se il campo ricerca è vuoto
            if (this.search.cerca == "") {
                console.log("SEI NELLE SERIE");

                axios.request(tvShow).then(response => {
                    console.log(response.data);
                    this.catalogoTVshow.array = response.data.results;
                    console.log("Axios IF");
                });
                // altrimenti
            } else {
                this.catalogoTVshow.params.query = this.search.cerca;
                console.log(tvShow);

                axios.request(tvShow).then(response => {
                    console.log(response.data);
                    this.catalogoTVshow.array = response.data.results;
                    console.log("Axios ELSE");
                })
                    .catch(error => {
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
        <AppSearch @getMovie="getApi(catalogoFilm, catalogoTVshow)" />
    </header>

    <main class="container">
        <h2 class="genre">Film</h2>
        <Section1 v-for="i in catalogoFilm.array" :film="i" />
        <h2 class="genre">Serie TV</h2>
        <Section2 v-for="i in catalogoTVshow.array" :serie="i" />
    </main>
</template>

<style lang="scss">
@use './styles/general.scss';

.genre {
    font-size: 2.5em;
    width: 100%;
}
</style>
