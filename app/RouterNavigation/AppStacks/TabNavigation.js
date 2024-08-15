import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { TabButton } from "../../Components"; 

const Tab = createBottomTabNavigator();

const TabNavigation = ({ tabs }) => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {tabs.map((item) => (
        <Tab.Screen
          key={item.id}
          name={item.screen}
          component={item.Component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabButton item={item} {...props} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
    position: "absolute",
    bottom: 25,
    marginHorizontal: 16,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#dadada",
  },
});

export default TabNavigation;
