import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Nav from '../navigation/stackNavigation'
import HomeComponent from '../component/homecomponent/HomeComponent'


export default function HomeScreens() {
  return (
    <SafeAreaView>
       <View style={styles.container}>
      <Text>HomeScreens</Text>
    </View>
    </SafeAreaView>

   
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})