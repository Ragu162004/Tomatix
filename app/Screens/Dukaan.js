import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect

// TomatoView Component
function TomatoView({ navigation }) {
  const [tomatoes, setTomatoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTomatoes = async () => {
    try {
      const response = await fetch('https://tomatix-backend-py3d.onrender.com/tomatoes');
      const data = await response.json();
      setTomatoes(data);
    } catch (error) {
      console.error('Failed to fetch tomatoes:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchTomatoes();
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <Pressable style={styles.button} onPress={() => navigation.navigate('TomatoAdd')}>
        <Text style={styles.buttonText}>Sell Tomatoes</Text>
      </Pressable>
      {loading ? (
        <ActivityIndicator size="large" color="#ff6347" />
      ) : (
        <ScrollView style={styles.content}>
          {tomatoes.length ? (
            tomatoes.map((t, index) => (
              <View key={index} style={styles.tomatoCard}>
                <Text style={styles.tomatoName}>{t.TomatoName}</Text>
                <Text>{t.quantity} Kg</Text>
                <Text>Rs. {t.price} /kg</Text>
                <Text>{t.state}</Text>
                <Text>{t.contact}</Text>
              </View>
            ))
          ) : (
            <Text>No tomatoes available</Text>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

// TomatoAdd Component
function TomatoAdd({ navigation }) {
  const [tomatoName, setTomatoName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [state, setState] = useState('Tamil Nadu');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);

  const submitTomato = async () => {
    if (!tomatoName || !quantity || !price || !contact) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    const tomatoData = { TomatoName: tomatoName, quantity: parseInt(quantity), price: parseInt(price), state, contact };
    try {
      const response = await fetch('https://tomatix-backend-py3d.onrender.com/tomatoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tomatoData),
      });
      const result = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Tomato added successfully', [
          { text: 'OK', onPress: () => navigation.goBack() },
        ]);
      } else {
        Alert.alert('Error', result.error || 'Failed to add tomato');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to add tomato');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <Text style={styles.boldText}>Only Bulk Orders</Text>
      <Text>Tomato Order Name</Text>
      <TextInput style={styles.input} value={tomatoName} onChangeText={setTomatoName} />
      <Text>Quantity</Text>
      <TextInput style={styles.input} value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
      <Text>Price per Kg</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />
      <Text>State</Text>
      <Picker selectedValue={state} onValueChange={(itemValue) => setState(itemValue)} style={styles.input}>
        <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
        <Picker.Item label="Kerala" value="Kerala" />
        <Picker.Item label="Karnataka" value="Karnataka" />
        <Picker.Item label="Maharashtra" value="Maharashtra" />
      </Picker>
      <Text>Contact</Text>
      <TextInput style={styles.input} value={contact} onChangeText={setContact} keyboardType="numeric" />
      {loading ? (
        <ActivityIndicator size="large" color="#ff6347" />
      ) : (
        <Pressable style={styles.button} onPress={submitTomato}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

// FertilizerView Component
function FertilizerView({ navigation }) {
  const [fertilizers, setFertilizers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFertilizers = async () => {
    try {
      const response = await fetch('https://tomatix-backend-py3d.onrender.com/fertilizers');
      const data = await response.json();
      setFertilizers(data);
    } catch (error) {
      console.error('Failed to fetch fertilizers:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFertilizers();
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <Pressable style={styles.button} onPress={() => navigation.navigate('FertilizerAdd')}>
        <Text style={styles.buttonText}>Add Fertilizer</Text>
      </Pressable>
      {loading ? (
        <ActivityIndicator size="large" color="#32cd32" />
      ) : (
        <ScrollView style={styles.content}>
          {fertilizers.length ? (
            fertilizers.map((f, index) => (
              <View key={index} style={styles.fertilizerCard}>
                <Text style={styles.fertilizerName}>{f.fertilizerName}</Text>
                <Text>{f.description}</Text>
                <Text>{f.state}</Text>
                <Text>{f.contact}</Text>
              </View>
            ))
          ) : (
            <Text>No fertilizers available</Text>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

// FertilizerAdd Component
function FertilizerAdd({ navigation }) {
  const [fertilizerName, setFertilizerName] = useState('');
  const [description, setDescription] = useState('');
  const [state, setState] = useState('Tamil Nadu');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);

  const submitFertilizer = async () => {
    if (!fertilizerName || !description || !contact) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    const fertilizerData = { fertilizerName, description, state, contact };
    try {
      const response = await fetch('https://tomatix-backend-py3d.onrender.com/fertilizers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fertilizerData),
      });
      const result = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Fertilizer added successfully', [
          { text: 'OK', onPress: () => navigation.goBack() },
        ]);
      } else {
        Alert.alert('Error', result.error || 'Failed to add fertilizer');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to add fertilizer');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <Text style={styles.boldText}>Add Fertilizer</Text>
      <Text>Fertilizer Name</Text>
      <TextInput style={styles.input} value={fertilizerName} onChangeText={setFertilizerName} />
      <Text>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />
      <Text>State</Text>
      <Picker selectedValue={state} onValueChange={(itemValue) => setState(itemValue)} style={styles.input}>
        <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
        <Picker.Item label="Kerala" value="Kerala" />
        <Picker.Item label="Karnataka" value="Karnataka" />
        <Picker.Item label="Maharashtra" value="Maharashtra" />
      </Picker>
      <Text>Contact</Text>
      <TextInput style={styles.input} value={contact} onChangeText={setContact} keyboardType="numeric" />
      {loading ? (
        <ActivityIndicator size="large" color="#32cd32" />
      ) : (
        <Pressable style={styles.button} onPress={submitFertilizer}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  tomatoCard: {
    backgroundColor: '#ffe4e1',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  tomatoName: {
    fontWeight: 'bold',
  },
  fertilizerCard: {
    backgroundColor: '#e6ffe6',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  fertilizerName: {
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 10,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10,
  },
});

export { TomatoView, TomatoAdd, FertilizerView, FertilizerAdd };
