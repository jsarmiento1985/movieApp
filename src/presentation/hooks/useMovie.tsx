import { useEffect, useState } from 'react'
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';

export const useMovie = ( movieId: number ) => {

    const [isLoading, setisLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>(); //FullMovie= entidad

    useEffect(() => {
        loadMovie();
    }, [movieId]);

    const loadMovie =  async() => {
        setisLoading(true);
        const fullMovie = await UseCases.getMovieByIdUseCase( movieDBFetcher, movieId);
        setMovie(fullMovie);
        setisLoading(false);
        console.log(fullMovie);

    }

    return {
        isLoading,
        movie,
    }


}
