import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const World_Clock_Top_Bar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.edit}>Edit</Text>
        <Text style={styles.plus}>+</Text>
      </View>
      <Text style= {styles.title}>World Clock</Text>
    </View>
  )
}

export default World_Clock_Top_Bar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 3,
        maxHeight: 100,
    },
    topBar: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: "row",
        position: 'relative',
        top: 5
    },
    edit: {
        textAlign:'left',
        color: '#ffa500',
        padding: 5,
        fontSize: 20,
    },
    plus: {
        textAlign: "right",
        color: '#ffa500',
        padding: 5,
        fontSize: 30,
    },
    title: {
        color: "#fff",
        fontSize: 32,
        textAlign: 'left',
        padding: 5,
    }
})

