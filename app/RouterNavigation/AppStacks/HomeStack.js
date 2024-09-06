import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../../Screens/Home";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="WeatherForecast" component={Home} />
    </Stack.Navigator>
  );
};

export {HomeStack};
