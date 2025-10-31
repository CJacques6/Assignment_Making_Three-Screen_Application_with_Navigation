import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';


const CITIES_DATA = [
  { id: '1', offset: '+2HRS', city: 'Ottawa', time: '7:55PM' },
  { id: '2', offset: '-1HR', city: 'Vancouver', time: '4:55PM' },
  { id: '3', offset: '+0HRS', city: 'Calgary', time: '5:55PM' },
  { id: '4', offset: '+6HRS', city: 'UTC', time: '11:55PM' },
  { id: '5', offset: '+3HRS', city: 'Halifax', time: '8:55PM' },
];


const ClockItem = ({ offset, city, time }) => (
  <View style={styles.itemContainer}>
    <View>
      <Text style={styles.offsetText}>Today, {offset}</Text>
      <Text style={styles.cityText}>{city}</Text>
    </View>
    <Text style={styles.timeText}>{time}</Text>
  </View>
);


export default function WorldClockScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CITIES_DATA}
        renderItem={({ item }) => <ClockItem {...item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  offsetText: { color: 'gray', fontSize: 15 },
  cityText: { color: 'white', fontSize: 28, fontWeight: '300' },
  timeText: { color: 'white', fontSize: 42, fontWeight: '300' },
  separator: { height: 1, backgroundColor: '#333', marginLeft: 20 },
});