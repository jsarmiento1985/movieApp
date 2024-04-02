import React from 'react'
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { FullMovie } from '../../../core/entities/movie.entity';
import { useNavigation } from '@react-navigation/native';

interface Props {
     //asi tambien se pueden pasar todo el objeto movie
    //movie: FullMovie;

    //asi tambien se pueden pasar los props, solo lo que necesitamos
     poster: string,
     originalTitle: string,
     title: string, 


}
  //asi tambien se pueden pasar todo el objeto movie
//export const MovieHeader = ({ movie }: Props) => {

 //asi tambien se pueden pasar los props, solo lo que necesitamos
export const MovieHeader = ({ poster, originalTitle, title  }: Props) => {

    const { height: screenHeight } = useWindowDimensions();
    const navigation = useNavigation();

    return (

        //nos creamos un fragmento

        //solo vamos a utilizar el 70% = 0.7 de la pantalla
        <>
            <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>

                <View style={styles.imageBorder}>

                    <Image
                        style={styles.posterImage}
                        //source={{ uri: movie.poster }}
                        source={{ uri: poster }}
                    />

                </View>

                <View style={styles.marginContainer}>
                    {/* asi tambien se pueden pasar los props como objetos */}
                    {/* <Text style={styles.subTitle}> {movie.originalTitle}</Text>
                    <Text style={styles.title}> {movie.title}</Text> */}

                {/* asi tambien se pueden pasar los props, solo lo que necesitamos */}
                    <Text style={styles.subTitle}> { originalTitle }</Text>
                    <Text style={styles.title}> { title }</Text>

                </View>

                <View style={styles.backButton}>

                    <Pressable onPress={ () => navigation.goBack()}>
                    <Text style={styles.backButtonText}> Regresar</Text>
                    </Pressable>
                </View>



            </View>
        </>
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },

    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },

    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 35,
        left: 10,
    },
    backButtonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
});