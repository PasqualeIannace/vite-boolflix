<script>
export default {
    props: {
        serie: Object
    },

    data() {
        return {
            posterPath: `https://image.tmdb.org/t/p/w342/${this.serie.poster_path}`,
            path: this.serie.poster_path,
        }
    },

    methods: {
        imgError(event) {
            console.log("Immagine non caricata");
            event.target.src = "/flags/unknown.png";
        }
    },

    mounted() {
        console.log("App Section1");
    }
}

</script>

<template>
    <div class="card">
        <img v-if="path !== null" class="poster" :src="posterPath">
        <img v-else class="poster" src="unknownPoster.png" alt="">
        <h2>{{ serie.name }}</h2>
        <h3>{{ serie.original_name }}</h3>
        <img @error="imgError" class="flags" :src="`/flags/${serie.original_language}.png`" alt="">
        <p>Voto: {{ serie.vote_average }}</p>
    </div>
</template>

<style scoped>
.card {
    width: calc(100% / 4);
    margin: 1em;
}
</style>
