import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


function ChatAnswer({answer_text})
{
    return(
      <view >
       <Image source={require('./tomatix-chatbot-removebg-preview.png')} style={{width:'30px',height:'40px',resizeMode:'contain',display:'block'}}/>
        <Text style={styles.answer}>{answer_text}</Text>
        </view>
    )
}

const styles = StyleSheet.create({
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
      }
});
export {ChatAnswer};