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

        debugVoto(voto) {
            voto = voto.toFixed() / 2;

            return voto;
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
            //console.log("Sei in zeroStar e voto vale:", voto);

            if (voto == 0) {
                return 5;
            };

            voto = voto.toFixed() / 2;

            if (Number.isInteger(voto) == false) {
                let NewVoto = parseInt(voto);
                console.log("Voto in zero star vale: ", voto);
                voto = NewVoto - 4;
                voto = Math.abs(voto);
                console.log("Voto in zero star dopo sottrazione: ", voto);
                return voto;
            };
        }
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
            <p class="py1">Voto numerico: {{ debugVoto(film.vote_average) }}
            </p>
            <img class="stars" v-for="i in intVoto(film.vote_average)" src="/stars/star.png" alt="">
            <img class="stars" v-for="i in halfStar(film.vote_average)" src="/stars/halfStar.png" alt="">
            <img class="stars" v-for="i in zeroStar(film.vote_average)" src="/stars/emptyStar.png" alt="">
            <span>{{ film.overview }}</span>
        </div>

    </div>
</template>

<style scoped>
.stars {
    width: 2.5em;
}
</style>
