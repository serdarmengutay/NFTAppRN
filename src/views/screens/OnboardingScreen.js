import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../consts/colors";

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.black, flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <View style={styles.imageBg}>
        <Image
          style={{ height: 250, width: 180, marginTop: 70 }}
          source={require("../../assets/nft.png")}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 50,
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Collecting Best</Text>
        <Text style={styles.title}>NFT Crypto Art</Text>
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.btn}>
          <Text style={{color: COLORS.black, fontWeight: 'bold'  }}>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  imageBg: {
    height: 320,
    width: 220,
    backgroundColor: COLORS.violet,
    marginTop: 70,
    marginHorizontal: 20,
    borderRadius: 40,
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  title: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
  },
  btn: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});

export default OnboardingScreen;
