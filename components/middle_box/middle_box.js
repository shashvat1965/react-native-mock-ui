import { StyleSheet, View, Text } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../utils/metrics";
import TransferSvg from "../../assets/svgs/transfer";
import AddSvg from "../../assets/svgs/add";
import WithdrawSvg from "../../assets/svgs/withdraw";
export default function MiddleBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quick Actions</Text>
      <View style={styles.innerBox}>
        <View style={styles.quickOptions}>
          <View style={styles.quickOption}>
            <AddSvg></AddSvg>
            <Text style={styles.quickOptionText}>Add</Text>
          </View>
          <View style={styles.quickOption}>
            <TransferSvg></TransferSvg>
            <Text style={styles.quickOptionText}>Transfer</Text>
          </View>
          <View style={styles.quickOption}>
            <WithdrawSvg></WithdrawSvg>
            <Text style={styles.quickOptionText}>Withdraw</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(680),
    width: horizontalScale(414),
    backgroundColor: "#F8F9FF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  heading: {
    marginTop: verticalScale(29),
    marginLeft: horizontalScale(18),
    fontSize: moderateScale(16),
    color: "black",
    fontWeight: "500",
  },
  innerBox: {
    backgroundColor: "white",
    height: verticalScale(100),
    width: horizontalScale(383),
    borderRadius: moderateScale(16),
    marginTop: verticalScale(11),
    marginLeft: horizontalScale(16),
    elevation: 5,
    shadowColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  quickOptions: {
    flexDirection: "row",
    gap: horizontalScale(54),
  },
  quickOption: {
    alignItems: "center",
    gap: verticalScale(8),
  },
  quickOptionText: {
    fontSize: moderateScale(14),
  },
});
