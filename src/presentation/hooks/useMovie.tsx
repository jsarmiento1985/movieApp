import { useEffect, useState } from 'react'
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = ( movieId: number ) => {

    const [isLoading, setisLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>(); //FullMovie= entidad
    const [cast, setcast] = useState<Cast[]>(); // retorna una arreglo por la interfaz que es Cast[] en  MovieDBCastResponse

    useEffect(() => {
        loadMovie();
    }, [movieId]);

    const loadMovie =  async() => {
        setisLoading(true);
       //asi llama a un servicio primero  con AWAIT y luego el otro, pero necesitamos llamar a los dos al mismo time
      /* const fullMovie = await UseCases.getMovieByIdUseCase( movieDBFetcher, movieId);
       */
        

      //hay que manejar try y cath como exepcion buscar un ejemplo que esta en este proyecto

        const fullMoviePromise =  UseCases.getMovieByIdUseCase( movieDBFetcher, movieId);
        const castPromise      =  UseCases.getMovieCastUseCase( movieDBFetcher, movieId);
        
        //llamar a servicios simultaneamente y desestructuramos
        const [ fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise]);

        setMovie(fullMovie);
        setcast(cast);
        setisLoading(false);
        //console.log(cast); 

    }

    return {
        isLoading,
        movie,
        cast,
    }


}
