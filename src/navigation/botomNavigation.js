import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import HomeScreens from "../screens/HomeScreens";
import FlashSceen from "../screens/FlashSceen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name == "Home") {
            iconName = focused ? "home" : "home-outline";
          }
          return (
            <Ionicons name={iconName} size={size} color={color}></Ionicons>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreens} />
      

    </Tab.Navigator>
  );
}

const bottomNav = () => {
  return (
    <NavigationContainer independent={true}>
      <MyTabs></MyTabs>
    </NavigationContainer>
  );
};
export default MyTabs;
