import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import PopularMovies from '../components/Popular/PopularMovies';
import UpcomingMovies from '../components/Upcoming/UpcomingMovies';
import TopRatedMovies from '../components/TopRated/TopRatedMovies';
import Details from './Details';

const Browse = ({navigation}) => {
  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
      <PopularMovies/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
      <UpcomingMovies/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
      <TopRatedMovies/>
      </TouchableOpacity>
    </ScrollView>
  )
};

export default Browse;

const styles = StyleSheet.create({})