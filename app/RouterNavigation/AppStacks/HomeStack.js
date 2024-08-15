import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../../Screens/Home";
import Dukaan from "../../Screens/Dukaan";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dukaan" component={Dukaan} />
    </Stack.Navigator>
  );
};

export {HomeStack};
