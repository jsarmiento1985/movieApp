
import { THE_SIGRI_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({

    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        //api_key: '14bfd3aa45ce2404763726eb857b8112',
        api_key: THE_SIGRI_DB_KEY ?? 'no-key',
        language: 'es'
    }
});