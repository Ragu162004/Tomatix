import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, StatusBar, ActivityIndicator, Alert } from 'react-native';
import { ChatAnswer } from '../Components/AgroBotComponent/ChatAnswer';

export default function AgroBot() {
  const [ans, setAns] = useState([{ id: 1, question: "Hello", answer: "Hello I am your assistant" }]);
  const [question, setQuestion] = useState('');
  const [chatans, setChatans] = useState(true);
  const [alrt, setAlrt] = useState(true);
  const [loading, setLoading] = useState(false);

  const chatRef = useRef(null);
  const inputText = useRef(null);
  let id = 2;

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollToEnd({ animated: true });
    }
  }, [ans]);

  const handleClearChat = () => {
    setAns([]);
  };

  const alert = () => (
    <View style={styles.alertContainer}>
      <Text style={styles.alertTitle}>You can chat in more languages</Text>
      <Text style={styles.alertText}>Try{'\n'}வணக்கம்...{'\n'}नमस्ते...</Text>
      <Button title="Okay" onPress={() => setAlrt(false)} />
    </View>
  );

  const chatAnswer = async () => {
    if (question === "" || !chatans) {
      return;
    }
    setChatans(false);
    inputText.current.clear();
    setAns([...ans, { id: id, question: question, answer: "..." }]);
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: 'POST',
        body: JSON.stringify({ question: question }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      setAns((prevAns) => prevAns.filter((msg) => msg.id !== id));
      setAns((prevAns) => [...prevAns, { id: id, question: question, answer: data.answer }]);
    } catch(error) {
      setAns((prevAns) => prevAns.filter((msg) => msg.id !== id));
      setAns((prevAns) => [...prevAns, { id: id, question: question, answer: "Check your connection" }]);
      console.log(error);
    } finally {
      setLoading(false);
      setQuestion('');
      id++;
      setChatans(true);
    }
  };

  const renderChat = () => (
    ans.map((message) => (
      <View key={message.id} style={styles.messageContainer}>
        <Text style={styles.question}>{message.question}</Text>
        <ChatAnswer answer_text={message.answer} />
      </View>
    ))
  );

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>TOMATIX</Text>
      </View>
      <View style={styles.screen}>
        <ScrollView style={styles.chatbox} ref={chatRef}>
          {renderChat()}
          {loading && <ActivityIndicator size="small" color="#0000ff" />}
        </ScrollView>
        <View style={styles.chatInputContainer}>
          <TextInput
            ref={inputText}
            style={styles.textInput}
            placeholder="Chat here..."
            onChangeText={setQuestion}
            editable={true}
            multiline
          />
          <Button title="Send" onPress={chatAnswer} />
          <Button title="Clear Chat" onPress={handleClearChat} color="#FF0000" />
        </View>
      </View>
      {alrt && alert()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom:150,
  },
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '95%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    padding: 10,
    marginTop: 10,
  },
  chatbox: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  messageContainer: {
    marginVertical: 5,
  },
  question: {
    backgroundColor: '#d4f1d4',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    alignSelf: 'flex-end',
    maxWidth: '80%',
    marginBottom: 2,
    elevation: 1,
    shadowColor: '#888',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginRight: 10,
  },
  title: {
    backgroundColor: '#eef',
    width: '95%',
    padding: 15,
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  titleText: {
    fontFamily: 'Arial',
    color: '#55f',
    fontSize: 24,
    fontWeight: 'bold',
  },
  alertContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '30%',
    borderRadius: 10,
    backgroundColor: '#eef',
    padding: 20,
    shadowColor: '#998',
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 10,
    borderColor: '#888',
    borderWidth: 2,
    width: '80%',
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertText: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  activityIndicator: {
    marginTop: 10,
  },
});
