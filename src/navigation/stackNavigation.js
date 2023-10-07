import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreens from "../screens/HomeScreens";
import bottomNav from "./botomNavigation"
import Header from "../component/homecomponent/Header";
import { SafeAreaView } from "react-native-safe-area-context";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        width: '100%',
        height: 120
      },
      header: () => <Header />
    }}>
      <Stack.Screen name="HomeScreens" component={bottomNav} />
    </Stack.Navigator>
  );
}

const Nav = () => {
  return (
    <NavigationContainer independent={true}>
      <MyStack></MyStack>
    </NavigationContainer>
  );
};
export default Nav;
