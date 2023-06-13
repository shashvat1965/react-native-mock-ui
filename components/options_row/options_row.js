import { StyleSheet, Text, View } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../utils/metrics";
import UserIcons from "./user_icons";
import NotificationSvg from "../../assets/svgs/notification";
import ArchiveSvg from "../../assets/svgs/archive";

export default function OptionsRow() {
  return (
    <View style={styles.container}>
      <View style={styles.cardHolders}>
        <UserIcons></UserIcons>
        <Text style={styles.cardHolderName}>Varun and Saumya</Text>
      </View>
      <View style={styles.optionIcons}>
        <ArchiveSvg></ArchiveSvg>
        <NotificationSvg></NotificationSvg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: horizontalScale(16),
    flex: 1,
  },
  cardHolders: {
    flexDirection: "row",
    gap: horizontalScale(12),
    alignItems: "center",
  },
  cardHolderName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  optionIcons: {
    flexDirection: "row",
    gap: horizontalScale(12),
    alignItems: "center",
  },
});
