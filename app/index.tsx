import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import World_Clock_Top_Bar from "@/components/World_Clock_Top_Bar";

export default function Index() {

  const router = useRouter();

  return (
    <View
      style={styles.container}
    >
      <World_Clock_Top_Bar/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
})