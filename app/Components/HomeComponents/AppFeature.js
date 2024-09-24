import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const ContainerComponent = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Tomatix</Text>
        <Text style={styles.text}>
          Your go-to platform for all things tomato! Discover an extensive range of tomato varieties with detailed care instructions, manage your fertilizer needs effortlessly, and access real-time insights to optimize your cultivation practices. Engage with our interactive tools to get personalized recommendations and stay updated with expert tips. Dive in now and transform your tomato farming experience with Tomatix!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 150,
  },
  text: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: '600',
    paddingVertical: 10,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ContainerComponent;
