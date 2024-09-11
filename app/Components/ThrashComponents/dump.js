const screenOptions = {
  tabBarShowLabel: false,
  headerShown:false,
  tabBarStyle: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "#fff",
    borderRadius: 30,
    height: 80,
  },
  unfocused: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
  },

  focused: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004f4a",
    height: "80%",
    width: "80%",
    borderRadius: 30,
  },
};  
  
  
  
  <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused ? styles.focused : styles.unfocused}>
                <MaterialIcons
                  name="home"
                  size={24}
                  color={focused ? "#fff" : "#111"}
                />
                <Text
                  style={{ fontSize: 12, color: focused ? "#fff" : "#111" }}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Dukaan"
        component={Dukaan}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused ? styles.focused : styles.unfocused}>
                <Entypo
                  name="shop"
                  size={24}
                  color={focused ? "#fff" : "#111"}
                />
                <Text
                  style={{ fontSize: 12, color: focused ? "#fff" : "#111" }}
                >
                  Dukaan
                </Text>
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="community chat"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
              </View>
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="Bot"
        component={AgroBot}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused ? styles.focused : styles.unfocused}>
                <Foundation
                  name="graph-bar"
                  size={24}
                  color={focused ? "#fff" : "#111"}
                />
                <Text
                  style={{ fontSize: 12, color: focused ? "#fff" : "#000" }}
                >
                  Price
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="chat"
        component={CommunityChat}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused ? styles.focused : styles.unfocused}>
                <MaterialIcons
                  name="chat"
                  size={24}
                  color={focused ? "#fff" : "#111"}
                />
                <Text
                  style={{ fontSize: 12, color: focused ? "#fff" : "#000" }}
                >
                  Chat
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>

//styles
