import LocationTimeInfo from "@/components/Location_time_info";
import World_Clock_Top_Bar from "@/components/World_Clock_Top_Bar";
import { StyleSheet, View } from "react-native";
import NavBar from "@/components/nav_bar";

export default function Index() {

  return (
    <View
      style={styles.container}
    >
      <World_Clock_Top_Bar/>
      <LocationTimeInfo locationName='Ottawa' timeDiff='Today, +2HRS' time='7:55' dayPart='PM'/>
      <LocationTimeInfo locationName='Vancouver' timeDiff='Today, -1HR' time='4:55' dayPart='PM'/>
      <LocationTimeInfo locationName='Calgary' timeDiff='Today, +0HRS' time='5:55' dayPart='PM'/>
      <LocationTimeInfo locationName='UTC' timeDiff='Today, +6HRS' time='11:55' dayPart='PM'/>
      <LocationTimeInfo locationName='Halifax' timeDiff='Today, +3HRs' time='8:55' dayPart='PM'/>
      <NavBar screen='clock' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: 'black',
  },
})