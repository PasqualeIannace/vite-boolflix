<script>
export default {
    props: {
        film: Object
    },

    data() {
        return {
            isHovering: false,
        }
    },

    methods: {
        imgError(event) {
            console.log("Immagine non caricata");
            event.target.src = "/flags/unknown.png";
        },

        posterError(event) {
            event.target.src = "/unknownPoster.png";
        },
    },

    mounted() {

    }
}

</script>

<template>
    <div class="card">

        <div class="size100" @mouseover="isHovering = true" @mouseout="isHovering = false" :class="{ hidden: isHovering }">
            <img @error="posterError" class="poster" :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`">
        </div>

        <div class="size100" :class="!isHovering ? 'hidden' : 'dBlock'">
            <h2>{{ film.title }}</h2>
            <h3>{{ film.original_title }}</h3>
            <img @error="imgError" class="flags" :src="`/flags/${film.original_language}.png`" alt="">
            <p>Voto: {{ film.vote_average }}</p>
        </div>

    </div>
</template>

<style scoped>
.card {
    width: calc(100% / 4);
    margin: 1em;
}

.dBlock {
    display: block;
    pointer-events: none;
}
</style>
