import React, { useEffect, useState } from 'react'
import type { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  
  const [isLoading, setIsLoading] = useState(true); // true porque apenas se monte se carga el loading, por eso siempre true
  const [NowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad ();
  }, [])
  
const initialLoad = async () => {

      //con los await se van a ejecutar todos al mismo tiempo cumpliendo la promesa

 /*    const nowPlayingPromise= await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatedPromise = await UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const upComingPromise = await UseCases.moviesUpComingdUseCase(movieDBFetcher) */;
    //console.log(nowPlayingMovies[0]);

    // sin los await se van a ejecutar todos al mismo tiempo cumpliendo la promesa
    const nowPlayingPromise =  UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise    =  UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatedPromise   =  UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const upComingPromise   =  UseCases.moviesUpComingdUseCase(movieDBFetcher);
    // este codigo ejecuta simultaneamente las promesas

    //[] destructuracion de los resultados en el mismo orden llamado abajo
    const [
        nowPlayingMovies,
        popularMovies,
        topRatedMovies,
        upComingMovies,

    ] = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upComingPromise
    ]);

    //setear los setstates para que actualicen las pantallas principales
    setNowPlaying ( nowPlayingMovies );
    setPopular( popularMovies );
    setTopRated( topRatedMovies );
    setUpcoming( upComingMovies );
    setIsLoading(false);
    
   /* console.log(
        //nowPlayingMovies[0]
        nowPlayingMovies,
        popularMovies,
        topRatedMovies,
        upComingMovies,
        
        );*/
};

    //retorna los state
    return {
        isLoading,
        NowPlaying,
        popular,
        topRated,
        upcoming,
    }
}
