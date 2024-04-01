
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movies/movie/MovieHeader';

// con la interface asi, puedo traerme el id de la pelicula que seleccione en el navigator ppal horizontal
interface Props extends StackScreenProps<RootStackParams, 'Details'>{};


export const DetailsScreen = ( { route }: Props ) => {
    //const { movieId } = useRoute().params;
    const { movieId } = route.params;
    //console.log( {movieId} );
    const { isLoading, movie } = useMovie( movieId );

   if ( isLoading ){
    return <Text>Loading.....</Text>
   }
    
    return (
        <View>

            {/* header */}
            <MovieHeader movie = { movie! } />

             {/* footer */}
           
        </View>
    )
}
