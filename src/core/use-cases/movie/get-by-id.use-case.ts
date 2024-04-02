import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovie } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async ( 
    fetcher: HttpAdapter, 
    movieId: number //que retorna este llamado un number o numero
    ): Promise <FullMovie> => {

        try {
            //fetcher llama al servicio
            const movie = await fetcher.get<MovieDBMovie>(`/${ movieId }`);

            const a = await fetcher.post<MovieDBMovie>("/personas");
            // mapeo las variables del servicio a como quiero guardarlas en el mio
            const fullMovie = MovieMapper.fromMovieDBToEntity( movie );
            //return fullMovie que es el mapeo a usar o mostrar
            return fullMovie;
        } catch (error) {
            throw new Error (`Cannot get movie by id: ${movieId}`);
            
            
        }
    
};