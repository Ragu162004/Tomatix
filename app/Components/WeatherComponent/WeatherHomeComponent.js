/*import { View, Text, Alert, SafeAreaView, ActivityIndicator, ScrollView, RefreshControl,StyleSheet } from 'react-native';

const WeatherHomeComponent = ({current}) =>
{
    return(
        <View>
                    <Text style={styles.weatherText}>Condition: <Text style={styles.WeatherCondition}>{current.condition.text}</Text></Text>
                    <Text style={styles.weatherText}>Temperature: {current.temp_c}°C</Text>
                </View>
    )
}*/
import React, { useEffect, useState } from 'react';
import { View, Text, Alert, SafeAreaView, ActivityIndicator, ScrollView, RefreshControl,StyleSheet } from 'react-native';
import * as Location from 'expo-location';
const weatherapi = 'a52ce42073604dd3bbc132923241508';

const WeatherHomeComponent = () => {
    const [forecast, setForecast] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);

    const loadForecast = async () => {
        setRefreshing(true);
        setLoading(true);

        try {
            console.log('Requesting location permissions...');
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission access for the location is denied');
                setRefreshing(false);
                setLoading(false);
                return;
            }

            console.log('Fetching location...');
            const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
            console.log('Location fetched:', location);

            const lat = parseFloat(location.coords.latitude.toFixed(2));
            const lon = parseFloat(location.coords.longitude.toFixed(2));

            console.log(lat, lon);

            const fullUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherapi}&q=${lat},${lon}&aqi=no`;
            console.log('Fetching weather data from:', fullUrl);

            const response = await fetch(fullUrl);
            const data = await response.json();

            if (!response.ok) {
                console.log('Response status:', response.status);
                console.log('Response data:', data);
                throw new Error(data.error.message || 'Network response was not ok');
            }

            console.log('Weather data fetched:', data);
            setForecast(data);
        } catch (error) {
            console.log('Error:', error);
            Alert.alert('Error: ' + (error.message || 'Failed to fetch data'));
        } finally {
            setRefreshing(false);
            setLoading(false);
        }
    };

    useEffect(() => {
        loadForecast();
    }, []);

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
        
            
                <View>
                    <Text style={styles.weatherText}>Condition: <Text style={styles.WeatherCondition}>{current.condition.text}</Text></Text>
                    <Text style={styles.weatherText}>Temperature: {current.temp_c}°C</Text>
                </View>
            
        
    );
};

export default WeatherHomeComponent;

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
        fontWeight:500
    },
    WeatherCondition:{
        fontWeight:800
    }
});
