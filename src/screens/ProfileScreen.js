import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>ProfileScreen</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default ProfileScreen;
