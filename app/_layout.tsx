import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Switch,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Alarm = {
  id: string;
  time: string;
  period: string;
  label: string;
  isEnabled: boolean;
};

type AlarmItemProps = {
  time: string;
  period: string;
  label: string;
  isEnabled: boolean;
  onToggle: () => void;
};

const ALARMS_DATA: Alarm[] = [
  { id: '1', time: '12:00', period: 'AM', label: 'Alarm', isEnabled: false },
  { id: '2', time: '3:30', period: 'AM', label: 'Alarm', isEnabled: true },
  { id: '3', time: '4:00', period: 'AM', label: 'Alarm', isEnabled: true },
];

const AlarmItem: React.FC<AlarmItemProps> = ({ time, period, label, isEnabled, onToggle }) => {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.timeText}>
          {time}
          <Text style={styles.periodText}> {period}</Text>
        </Text>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      
      <Switch
        trackColor={{ false: '#3e3e3e', true: '#4CD964' }}
        thumbColor={'#ffffff'}
        onValueChange={onToggle}
        value={isEnabled}
      />
    </View>
  );
};

export default function AlarmsScreen() {
  const [alarms, setAlarms] = useState<Alarm[]>(ALARMS_DATA);

  const toggleSwitch = (id: string) => {
    setAlarms(currentAlarms =>
      currentAlarms.map(alarm =>
        alarm.id === id ? { ...alarm, isEnabled: !alarm.isEnabled } : alarm
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={alarms}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <AlarmItem {...item} onToggle={() => toggleSwitch(item.id)} />
        )}
        ListHeaderComponent={
          <>
            <View style={styles.sleepSection}>
              <View style={styles.sleepLeft}>
                <Ionicons name="bed-outline" size={20} color="white" style={{ marginRight: 8 }} />
                <Text style={styles.sleepTitle}>Sleep | Wake Up</Text>
              </View>
              <Pressable style={styles.setupButton}>
                <Text style={styles.setupButtonText}>SET UP</Text>
              </Pressable>
            </View>
            <Text style={styles.otherHeader}>Other</Text>
          </>
        }
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
  sleepSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    borderTopWidth: 1,
    borderTopColor: '#333',
    marginTop: 10,
  },
  sleepLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sleepTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  setupButton: {
    backgroundColor: '#2C2C2E',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  setupButtonText: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 12,
  },
  otherHeader: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  timeText: {
    color: 'white',
    fontSize: 42,
    fontWeight: '200',
  },
  periodText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '200',
  },
  labelText: {
    color: 'white',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#333',
    marginLeft: 15,
  },
});
