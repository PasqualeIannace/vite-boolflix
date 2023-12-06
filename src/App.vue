<script>
import Section1 from './components/Section1.vue'
import Section2 from './components/Section2.vue'
import AppSearch from './components/AppSearch.vue'

import axios from 'axios'
import { catalogo } from "./components/catalogo.js"
import { search } from "./components/catalogo.js"

export default {
    components: {
        Section1,
        Section2,
        AppSearch
    },

    data() {
        return {
            catalogo,
            search,

            searchApi: {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                params: { query: 'aran', include_adult: 'false', language: 'it-IT', page: '1', api_key: "13c87d02aed24e6fc8f67bc5f9129f5c" },
                headers: {
                    accept: 'application/json',
                    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2M4N2QwMmFlZDI0ZTZmYzhmNjdiYzVmOTEyOWY1YyIsInN1YiI6IjY1NmRjMDg4M2RjMzEzMDExYjNkYjJiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qIdkFgRcBZQZ5FbZu358zTsKL2qJLyyvy3sngAi5umk'
                },
            }
        }
    },

    mounted() {
        this.getApiMovie();
        this.getApiTVshow();
    },

    methods: {
        getApiMovie() {
            // cambio url api
            this.searchApi.url = this.catalogo.movieApi;

            if (this.search.cerca == "") {
                // richiamo lista film
                axios.request(this.searchApi).then(response => {
                    this.catalogo.movieArray = response.data.results;
                    console.log(response.data.results);
                });
            } else {
                this.searchApi.params.query = this.search.cerca;

                axios.request(this.searchApi).then(response => {
                    this.catalogo.movieArray = response.data.results;
                })
                    .catch(error => {
                        console.error(error);
                        console.log("Nessun risultato");
                    });
            }

        },

        getApiTVshow() {
            // cambio url api
            this.searchApi.url = this.catalogo.tvShowApi;

            if (this.search.cerca == "") {
                // richiamo lista TV show
                axios.request(this.searchApi).then(response => {
                    this.catalogo.tvShowArray = response.data.results;
                    console.log("STAMPO ARRAY TV", this.catalogo.tvShowArray);
                });
            } else {
                this.searchApi.params.query = this.search.cerca;

                axios.request(this.searchApi).then(response => {
                    this.catalogo.tvShowArray = response.data.results;
                })
                    .catch(error => {
                        console.error(error);
                        console.log("Nessun risultato");
                    });
            }
        },
    }
}
</script>

<template>
    <header>
        <h1>Boolfix</h1>
        <AppSearch @getMovie="getApiMovie(), getApiTVshow()" />
    </header>

    <main class="container">
        <h2 class="genre">Film</h2>
        <Section1 v-for="i in catalogo.movieArray" :film="i" />
        <h2 class="genre">Serie TV</h2>
        <Section2 v-for="i in catalogo.tvShowArray" :serie="i" />
    </main>
</template>

<style lang="scss">
@use './styles/general.scss';

.genre {
    font-size: 2.5em;
    width: 100%;
}
</style>
