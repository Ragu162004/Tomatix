import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const MainHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.user}>
        <View style={styles.circle}></View>
        <View style={styles.message}>
          <Text style={styles.greeting}>Welcome, </Text>
          <Text style={styles.namecard}>User</Text>
        </View>
      </View>
    </View>
  );
}

export default MainHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingVertical:70,
    height: 200,
    backgroundColor: "#0fa284",
    borderBottomRightRadius: 27,
    borderBottomLeftRadius: 27,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  user: {
    display:'flex',
    flexDirection:'row',
    width:'60%',
    justifyContent:'space-around',
    alignItems:'center',
  },
  greeting: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 27,
  },
  namecard:{
    color: '#fff',
    fontWeight: '500',
    fontSize: 20,
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
  }

}); 