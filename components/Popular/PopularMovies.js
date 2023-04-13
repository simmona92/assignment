import { StyleSheet, Text, View, ScrollView } from 'react-native';
import  { React, useState, useEffect} from 'react';
import PopularMovie from './PopularMovie';

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=e8b590ba837c0c293e7259475ecab74b&language=en-US&page=1';

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(url);
        const movies = await response.json();
        setMovies(movies.results);
    };
    useEffect(() => {
        getMovies();
    }, []);

let allPopularMovies = movies.map((movie) => {
    return <PopularMovie key={movie.id} id={movie.id} title={movie.title}/>
})

  return (
    <View>
      <Text style={styles.title}>Most popular</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {allPopularMovies}
      </ScrollView>
    </View>
  )
}

export default PopularMovies;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        marginTop: 14,
        marginStart: 10,
        marginBottom: 14,
        fontSize: 20
    }
})