import React from 'react'

import { useMovies } from '../../hooks/useMovies'
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isLoading, NowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

    if (isLoading) {
        return <FullScreenLoader></FullScreenLoader>
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>

                {/* principal */}
                <PosterCarousel movies={ NowPlaying }></PosterCarousel>
                
                {/* populares */}
                <HorizontalCarousel movies = { popular } title = "Populares" loadNextPage={ popularNextPage } />

                 {/* topRated */}
                 <HorizontalCarousel movies = { topRated } title = "Mejor calificadas" />

                  {/* proximamente */}
                <HorizontalCarousel movies = { upcoming } title = "Próximamente" />

            </View>
        </ScrollView>

    )
}
