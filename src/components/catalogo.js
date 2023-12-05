import { reactive } from "vue"

export const catalogo = reactive({
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: { query: 'arancia', include_adult: 'false', language: 'it-IT', page: '1', api_key: "13c87d02aed24e6fc8f67bc5f9129f5c" },
  headers: {
    accept: 'application/json',
    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2M4N2QwMmFlZDI0ZTZmYzhmNjdiYzVmOTEyOWY1YyIsInN1YiI6IjY1NmRjMDg4M2RjMzEzMDExYjNkYjJiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qIdkFgRcBZQZ5FbZu358zTsKL2qJLyyvy3sngAi5umk'
  },
  array: [],
  cerca: ""
});