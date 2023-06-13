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
import WalletOption from "./wallet_options";

export default function TopBox() {
  return (
    <View style={styles.container}>
      <CardSvg></CardSvg>
      <View style={styles.infoColumn}>
        <Text style={styles.infoText}>Combined Wallet Balance</Text>
        <Text style={styles.balance}>₹ ******</Text>
        <View style={styles.walletOptions}>
          <WalletOption
            topString={"Varun Jaiswal"}
            bottomString={"Active"}
            color={"#4DD052"}
          ></WalletOption>
          <WalletOption
            topString={"****"}
            bottomString={"Card No."}
            color={"grey"}
          ></WalletOption>
          <WalletOption
            topString={"--/--"}
            bottomString={"Exp."}
            color={"grey"}
          ></WalletOption>
          <WalletOption
            topString={"***"}
            bottomString={"CVV"}
            color={"grey"}
          ></WalletOption>
        </View>
      </View>
      <View style={styles.copySvg}>
        <CopySvg></CopySvg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(242),
    width: horizontalScale(379),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  copySvg: {
    position: "absolute",
    top: verticalScale(168),
    right: horizontalScale(12),
  },
  infoColumn: {
    position: "absolute",
    top: verticalScale(40),
    alignItems: "center",
  },
  infoText: {
    color: "white",
    fontSize: moderateScale(14),
  },
  balance: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  walletOptions: {
    flexDirection: "row",
    marginTop: verticalScale(50),
    marginRight: horizontalScale(72.78),
    gap: horizontalScale(16),
  },
});
