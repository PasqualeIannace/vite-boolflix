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

        <div class="size100 blockDiv">
            <h2>{{ serie.name }}</h2>
            <h3>{{ serie.original_name }}</h3>
            <img @error="imgError" class="flags" :src="`/flags/${serie.original_language}.png`" alt="">
            <p>Voto: {{ serie.vote_average }}</p>
        </div>

    </div>
</template>

<style scoped></style>
