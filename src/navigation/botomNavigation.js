import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreens from "../screens/HomeScreens";
import ProfileScreen from "../screens/ProfileScreen";
import Cart from "../screens/Cart";
import Chat from "../screens/Chat";
import Orders from "../screens/Orders";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    // <Tab.Navigator
    //   screenOptions={({ route }) => ({
    //     headerShown: false,
    //     tabBarIcon: ({ focused, size, color }) => {
    //       let iconName;
    //       if (route.name == "Home") {
    //         iconName = focused ? "home" : "home-outline";
    //       }
    //       if (route.name == "Profile") {
    //         iconName = focused ? "person" : "person-outline";
    //       }
    //       return (
    //         <Ionicons name={iconName} size={size} color={color}></Ionicons>
    //       );
    //     },
    //   })}
    // >
    //   <Tab.Screen name="Home" component={HomeScreens} />
    //   <Tab.Screen name="Profile" component={ProfileScreen} />
    // </Tab.Navigator>
    <HomeBottomTab/>
  );
}

const bottomNav = () => {
  return (
    <NavigationContainer independent={true}>
      <MyTabs></MyTabs>
    </NavigationContainer>
  );
};

const HomeBottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, size, color }) => {
        let iconName;
        if (route.name == "Home") {
          iconName = focused ? "home" : "home-outline";
        }
        if (route.name == "Orders") {
          iconName = focused ? "list" : "list-outline";
        }
        if (route.name == "Chat") {
          iconName = focused ? "chatbox" : "chatbox-outline";
        }
        if (route.name == "Cart") {
          iconName = focused ? "cart" : "cart-outline";
        }
        if (route.name == "Profile") {
          iconName = focused ? "person" : "person-outline";
        }
        return (
          <Ionicons name={iconName} size={size} color={color}></Ionicons>
        );
      },
    })}
  
    tabBarStyle={{
      backgroundColor: '#FF045F',
      backgroundColor: '#FF045F'
    }}
    tabBarOptions={{
      activeTintColor: '#FF045F',
      inactiveTintColor: '#FF045F',
    }}
  >
    <Tab.Screen name="Home" component={HomeScreens} />
    <Tab.Screen name="Orders" component={Orders} />
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
  );
}

export default MyTabs;
