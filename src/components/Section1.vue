<script>
export default {
    props: {
        film: Object
    },

    methods: {
        imgError(event) {
            event.target.src = "/flags/unknown.png";
        },

        posterError(event) {
            event.target.src = "/unknownPoster.png";
        },

        fixVoto(voto) {

            if (voto == null) {
                console.log("Voto vale NULL", voto);
                return 0;
            };

            voto = voto.toFixed() / 2;

            if (Number.isInteger(voto) == false) {
                console.log("Voto è mezzo numero e vale: ", voto);
                voto = parseInt(voto);
                console.log("Voto è stato convertito in intero", voto);
                return voto;
            };

            return voto
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
            <p class="py1">Voto:
            </p>
            <img class="stars" v-for="i in fixVoto(film.vote_average)" src="/stars/star.png" alt="">
            <span>{{ film.overview }}</span>
        </div>

    </div>
</template>

<style scoped>
.stars {
    width: 2.5em;
}
</style>
