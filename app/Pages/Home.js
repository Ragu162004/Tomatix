import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
}

export { Home };

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:'200px',
    backgroundColor: '#00000',
    width:'200px'
  }
})