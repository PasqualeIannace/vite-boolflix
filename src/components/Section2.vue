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
            event.target.src = "/flags/unknown.png";
        },

        fixVoto(voto) {
            return voto.toFixed() / 2
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
        <img v-if="this.serie.poster_path !== null" class="poster"
            :src="`https://image.tmdb.org/t/p/w342/${this.serie.poster_path}`">
        <img v-else class="poster" src="unknownPoster.png" alt="">

        <div class="size100 info">
            <h2>{{ serie.name }}</h2>
            <h3>{{ serie.original_name }}</h3>
            <img @error="imgError" class="flags" :src="`/flags/${serie.original_language}.png`" alt="">
            <div>
                <img class="stars" v-for="i in intVoto(serie.vote_average)" src="/stars/star.png" alt="">
                <img class="stars" v-for="i in halfStar(serie.vote_average)" src="/stars/halfStar.png" alt="">
                <img class="stars" v-for="i in zeroStar(serie.vote_average)" src="/stars/emptyStar.png" alt="">
            </div>
            <span>{{ serie.overview }}</span>
        </div>

    </div>
</template>

<style scoped></style>
