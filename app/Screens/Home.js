import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainHeader } from '../Components';
import WeatherComponent from '../Components/HomeComponents/WeatherComponent';

const Home = () => {
  return (
    <View style={styles.mainPage}>
      <MainHeader title={'Tomatix'}/>
      <WeatherComponent/>
    </View>
  );
}

export { Home };

const styles = StyleSheet.create({
  mainPage: {

  }
})