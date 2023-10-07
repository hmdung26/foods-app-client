import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreens from "../screens/HomeScreens";
import bottomNav from "./botomNavigation"
import MyInformationComponent from "../component/usercomponent/MyInformationComponent";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreens" component={bottomNav} />
        <Stack.Screen name="MyInformationScreens" component={MyInformationComponent}/>
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
