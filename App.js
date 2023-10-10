import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/navigation/stackNavigation';
import bottomNav from './src/navigation/botomNavigation';
import FlashSceen from './src/screens/FlashSceen';


export default function App() {
  return (
   <Nav></Nav>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
