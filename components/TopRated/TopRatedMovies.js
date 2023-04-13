import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {React, useState, useEffect} from 'react';
import TopRatedMovie from './TopRatedMovie';

const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=e8b590ba837c0c293e7259475ecab74b&language=en-US&page=1'

const TopRatedMovies = () => {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(url);
        const movies = await response.json();
        setMovies(movies.results);
    };
    useEffect(() => {
        getMovies();
    }, []);

let allTopRatedMovies = movies.map((movie) => {
    return <TopRatedMovie key={movie.id} title={movie.title} overview={movie.overview}/>
})
  return (
    <View>
      <Text style={styles.title}>Top rated</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {allTopRatedMovies}
      </ScrollView>
    </View>
  )
}

export default TopRatedMovies;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        marginTop: 14,
        marginStart: 10,
        marginBottom: 14,
        fontSize: 20
    }
})