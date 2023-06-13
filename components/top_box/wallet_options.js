import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../utils/metrics";
import BackgroundSvg from "../../assets/svgs/bg";
import TopGridSvg from "../../assets/svgs/top_grid";
import BottomBox from "../bottom_box/bottom_box";
import CardSvg from "../../assets/svgs/card";
import CopySvg from "../../assets/svgs/copy";

export default function WalletOption({ topString, bottomString, color }) {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>{topString}</Text>
      <Text style={[styles.bottomText, { color: `${color}` }]}>
        {bottomString}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: verticalScale(2),
  },
  topText: {
    color: "white",
    fontSize: moderateScale(16),
  },
  bottomText: {
    fontSize: moderateScale(14),
  },
});
