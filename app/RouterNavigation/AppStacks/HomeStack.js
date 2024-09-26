import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../../Screens/Home";
import { DukaanStack } from "./DukaanStack";
import { DiseaseDetection } from "../../Components/Disease Detection/DiseaseDetection";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DiseaseDetection" component={DiseaseDetection} />
    </Stack.Navigator>
  );
};

export {HomeStack};
