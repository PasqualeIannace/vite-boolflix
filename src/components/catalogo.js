import { reactive } from "vue"

export const catalogo = reactive({
	movieApi: "https://api.themoviedb.org/3/search/movie",
	tvShowApi: "https://api.themoviedb.org/3/search/tv",
	movieArray: [],
	tvShowArray: [],
});

export const search = reactive({
	cerca: "",
});