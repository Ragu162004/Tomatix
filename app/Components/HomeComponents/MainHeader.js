import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const MainHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <FontAwesome5 name="" size={24} color="black" />
      <Text style={styles.title}>{title}</Text>
      <FontAwesome5 name="user-circle" size={24} color="#fff" />
    </View>
  );
}

export default MainHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 140,
    backgroundColor: "#0fa284",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  title: {
    fontSize: 30,
    color:'white',
  },
}); 