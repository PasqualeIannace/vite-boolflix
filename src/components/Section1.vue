<script>
export default {
    props: {
        film: Object
    },

    methods: {
        imgError(event) {
            console.log("Immagine non caricata");
            event.target.src = "/flags/unknown.png";
        },

        posterError(event) {
            event.target.src = "/unknownPoster.png";
        },

        fixVoto(voto) {
            return voto.toFixed() / 2
        },
    },

    mounted() {

    }
}

</script>

<template>
    <div class="card">

        <div class="size100">
            <img @error="posterError" class="poster" :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`">
        </div>

        <div class="size100 info">
            <h2>{{ film.title }}</h2>
            <h3>{{ film.original_title }}</h3>
            <img @error="imgError" class="flags" :src="`/flags/${film.original_language}.png`" alt="">
            <p class="py1">Voto: {{ fixVoto(film.vote_average) }}</p>
            <span>{{ film.overview }}</span>
        </div>

    </div>
</template>

<style scoped></style>
