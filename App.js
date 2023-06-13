import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import BackgroundSvg from "./assets/svgs/bg";
import TopGridSvg from "./assets/svgs/top_grid";
import { horizontalScale, verticalScale } from "./utils/metrics";
import BottomBox from "./components/bottom_box/bottom_box";
import OptionsRow from "./components/options_row/options_row";
import TopBox from "./components/top_box/top_box";
import CardSvg from "./assets/svgs/card";
import MiddleBox from "./components/middle_box/middle_box";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.background}>
        <BackgroundSvg></BackgroundSvg>
        <View style={styles.grid}>
          <TopGridSvg></TopGridSvg>
        </View>
        <View style={styles.column}>
          <View>
            <OptionsRow></OptionsRow>
          </View>
          <View style={styles.topBox}>
            <TopBox></TopBox>
          </View>
          <View style={styles.middleBox}>
            <MiddleBox></MiddleBox>
          </View>
        </View>
        <View style={styles.bottomBox}>
          <BottomBox></BottomBox>
        </View>
      </ScrollView>
      <StatusBar style={"auto"}></StatusBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: verticalScale(444.21),
    width: horizontalScale(414),
  },
  grid: {
    position: "absolute",
    top: 0,
  },
  column: {
    position: "absolute",
    top: verticalScale(60),
    gap: 0,
    flex: 1,
    width: "100%",
  },
  topBox: {
    marginTop: verticalScale(34),
    alignItems: "center",
  },
  middleBox: {
    marginTop: verticalScale(30),
  },
  bottomBox: {
    position: "absolute",
    top: verticalScale(600),
    right: 0,
  },
});
