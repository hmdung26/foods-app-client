import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text>My Account</Text>
          <Image
            style={styles.image}
            source={require("../../assets/images/imageAcount.png")}
            resizeMode="cover"
          />
          <Text>DongB</Text>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    width: "100%",
    height: Dimensions.get("window").height / 2.5,
    backgroundColor: "#FF045F",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "30%",
    height: "48.5%",
    borderRadius: 50,
  },
});
