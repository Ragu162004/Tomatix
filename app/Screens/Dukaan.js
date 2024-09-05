import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { React, useState, useEffect } from 'react';

function TomatoView({ navigation }) {
  const [tomatoes, setTomatoes] = useState([]);

  const fetchTomatoes = async () => {
    try {
      const response = await fetch('https://tomatix-backend.onrender.com/tomatoes');
      const data = await response.json();
      setTomatoes(data);
    } catch (error) {
      console.error('Failed to fetch tomatoes:', error);
    }
  };

  useEffect(() => {
    fetchTomatoes();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <Pressable style={styles.button} onPress={() => { navigation.navigate('tomatoAdd') }}>
        <Text style={styles.buttonText}>Sell Tomatoes</Text>
      </Pressable>
      <ScrollView style={styles.content}>
        {tomatoes.map((t, index) => (
          <View key={index} style={styles.tscreen}>
            <Text style={styles.tomatoName}>{t.TomatoName}</Text>
            <Text>{t.quantity} Kg</Text>
            <Text>Rs. {t.price} /kg</Text>
            <Text>{t.state}</Text>
            <Text>{t.contact}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function TomatoAdd() {
  const [tomatoName, setTomatoName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [state, setState] = useState('Tamil Nadu');
  const [contact, setContact] = useState('');

  const submitTomato = async () => {
    const tomatoData = { TomatoName: tomatoName, quantity: parseInt(quantity), price: parseInt(price), state, contact };
    try {
      const response = await fetch('https://tomatix-backend.onrender.com/tomatoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tomatoData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Tomato added successfully');
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
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
      <Pressable style={styles.button} onPress={submitTomato}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
}

function FertilizerView({ navigation }) {
  const [fertilizers, setFertilizers] = useState([]);

  const fetchFertilizers = async () => {
    try {
      const response = await fetch('https://tomatix-backend.onrender.com/fertilizers');
      const data = await response.json();
      setFertilizers(data);
    } catch (error) {
      console.error('Failed to fetch fertilizers:', error);
    }
  };

  useEffect(() => {
    fetchFertilizers();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <Pressable style={styles.button} onPress={() => { navigation.navigate('FertilizerAdd') }}>
        <Text style={styles.buttonText}>Add Fertilizer</Text>
      </Pressable>
      <ScrollView style={styles.content}>
        {fertilizers.map((f, index) => (
          <View key={index} style={styles.screen}>
            <Text style={styles.fertilizerName}>{f.fertilizerName}</Text>
            <Text>{f.description}</Text>
            <Text>{f.state}</Text>
            <Text>{f.contact}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function FertilizerAdd() {
  const [fertilizerName, setFertilizerName] = useState('');
  const [description, setDescription] = useState('');
  const [state, setState] = useState('Tamil Nadu');
  const [contact, setContact] = useState('');

  const submitFertilizer = async () => {
    const fertilizerData = { fertilizerName, description, state, contact };
    try {
      const response = await fetch('https://tomatix-backend.onrender.com/fertilizers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fertilizerData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Fertilizer added successfully');
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <Text>Fertilizer Name</Text>
      <TextInput style={styles.input} value={fertilizerName} onChangeText={setFertilizerName} />
      <Text>Fertilizer Description</Text>
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
      <Pressable style={styles.button} onPress={submitFertilizer}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
}


export {TomatoAdd,TomatoView,FertilizerAdd,FertilizerView};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00F',
    padding: '2%',
    margin: '5%',
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  screen: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#CCF',
    padding: '2%',
    margin: '4%',
    borderRadius: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    margin: '2%',
    padding: '2%',
    width: '100%',
  },
  text: {
    margin: '4%',
  },
  content: {
    height: '65vh'
  },
  tscreen: {
    alignSelf: 'center',
    width: '75%',
    margin: '4%',
    textAlign: 'center',
    padding: '2%',
    backgroundColor: '#A22',
    borderRadius: 5,
    color: 'white'
  },
  tomatoName: {
    fontWeight: 'bold',
    color: 'yellow'
  },
  fertilizerName: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold'
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 10,
  }
});
