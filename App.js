import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/navigation/stackNavigation';
import bottomNav from './src/navigation/botomNavigation';
import MyInformationComponent from './src/component/usercomponent/MyInformationComponent';


export default function App() {
  return (
  //  <Nav></Nav>
   <MyInformationComponent/>
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
