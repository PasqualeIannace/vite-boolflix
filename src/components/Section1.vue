<script>
export default {
	props: {
        film: Object
	},

    mounted() {
        console.log("App Section1");
    }
}

</script>

<template>
    <div class="card">
        <h2>{{ film.title }}</h2>
        <h3>{{ film.original_title }}</h3>
        <p>Lingua: {{ film.original_language }}</p>
        <p>Voto: {{ film.vote_average }}</p>
    </div>
</template>

<style scoped>
    .card {
        width: calc(100% / 4);
        margin: 1em;
    }
</style>
