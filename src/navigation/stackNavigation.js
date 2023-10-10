import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreens from "../screens/HomeScreens";
<<<<<<< HEAD
import bottomNav from "./botomNavigation"
<<<<<<< HEAD
import MyInformationComponent from "../component/usercomponent/MyInformationComponent";
=======
import Header from "../component/homecomponent/Header";
import { SafeAreaView } from "react-native-safe-area-context";
>>>>>>> dd582f5ce90adad23a354c7235babff2538a25b3
=======
import bottomNav from "./botomNavigation";

import FlashSceen from "../screens/FlashSceen";
import SignIn from "../auth/SignIn";
import SighUp from "../auth/SighUp";
import FogotPass from "../auth/FogotPass";
import GetHelp from "../auth/GetHelp";

import Header from "../component/homecomponent/Header";
import { SafeAreaView } from "react-native-safe-area-context";

>>>>>>> 838241bde279ad6e973a0884f46151466f4cc117
const Stack = createStackNavigator();

function MyStack() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreens" component={bottomNav} />
        <Stack.Screen name="MyInformationScreens" component={MyInformationComponent}/>
=======
    <Stack.Navigator screenOptions={{
      headerStyle: {
        width: '100%',
        height: 120
      },
      header: () => <Header />
    }}>
      <Stack.Screen name="HomeScreens" component={bottomNav} />
>>>>>>> dd582f5ce90adad23a354c7235babff2538a25b3
=======
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
>>>>>>> 838241bde279ad6e973a0884f46151466f4cc117
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
