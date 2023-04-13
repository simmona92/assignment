import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {React, useState, useEffect} from 'react';
import UpcomingMovie from './UpcomingMovie';

const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=e8b590ba837c0c293e7259475ecab74b&language=en-US&page=1'

const UpcomingMovies = () => {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(url);
        const movies = await response.json();
        setMovies(movies.results);
    };
    useEffect(() => {
        getMovies();
    }, []);

let allUpcomingMovies = movies.map((movie) => {
    return <UpcomingMovie key={movie.id} title={movie.title}/>
})
  return (
    <View>
      <Text style={styles.title}>Upcoming</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {allUpcomingMovies}
      </ScrollView>
    </View>
  )
}

export default UpcomingMovies

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        marginTop: 14,
        marginStart: 10,
        marginBottom: 14,
        fontSize: 20
    }
})