<script>
export default {
    props: {
        serie: Object
    },

    // data() {
    //     return {
    //         path: this.serie.poster_path,
    //         posterPath: `https://image.tmdb.org/t/p/w342/${this.serie.poster_path}`,
    //     }
    // },

    methods: {
        imgError(event) {
            console.log("Immagine non caricata");
            event.target.src = "/flags/unknown.png";
        }
    },

    mounted() {

    }
}

</script>

<template>
    <div class="card">
        <img v-if="this.serie.poster_path !== null" class="poster"
            :src="`https://image.tmdb.org/t/p/w342/${this.serie.poster_path}`">
        <img v-else class="poster" src="unknownPoster.png" alt="">

        <div class="size100 info">
            <h2>{{ serie.name }}</h2>
            <h3>{{ serie.original_name }}</h3>
            <img @error="imgError" class="flags" :src="`/flags/${serie.original_language}.png`" alt="">
            <p class="py1">Voto: {{ serie.vote_average }}</p>
            <span>{{ serie.overview }}</span>
        </div>

    </div>
</template>

<style scoped></style>
