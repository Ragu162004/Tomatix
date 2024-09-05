import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { WeatherForecast } from '../../Screens';

const WeatherComponent = () => {
    return (
        <View style={styles.page}>
            <View style={styles.overlay}>
                <WeatherForecast/>
            </View>
        </View>
    )
}

export default WeatherComponent

const styles = StyleSheet.create({
    overlay: {
        height: 150,
        width: '80%',
        top: 60,
        borderRadius: 20,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        backgroundColor: '#CCE6EE',
        alignContent:'center',
        textAlign:'center',
        justifyContent:'center',
        fontWeight:'200'
    },
    page:{
        justifyContent:'center',
        alignItems:'center'
    }
})