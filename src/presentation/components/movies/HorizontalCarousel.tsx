import React, { useEffect, useRef } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'
import { FlatList } from 'react-native-gesture-handler'
import { MoviePoster } from './MoviePoster'

interface Props{
    movies: Movie[];
    title?: string;
    loadNextPage?: () => void;

    
}

export const HorizontalCarousel = ({ movies, title, loadNextPage }:Props) => {

    const isLoading = useRef(false);


    //cuando las peliculas cambien, va permitir llamar mas peliculas
    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);// tiempo para refrescar las peliculas
     
    }, [ movies ])
    

    //metodo para saber la posicion max del scroll para llamar un servicio infinito, van cargando cuando llega l final del scroll mas peliculas
    const onScroll = ( event: NativeSyntheticEvent<NativeScrollEvent>) => {

        // si ya esta en la ultima posicion y siguen scrolleando, esta en true y no va a seguir llamando a mas peliculas
        if ( isLoading.current ) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        //console.log( { contentOffset, layoutMeasurement, contentSize });

        
        // si alcanzamos el final: contentOffset.x= al eje que se desplaza en este caso horizontal, si fuese vertical seria Y, layoutMeasurement.width= al ancho que va quedando , 600= pixeles de gracia numero aprox de 4 o 5 peliculas antes de terminar y llama a mas peliculas con una funcion, content size es el tamaño max de la pantalla
        const isEndReached = ( contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

        // si es false = No hemos llegado al final si es false no carga mas no haga nada
        if ( !isEndReached) return;


        // tan pronto sabemos que vamos a cargar algo
        isLoading.current = true;

        //cargar las siguientes peliculas si loadNextPage= viene algo o NO es null ejecuta la funcion
        loadNextPage && loadNextPage();

    }

  return (
    <View
    style = {{ height: title ? 260 : 220 }}
    >
            {/* title asi es para preguntar si el titulo lo tenemos */}
        {
            title && (
                <Text
                style = {{ fontSize: 30, fontWeight: '300' , marginLeft: 10,
                           marginBottom: 10 }}
                >
                    { title }
                </Text>
            )
        }

        <FlatList data = { movies } renderItem = { ({ item }) => (
            <MoviePoster movie = { item } width={140} height={200}></MoviePoster>
        )}

        keyExtractor = { (item) => item.id.toString() }
        horizontal = { true }
        showsVerticalScrollIndicator = { false }
        onScroll={( event ) => onScroll(event)}
        >
            
        </FlatList>
        
    </View>
  )
}
