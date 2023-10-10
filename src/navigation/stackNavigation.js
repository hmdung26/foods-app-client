import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreens from "../screens/HomeScreens";
import bottomNav from "./botomNavigation"
<<<<<<< HEAD
import MyInformationComponent from "../component/usercomponent/MyInformationComponent";
=======
import Header from "../component/homecomponent/Header";
import { SafeAreaView } from "react-native-safe-area-context";
>>>>>>> dd582f5ce90adad23a354c7235babff2538a25b3
const Stack = createStackNavigator();

function MyStack() {
  return (
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
