import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesUpComingdUseCase = async ( fetcher : HttpAdapter  ) : Promise<Movie[]> =>{

    try {

        const upComing = await fetcher.get<MovieDBMoviesResponse>('/upcoming')//endpoint

       return upComing.results.map( result => MovieMapper.fromMovieDBResultToEntity(result));
        // asi se puede colocar o asi
        //return topRated.results.map( MovieMapper.fromMovieDBResultToEntity)
        
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching movies - upComing");
        
    }

}