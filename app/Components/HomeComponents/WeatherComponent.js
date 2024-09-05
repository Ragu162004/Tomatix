import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WeatherComponent = () => {
    return (
        <View>
            <View style={styles.overlay}>
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
    },
})