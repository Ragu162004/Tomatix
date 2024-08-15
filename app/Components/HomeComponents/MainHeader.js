import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Material from "react-native-vector-icons/MaterialCommunityIcons";

const MainHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Material name={"robot"} size={25} />
      <Text style={styles.title}>{title}</Text>
      <Material name={"robot"} size={25} />
    </View>
  );
}

export default MainHeader

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 100,
    backgroundColor: "#00d7aa",
  },
  title:{
    fontSize:20,
    
  }
});