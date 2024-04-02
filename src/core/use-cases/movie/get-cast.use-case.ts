import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBCastResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { Cast } from "../../entities/cast.entity";


export const getMovieCastUseCase = async ( fetcher: HttpAdapter, movieId: number): Promise <Cast[]> => {

    try {

         //fetcher llama al servicio
         const { cast } = await fetcher.get<MovieDBCastResponse>(`/${ movieId }/credits`);
         // mapeo las variables del servicio a como quiero guardarlas en el mio hay que iterarla porque la interface cast es [arreglo]
         const actors = cast.map(( cast ) => CastMapper.fromMovieDBCastToEntity( cast ));
         //return fullMovie que es el mapeo a usar o mostrar
         return actors;
        
    } catch (error) {
        throw new Error (`Cannot get movie cast: ${movieId}`);
    }
    
}