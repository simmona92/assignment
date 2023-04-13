import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const TopRatedMovie = (props) => {
    let {id, title} = props;
  return (
    <View style={styles.container}>
            <Image 
                style={styles.img}
                source={{
                    uri: 'https://garden.spoonflower.com/c/12950217/p/f/m/4qcj5oNkDOWDNa7gx9GHiB08Idm04-_2vM9E-yFT4dPSGQiAxScCYzQ/Solid%20Hot%20Pink.jpg'
                }}
            />
            <Text style={styles.movieTitle}>{title}</Text>
    </View>
  )
}

export default TopRatedMovie;

const styles = StyleSheet.create({
    container: {
        width: 250,
        marginStart: 10
    },
    img: {
        borderWidth: 1,
        height: 250,
        marginBottom: 5
    },
    movieTitle: {
      color: 'gray',
      fontSize: 16
    }
})