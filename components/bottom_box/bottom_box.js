import { StyleSheet, View, Text } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../utils/metrics";
import { LinearGradient } from "expo-linear-gradient";
import TopGridSvg from "../../assets/svgs/top_grid";
import MaskedView from "@react-native-masked-view/masked-view";
import BottomBoxDecoration from "./box_gradients";
import Coupons from "./coupon";
import RightArrowSvg from "../../assets/svgs/right_chevron";
import BottomBoxSvg from "../../assets/svgs/bottom_box";

const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={["#8381F8", "#00F8F8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 1]}
      >
        <Text
          {...props}
          style={[props.style, { opacity: 0, fontWeight: "bold" }]}
        />
      </LinearGradient>
    </MaskedView>
  );
};
export default function BottomBox() {
  return (
    <View style={styles.container}>
      <BottomBoxSvg></BottomBoxSvg>
      <View style={styles.column}>
        <View style={styles.text}>
          <Text style={styles.headingText}>Discounts & Cashbacks</Text>
          <GradientText style={styles.gradientText}>Hurry Now!</GradientText>
        </View>
        <View style={styles.couponList}>
          <Coupons></Coupons>
          <Coupons></Coupons>
          <Coupons></Coupons>
        </View>
        <View style={styles.explore}>
          <Text style={styles.exploreText}>Explore more</Text>
          <RightArrowSvg></RightArrowSvg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  text: {
    flex: 1,
    gap: 5,
    marginLeft: horizontalScale(16),
  },
  column: {
    position: "absolute",
    marginTop: verticalScale(48),
  },
  headingText: {
    color: "white",
    fontSize: moderateScale(24),
    fontWeight: "500",
  },
  gradientText: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
  },
  couponList: {
    marginTop: verticalScale(40),
    flexDirection: "row",
    gap: horizontalScale(24),
    marginLeft: horizontalScale(16),
  },
  explore: {
    flexDirection: "row",
    marginTop: verticalScale(22),
    marginLeft: horizontalScale(262),
    gap: horizontalScale(4),
    right: horizontalScale(20),
  },
  exploreText: {
    color: "white",
    fontSize: moderateScale(14),
  },
});
