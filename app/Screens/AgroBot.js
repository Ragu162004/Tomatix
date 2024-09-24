import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, Modal, Pressable} from 'react-native';

export default function AgroBot() {
  const [ans, setAns] = useState([{ id: 1, question: "Hello", answer: "Hello I am your assistant" }]);
  const [question, setQuestion] = useState('');
  const chatref = useRef(null);
  const input_text = useRef(null);
  const [chatans, setchatans] = useState(1);
  const [alrt, setalrt] = useState(1);
  const [modal_view, setmodal_view] = useState(true);

  useEffect(() => {
    if (chatref.current) {
      chatref.current.scrollToEnd({ animated: true });
    }
  }, [ans]);

  function showAlert() {
    return (
      <View style={styles.alertContainer}>
        <Text style={styles.alertText}>You can chat in more languages</Text>
        <Text style={styles.alertText}>Try... வணக்கம்... नमस्ते...</Text>
        <Button title="Okay" onPress={() => setalrt(0)} />
      </View>
    );
  }

  async function chatAnswer() {
    if (question === "" || chatans === 0) {
      return;
    }
    setchatans(0);
    input_text.current.clear();
    setAns([...ans, { id: ans.length + 1, question: question, answer: "..." }]);

    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: 'POST',
        body: JSON.stringify({ question }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      setAns(ans.filter((s, i) => i !== ans.length - 1));
      setAns([...ans, { id: ans.length + 1, question: question, answer: data.answer }]);
    } catch {
      setAns(ans.filter((s, i) => i !== ans.length - 1));
      setAns([...ans, { id: ans.length + 1, question: question, answer: "Check your connection" }]);
    }

    setQuestion('');
    setchatans(1);
  }

  function chat() {
    return ans.map((chat, i) => (
      <View key={i}>
        <Text style={styles.question}>{chat.question}</Text>
        <Text style={styles.answer}>{chat.answer}</Text>
      </View>
    ));
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}><Text style={styles.titleText}>TOMATIX</Text></View>
      <View style={styles.screen}>
        <View style={styles.text}>
          <ScrollView style={styles.text_area} ref={chatref}>
            {chat()}
          </ScrollView>
          <View style={styles.input}>
            <View style={styles.buttonContainer}>
              <Button onPress={chatAnswer} title="Send" />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                ref={input_text}
                style={styles.textInput}
                placeholder="Chat here..."
                keyboardType="default"
                multiline
                placeholderTextColor="#444"
                onChangeText={setQuestion}
                editable={alrt === 0}
              />
            </View>
          </View>
        </View>
      </View>
      {alrt === 1 ? showAlert() : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  screen: {
    position: 'relative',
    backgroundColor: 'rgba(0,255,255,0)',
    height: '75%',
    borderRadius: 20,
    width: '95%',
    shadowColor: 'rgba(100,100,100,0.5)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 5,
    flexDirection: 'column'
  },
  input: {
    height: 60,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#EEE',
    shadowColor: '#BBB',
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    width: '100%',
    flexDirection: 'column'
  },
  text_area: {
    height: '80%',
    borderRadius: 20,
    padding: 10,
    overflow: 'scroll'
  },
  question: {
    borderRadius: 10,
    backgroundColor: '#BFB',
    padding: 10,
    alignSelf: 'flex-end',
    margin: 10,
    fontSize: 16
  },
  answer: {
    borderRadius: 10,
    padding: 10,
    alignSelf: 'flex-start',
    margin: 10,
    fontSize: 16
  },
  title: {
    backgroundColor: '#EEF',
    width: '95%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 10
  },
  titleText: {
    color: '#55F',
    fontSize: 20
  },
  alertContainer: {
    position: 'absolute',
    top: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#998',
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 10,
  },
  alertText: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 10
  },
  textInputContainer: {
    width: '80%',
    marginTop: -10
  },
  textInput: {
    height: 50,
    fontSize: 18,
    padding: 10,
    paddingRight: 50,
    width: '100%'
  }
});
