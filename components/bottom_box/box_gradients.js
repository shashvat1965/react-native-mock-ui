import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TopGridSvg from "../../assets/svgs/top_grid";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../utils/metrics";

export default function BottomBoxDecoration() {
  return (
    <View>
      <LinearGradient
        colors={["#2373A0", "#093A59"]}
        style={styles.bottomGradient}
      />
      <LinearGradient
        colors={["#1F3F6C", "#23475E"]}
        style={styles.bottomGradient}
      />
      <LinearGradient
        colors={[
          "rgba(93, 189, 231, 0.35)",
          "rgba(43, 91, 163, 0.6648)",
          "rgba(54, 68, 118, 0.68)",
          "#000000",
        ]}
        style={styles.bottomGradient}
        locations={[1, 0.6012, 0.4224, 0.3]}
      />
      <TopGridSvg></TopGridSvg>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomGradient: {
    position: "absolute",
    top: 0,
    width: horizontalScale(394),
    height: verticalScale(428),
    borderTopLeftRadius: 12,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderBottomLeftRadius: 12,
  },
});
