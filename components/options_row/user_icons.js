import { StyleSheet, Text, View } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../utils/metrics";

export default function UserIcons() {
  return (
    <View style={styles.container}>
      <View style={styles.iconLeft}>
        <Text style={styles.text}>SJ</Text>
      </View>
      <View style={styles.iconRight}>
        <Text style={styles.text}>VJ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    gap: -8,
  },
  iconLeft: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#044D8F",
    borderWidth: 2,
    borderColor: "rgba(79,130,177,1)",
    justifyContent: "center",
    alignItems: "center",
  },
  iconRight: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#293693",
    borderWidth: 2,
    borderColor: "rgba(105,114,179, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
