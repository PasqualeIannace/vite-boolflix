<script>
export default {
    props: {
        film: Object
    },

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
        <!-- <img :src="" alt="" :id="film"> -->
        <h2>{{ film.title }}</h2>
        <h3>{{ film.original_title }}</h3>
        <img @error="imgError" :src="`/flags/${film.original_language}.png`" alt="">
        <p>Voto: {{ film.vote_average }}</p>
    </div>
</template>

<style scoped>
.card {
    width: calc(100% / 4);
    margin: 1em;
}

img {
    width: 25%;
}
</style>
