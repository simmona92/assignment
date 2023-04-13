import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (

    <View style={styles.container}>
        <Text style={styles.title}>Flexn Presents</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Browse')}>
            <Text style={styles.btnBrowse}>Browse</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.btnLogin}>Login</Text>
        </TouchableOpacity>
    </View>

  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        paddingTop: 200,
        fontSize: 30,
    },
    btnBrowse: {
        textAlign: 'center',
        borderWidth: 1,
        width: 180,
        marginTop: 100,
        padding: 20,
        backgroundColor: 'white',
        color: 'blue'
    },
    btnLogin: {
        textAlign: 'center',
        borderWidth: 1,
        width: 180,
        marginTop: 20,
        padding: 20,
        backgroundColor: 'white',
        color: 'blue'
    }
})