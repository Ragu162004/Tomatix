import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Picker } from '@react-native-picker/picker';
import '../Language/language';  

const ContainerComponent = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>{t('appFeatureHeader')}</Text>
        <Text style={styles.text}>{t('appFeatureText')}</Text>
        
        {/* New Button for Scanning Plant Disease */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DiseaseDetection')}  // Replace with the actual navigation route name
        >
          <Text style={styles.buttonText}>{t('scanPlantDisease')}</Text>
        </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Healthcare')}  // Replace with the actual navigation route name
          >
            <Text style={styles.buttonText}>{t('Know more about Tomatoes')}</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  pickerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
    marginBottom: 30,  // Added margin for spacing before the button
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default ContainerComponent;
