import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
export default function FlashSceen({ navigation }) {
  const handDone = () => {
    navigation.navigate("SignIn");
  };
  const handSkip = () => {
    navigation.navigate("HomeScreens");
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handDone}
        onSkip={handSkip}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../../assets/animation_ln5g1sqy.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Chào Mừng Đến Với Foods App",
            subtitle: "Hãy Để Trải Nghiệm Ăn Của Bạn Trở Nên Thật Tuyệt",
          },
          {
            backgroundColor: "#fff",

            image: (
              <View style={styles.lottie}>
              <LottieView
                source={require("../../assets/animation_ln9qp7ul.json")}
                autoPlay
                loop
              />
            </View>
            ),
            title: "Đặt Đồ Ăn Nhanh Chóng, Tiện Lợi",
            subtitle: "Giao diện dễ dùng, thân thiện",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={{
                  uri: "https://toigingiuvedep.vn/wp-content/uploads/2022/04/hinh-anh-cafe-buon-uong-ca-phe-mot-minh-dep-nhat-1.jpg",
                }}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  lottie: { width: 300, height: 400 },
});
