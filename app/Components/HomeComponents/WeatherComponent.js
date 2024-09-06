import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useWeatherForecast from '../../hooks/useWeatherForecast';

const WeatherComponent = () => {
    const { forecast, loading, refreshing, loadForecast } = useWeatherForecast();
    console.log(forecast);
    return (
        <View style={styles.overlay}>
            <View >

            </View>
        </View>
    )
}

export default WeatherComponent

const styles = StyleSheet.create({
    overlay: {
        height: 150,
        width: '75%',
        padding:20,
        borderRadius: 20,
        shadowColor: '#171717',
        position: 'absolute',
        bottom:0,
        left:60,
        top:'70%',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        backgroundColor: '#CCE6EE',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
})