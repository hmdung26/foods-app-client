import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreens from "../screens/HomeScreens";
import bottomNav from "./botomNavigation";

import FlashSceen from "../screens/FlashSceen";
import SignIn from "../auth/SignIn";
import SighUp from "../auth/SighUp";
import FogotPass from "../auth/FogotPass";
import GetHelp from "../auth/GetHelp";

import Header from "../component/homecomponent/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          width: "100%",
          height: 120,
        },
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="HomeScreens" component={bottomNav} />
      <Stack.Screen name="FlashScreen" component={FlashSceen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUP" component={SighUp} />
      <Stack.Screen name="FogotPass" component={FogotPass} />
      <Stack.Screen name="GetHelp" component={GetHelp} />
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
