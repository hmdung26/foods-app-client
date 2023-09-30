import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import HomeScreens from "../screens/HomeScreens";
import ProfileScreen from "../screens/ProfileScreen";

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
          if (route.name == "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return (
            <Ionicons name={iconName} size={size} color={color}></Ionicons>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreens} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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
