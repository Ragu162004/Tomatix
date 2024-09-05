
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Platform } from "react-native";
import TabNavigation from "./AppStacks/TabNavigation"; 
import { tabs } from "./tabs"; 

const BaseStack = () => {
  return (
    <NavigationContainer>
      <TabNavigation tabs={tabs} />
      <StatusBar hidden={true}/> 
    </NavigationContainer>
  );
};

export default BaseStack;
