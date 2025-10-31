import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';

const NavBar = (screen) => {

    const router = useRouter();

    let app = screen

    if (app = 'clock') {}
    if (app = 'alarm') {}
    if (app = 'stopwatch') {}
    if (app = 'timer') {}

  return (
    <View style = {styles.navbar}>
        <Text style={styles.worldClock}>World Clock</Text>
      <Text style={styles.alarms}>Alarms</Text>
      <Text style={styles.stopwatch}>Stopwatch</Text>
      <Text style={styles.timers}>Timers</Text>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    navbar:{
        flex:1,
        position: 'relative',
        position: 'absolute',
        bottom: 0,
        flexDirection: "row",
        backgroundColor: "#222528ff",
        maxHeight: 50,
        height: 50,
        width: '100%',
    },
    worldClock: {
        color:"#444d54ff",
        fontSize: 15,
        position: 'absolute',
        bottom: 5,
        left: 5,
    },
    alarms: {
        color:"#444d54ff",
        position: 'absolute',
        bottom: 5,
        left: '30%',
        fontSize: 15,
    },
    stopwatch: {
        color:"#444d54ff",
        position: 'absolute',
        bottom: 5,
        right: '30%',
        fontSize: 15,
    },
    timers: {
        color:"#444d54ff",
        position: 'absolute',
        bottom: 5,
        right: 5,
        fontSize: 15,
    },
})