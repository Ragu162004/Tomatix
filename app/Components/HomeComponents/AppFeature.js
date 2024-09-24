import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import '../Language/language';

const ContainerComponent = ({ navigation }) => {
  const {t,i18n} = useTranslation();
  const changeLanguage = (lng) =>{
    i18n.changeLanguage(lng);
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Tomatix</Text>
        <Text style={styles.text}>
          {t('appFeatureText')}
        </Text>
        <Text>{t('welcome')}</Text>
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
