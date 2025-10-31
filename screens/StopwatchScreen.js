import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AlarmsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alarms Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
