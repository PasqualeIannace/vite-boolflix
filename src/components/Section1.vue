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

        intVoto(voto) {
            if (voto == 0) {
                return 0;
            };

            voto = voto.toFixed() / 2;

            if (Number.isInteger(voto) == false) {
                //console.log("Voto è mezzo numero e vale: ", voto);
                voto = parseInt(voto);
                //console.log("Voto è stato convertito in intero", voto);
                return voto;
            };

            return voto
        },

        halfStar(voto) {
            voto = voto.toFixed() / 2;

            if (Number.isInteger(voto) == false) {
                voto = 1;
                return voto;
            }
        },

        zeroStar(voto) {
            if (voto == 0) {
                return 5;
            };

            voto = voto.toFixed() / 2;

            if (Number.isInteger(voto) == false) {
                let NewVoto = parseInt(voto);
                voto = NewVoto - 4;
                voto = Math.abs(voto);
                return voto;
            };

            voto -= 5;
            voto = Math.abs(voto);
            return voto;
        }
    },
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
            <div>
                <img class="stars" v-for="i in intVoto(film.vote_average)" src="/stars/star.png" alt="">
                <img class="stars" v-for="i in halfStar(film.vote_average)" src="/stars/halfStar.png" alt="">
                <img class="stars" v-for="i in zeroStar(film.vote_average)" src="/stars/emptyStar.png" alt="">
            </div>
            <span>{{ film.overview }}</span>
        </div>

    </div>
</template>

<style scoped></style>
