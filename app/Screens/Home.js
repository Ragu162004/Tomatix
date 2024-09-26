import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainHeader } from '../Components';
import WeatherComponent from '../Components/HomeComponents/WeatherComponent';
import AppFeature from '../Components/HomeComponents/AppFeature';
const Home = ({navigation}) => {
  return (
    <View style={styles.mainPage}>
      <MainHeader title={'Tomatix'}/>
      {/* <WeatherComponent/> */}
      <AppFeature navigation={navigation}/>
    </View>
  );
}

export { Home };

const styles = StyleSheet.create({
  mainPage: {
    
  }
})