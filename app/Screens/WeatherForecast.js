import React from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, ScrollView, RefreshControl, StyleSheet } from 'react-native';
import useWeatherForecast from '../hooks/useWeatherForecast';

const WeatherForecast = () => {
    const { forecast, loading, refreshing, loadForecast } = useWeatherForecast();

    if (loading) {
        return (
            <SafeAreaView style={styles.loading}>
                <ActivityIndicator size="large" />
            </SafeAreaView>
        );
    }

    if (!forecast) {
        return (
            <SafeAreaView style={styles.loading}>
                <Text>Unable to fetch weather data.</Text>
            </SafeAreaView>
        );
    }

    const current = forecast.current;
    const location = forecast.location;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={loadForecast}
                    />
                }
                contentContainerStyle={styles.scrollContainer}
            >
                <Text style={styles.title}>Current Weather</Text>
                <Text style={styles.locationText}>
                    Your Location: {location.name}, {location.region}
                </Text>
                <View style={styles.weatherContainer}>
                    <Text style={styles.weatherText}>Condition: {current.condition.text}</Text>
                    <Text style={styles.weatherText}>Temperature: {current.temp_c}°C</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        padding: 20,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#C84B31',
        marginBottom: 20,
    },
    locationText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    weatherContainer: {
        margin: 20,
        padding: 30,
        backgroundColor: '#f0f8ff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,

    },
    weatherText: {
        fontSize: 20,
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default WeatherForecast;
