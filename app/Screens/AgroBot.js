import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
//import style1 from './App.css'
import { Button, ScrollView, TextInput } from 'react-native-web';
import {useState,Modal,Pressable,useRef,useEffect} from 'react'
//import {useScrollToTop} from '@react-navigation/native';
import { ChatAnswer} from '../Components/AgroBotComponent/ChatAnswer';

export default function AgroBot() {
  const [ans,setAns] = useState([{id:1,question:"Hello",answer:"Hello I am your assistant"}]);
  const [question,setQuestion] = useState('');
  var id=2;
  var i;
  const chatref = useRef(null);
  const input_text = useRef(null);
  const [chatans,setchatans] = useState(1);
  const [alrt,setalrt] = useState(1);
  const [modal_view,setmodal_view] = useState(true);

  useEffect(()=>{
    if(chatref.current)
    {
      chatref.current.scrollToEnd({animated:true});
    }
  },[ans]);
  function alert(){
    return(<View style={{alignItems:'center',justifyContent:'center',top:'30%',position:'absolute',borderRadius:'10px',backgroundColor:'#EEF',padding:'3%',shadowColor:'#998',shadowOffset:{height:'0px',width:'0px'},shadowRadius:'1000px',fontSize:'110%',fontFamily:'sans-serif',borderColor:'#888',borderWidth:'2px'}}>
      <p style={{margin:'5px',padding:'5px',borderRadius:'5px'}}><b>You can chat in more languages</b></p>
      <p style={{margin:'5px'}}>Try     <br/>வணக்கம்...<br/>नमस्ते...</p>
      <Button title="Okay" onPress={()=>{setalrt(0)}}></Button>
    </View>);
  }

  async function chatAnswer()
  {
    //console.log(chatans);
    if(question=="" || chatans==0)
    {
      return;
    }
    setchatans(0);
    input_text.current.clear();
    setAns([...ans,{id:id,question:question,answer:"..."}])
    try{
    var answer = await fetch("http://localhost:3000/chat",{method:'POST',body:JSON.stringify({question:question}),headers:{'Content-Type':'application/json'}});
    console.log(answer.formData);//answer.json().then((data)=>{console.log(data.answer)}));
    setAns(ans.filter((s,i)=>i!=id));
    answer.json().then((data)=>{
      
        setAns([...ans,{id:id,question:question,answer:data.answer}])
        //console.log(chatans)
        setchatans(1);
      //   ans.map((m,i)=>
      // {
      //   if(i!=id)
      //   {
      //     return m;
      //   }
      //   else{
      //     return {id:id,question:question,answer:data.answer};
      //   }
      // })
      //   
    });
  }
  catch
  {
    setAns(ans.filter((s,i)=>i!=id));
    setAns([...ans,{id:id,question:question,answer:"Check your connection"}])
        //console.log(chatans)
        setchatans(1);
  }
    //console.log(ans);
    setQuestion('');
    id++;
    //chatans = 1;
  }
  function chat()
  {
    var chats = [];
    for(i=0; i<ans.length; i++)
    {
      chats.push(<View>
    <Text style={styles.question}>{ans[i].question}</Text>
    <ChatAnswer style={styles.answer} answer_text={ans[i].answer}/></View>);
    }
    return chats;
  }
  return (
    <View style={styles.container}>
      {/*<Modal animationType='slide' transparent={true} visible={modal_view} onRequestClose={()=>{setmodal_view(false)}}>
        <View style={styles.container}><Text>Hello</Text>
        <Pressable onPress={()=>{setmodal_view(false)}}>Okay</Pressable></View>
      </Modal>*/}
      <View style={styles.title}><b>TOMATIX</b></View>
      <View style={styles.screen}>
        
              <View style={styles.text}>
                <ScrollView style={styles.text_area} ref={chatref}>
                  {/*ans.map(chat=>{<Text>{/*console.log(chat.id);}<Text style={styles.question}>Hello text_area</Text>
                  <ChatAnswer style={styles.answer} answer_text="ChatAnswer"/></Text>})                  */}
                  {chat()}
                  {/*<Text style={styles.question}>{"hello"}</Text>
                  <ChatAnswer style={styles.answer} answer_text={"Hello"}/>*/  }
                  {/*<Text style={styles.question}>Hello text_area</Text>
                  <ChatAnswer style={styles.answer} answer_text="ChatAnswer"/>*/}
                  </ScrollView>
                  <View style={styles.input}>
                    <View style={{display:'flex',flexDirection:'row',alignSelf:'flex-end', top:'50%'}}>
                    <Button style={{float:'right',width:'25px',display:'flex'}} onPress={chatAnswer} title="Send"/>
                    </View>
                    <View style={{display:'flex',position:'relative',width:'80%',top:'-10px'}}>
              <TextInput
              ref={input_text}
              style={{height:'10vh',fontSize:'120%',padding:'10px',paddingRight:'50px',display:'flex'}}
              placeholder="Chat here..."
              keyboardType="text"
              id="question"
              multiline
              placeholderTextColor="#444"
              onChangeText={setQuestion}
              editable={true ? alrt==0 : false}
            />
            </View>
            </View>
            </View>
      </View>
      {alrt==1 ?alert() : <></>}
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    screen: {
      position:'relative',
      display:'flex',
      backgroundColor:'rgba(0,255,255,0)',
      height:'75vh',
      borderRadius:'20px',
      width:'95%',
      //border:'1px solid grey',
      shadowColor:'rgba(100,100,100,0.5)',
      shadowOffset:{width:0,height:10},
      shadowOpacity:'1',
      elevation:'10',
      shadowRadius:5,
      flexDirection:'column'
    },
    input: {
      height: '10vh',
      margin: '2vh',
      borderRadius:'10px',
      
      fontSize:'120%',
      fontStyle:'bold',
      backgroundColor:'#EEE',
      fontFamily:'Arial',
      shadowColor:'#BBB',
      shadowOffset:{height:10,width:0},
      shadowRadius:10,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:''
    },
    text: {
      display:'inline-flex',
      alignContent:'center',
      justifyContent:'flex-end',
      position:'relative',
      flex:1,
      width:'100%',
      flexDirection:'column'
    },
    text_area:{
      position:'relative',
      //border:'1px solid black',
      height:'10%',
      flex:2,
      borderRadius:'20px',
      padding:'10px',
      overflowY:'auto'
    },
    question:{   
      display:'flex', 
      float:'right',
      //textAlign:'right',
      borderRadius:'10px',
      backgroundColor:'#BFB',
      padding:'10px',
      alignSelf:'flex-end',
      margin:'10px',
      fontSize:'110%'
    },
    answer:{
      display:'flex',
      //textAlign:'left',
      borderRadius:'10px',
      //backgroundColor:'#FFF',
      padding:'10px',
      float:'left',
      alignSelf:'flex-start',
      shadowColor:'gray',
      shadowOffset:{height:5,width:0},
      shadowRadius:'5px',
      justifyContent:'center',
      fontSize:'110%'
      //backgroundImage:URL('./images/tomatix-chatbot-removebg-preview.png')
    },
    title:{
      backgroundColor:'#EEF',
      width:'95%',
      margin:'0px',
      justifyContent:'center',
      alignItems:'center',
      padding:'2%',
      fontFamily:'Arial',
      color:'#55F',
      borderTopRightRadius:'10px',
      borderTopLeftRadius:'10px',
      marginTop:'10px'
    }
  });

