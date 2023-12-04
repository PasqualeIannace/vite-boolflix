import { reactive } from "vue"

export const catalogo = reactive({
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {query: 'arancia', include_adult: 'false', language: 'it-IT', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2M4N2QwMmFlZDI0ZTZmYzhmNjdiYzVmOTEyOWY1YyIsInN1YiI6IjY1NmRjMDg4M2RjMzEzMDExYjNkYjJiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qIdkFgRcBZQZ5FbZu358zTsKL2qJLyyvy3sngAi5umk'
  },
  array: [],
});

//   https://api.themoviedb.org/3/search/movie?query=arancia&include_adult=false&language=it-IT&page=1'