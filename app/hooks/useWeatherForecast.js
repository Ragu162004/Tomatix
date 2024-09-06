// useWeatherForecast.js
import { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';

const weatherapi = 'a52ce42073604dd3bbc132923241508'; // Replace with your actual API key

const useWeatherForecast = () => {
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchWeatherData = async (lat, lon) => {
        try {
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
        }
    };

    const loadForecast = useCallback(async () => {
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

            console.log('Latitude:', lat, 'Longitude:', lon);

            await fetchWeatherData(lat, lon);
        } catch (error) {
            console.log('Error:', error);
            Alert.alert('Error: ' + (error.message || 'Failed to fetch data'));
        } finally {
            setRefreshing(false);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadForecast();
    }, [loadForecast]);

    return { forecast, loading, refreshing, loadForecast };
};

export default useWeatherForecast;
