
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

// con la interface asi, puedo traerme el id de la pelicula que seleccione en el navigator ppal horizontal
interface Props extends StackScreenProps<RootStackParams, 'Details'>{};


export const DetailsScreen = ( { route }: Props ) => {
    //const { movieId } = useRoute().params;
    const { movieId } = route.params;
    //console.log( {movieId} );
    const { isLoading, movie, cast=[] } = useMovie( movieId ); // cast=[] se pone asi, si no viene nada se manda un arreglo vacio, originalmete seria solo 'cast', pero sale un error

    if (isLoading) {
        return <FullScreenLoader></FullScreenLoader>
    }
    return (
        <ScrollView>

            {/* header de esta forma mandando el objeto completo 
            <MovieHeader movie = { movie! } />*/}

            {/* header  o esta forma mandando los campos que se necestian*/}
             <MovieHeader 
             originalTitle = { movie!.originalTitle } 
             title = { movie!.title } 
             poster = { movie!.poster } 
             />

             {/* detalles o footer */}
             <MovieDetails 
                movie = { movie! }  //! signo admiracion porque puede ser que lo tengamos o no, no es obligatorio     
                cast = { cast }      
             />
           
        </ScrollView>
    )
}
