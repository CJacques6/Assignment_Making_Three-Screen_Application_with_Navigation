import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
} from 'react-native';
const formatTime = (time: number): string => {
  const milliseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const pad = (num: number) => num.toString().padStart(2, '0');
  return `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
};
export default function StopwatchScreen() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef(0);
  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, time]);
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };
  const handleLapReset = () => {
    if (isRunning) {
      setLaps(prevLaps => [time, ...prevLaps]);
    } else {
      setTime(0);
      setLaps([]);
    }
  }; 
  const renderLaps = () => {
    if (laps.length === 0) {
      return (
<View style={styles.lapHeader}>
           {/* Placeholder for alignment when no laps */}
</View>
      );
    }
    const lapData = laps.map((lap, index) => ({
      lapNum: laps.length - index,
      time: index === 0 ? lap : lap - laps[index - 1],
    })).reverse(); // Reverse to show latest lap at the bottom
    let minLap = Infinity;
    let maxLap = -Infinity;
    if (lapData.length > 1) {
       lapData.forEach(lap => {
        if (lap.time < minLap) minLap = lap.time;
        if (lap.time > maxLap) maxLap = lap.time;
      });
    }
    return (
<>
<View style={styles.lapHeader}>
<Text style={styles.lapHeaderText}>Lap</Text>
<Text style={styles.lapHeaderText}>Time</Text>
</View>
        {lapData.map((lap) => {
          const isMin = lap.time === minLap;
          const isMax = lap.time === maxLap;
          let lapStyle = styles.lapText;
          if (lapData.length > 1) {
            if (isMin) lapStyle = [styles.lapText, styles.lapTextMin];
            if (isMax) lapStyle = [styles.lapText, styles.lapTextMax];
          }
          return (
<View key={lap.lapNum} style={styles.lapItem}>
<Text style={styles.lapText}>Lap {lap.lapNum}</Text>
<Text style={[lapStyle, styles.lapTimeText]}>{formatTime(lap.time)}</Text>
</View>
          );
        })}
</>
    );
  };
  return (
<SafeAreaView style={styles.container}>
<View style={styles.timerContainer}>
<Text style={styles.timerText}>{formatTime(time)}</Text>
</View> 
      <View style={styles.buttonContainer}>
<Pressable
          style={[styles.button, styles.buttonReset]}
          onPress={handleLapReset}
>
<Text style={styles.buttonResetText}>
            {isRunning ? 'Lap' : 'Reset'}
</Text>
</Pressable>
<Pressable
          style={[
            styles.button,
            isRunning ? styles.buttonStop : styles.buttonStart,
          ]}
          onPress={handleStartStop}
>
<Text
            style={
             isRunning ? styles.buttonStopText : styles.buttonStartText

            }
>

            {isRunning ? 'Stop' : 'Start'}
</Text>
</Pressable>
</View>
 
      <ScrollView style={styles.lapContainer} contentContainerStyle={styles.lapScrollContent}>

        {renderLaps()}
</ScrollView>
</SafeAreaView>

  );

}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },

  timerContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },

  timerText: {
    color: 'white',
    fontSize: 76,
    fontWeight: '200',
    fontVariant: ['tabular-nums'],
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingBottom: 20,
  },

  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonReset: {
    backgroundColor: '#333333',
  },

  buttonResetText: {
    color: 'white',
    fontSize: 16,
  },

  buttonStart: {
    backgroundColor: '#1B361F',
  },

  buttonStartText: {
    color: '#4CD964',
    fontSize: 16,
  },

  buttonStop: {
    backgroundColor: '#3D1C1A',
  },

  buttonStopText: {
    color: '#FF3B30',
    fontSize: 16,
  },

  lapContainer: {
    flex: 0.6,
    width: '90%',
  },

  lapScrollContent: {

    paddingBottom: 20,
  },

  lapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },

  lapHeaderText: {
    color: 'gray',
    fontSize: 14,
  },

  lapItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },

  lapText: {
    color: 'white',
    fontSize: 16,
  },

  lapTimeText: {
    fontVariant: ['tabular-nums'],
  },

  lapTextMin: {
    color: '#FF3B30',
  },

  lapTextMax: {
    color: '#4CD964',
  },

});
 
