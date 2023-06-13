import { Image, StyleSheet, Text, View } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../utils/metrics";
import CouponSvg from "../../assets/svgs/coupon";
import InsetShadow from "react-native-inset-shadow";

export default function Coupons() {
  return (
    <View style={styles.container}>
      <CouponSvg></CouponSvg>
      <View style={styles.column}>
        <InsetShadow
          containerStyle={styles.indent}
          color="black"
          shadowRadius={20}
          bottom={false}
        >
          <View style={styles.indent}>
            <Image
              source={require("../../assets/netflix.png")}
              style={styles.image}
              resizeMethod={"resize"}
            />
          </View>
        </InsetShadow>
        <Text style={styles.offer}>10%</Text>
        <Text style={styles.offer2}>OFF</Text>
        <Text style={styles.company}>On Netflix {"\n"}Subscription</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    width: "100%",
    position: "absolute",
    top: verticalScale(15),
    alignItems: "center",
  },
  indent: {
    height: verticalScale(64),
    width: horizontalScale(64),
    borderRadius: moderateScale(64),
    alignItems: "center",
  },
  image: {
    height: verticalScale(52),
    width: horizontalScale(52),
    borderRadius: moderateScale(52),
  },
  offer: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  offer2: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  company: {
    marginTop: verticalScale(18),
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
});
