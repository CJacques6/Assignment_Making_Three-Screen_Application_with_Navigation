import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LocationTimeInfo = ({locationName, timeDiff, time, dayPart}) => {

    let location = locationName
    let timeDifference = timeDiff
    let timeOfDay = time
    let partOfDay = dayPart

  return (
    <View style={styles.container}>
      <View style={styles.locationInfo}>
        <Text style={styles.difference}>{timeDifference}</Text>
        <Text style={styles.locationName}>{location}</Text>
      </View>
      <View style={styles.timeBox}>
        <Text style={styles.time}>{timeOfDay}</Text>
        <Text style={styles.dayPart}>{partOfDay}</Text>
      </View>
      
    </View>
  )
}

export default LocationTimeInfo

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#404952ff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: 75,
        height: 75,
    },
    locationInfo: {
        flexDirection: 'column'

    },
    difference: {
        fontSize: 15,
        color: "#333a40ff"
    },
    locationName: {
        color: '#fff',
        fontSize: 25,
    },
    timeBox: {
        flexDirection: 'row',
    },
    time: {
        color: '#fff',
        fontSize: 50,
        position: 'absolute',
        bottom: 5,
        right: 50,
    },
    dayPart: {
        color: '#fff',
        fontSize: 25,
        position: 'absolute',
        bottom: 12,
        right: 15,
    }
})