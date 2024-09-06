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
    container: { flex: 1 },
    loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    scrollContainer: { padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    locationText: { fontSize: 18, marginBottom: 10 },
    weatherContainer: { marginTop: 20 },
    weatherText: { fontSize: 18 },
});

export default WeatherForecast;
