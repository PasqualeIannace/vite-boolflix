<script>
export default {
    props: {
        serie: Object
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
        <h2>{{ serie.name }}</h2>
        <h3>{{ serie.original_name }}</h3>
        <img @error="imgError" :src="`/flags/${serie.original_language}.png`" alt="">
        <p>Voto: {{ serie.vote_average }}</p>
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
