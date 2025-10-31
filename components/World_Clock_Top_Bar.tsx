import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const World_Clock_Top_Bar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.edit}>Edit</Text>
        <Text style={styles.plus}>+</Text>
      </View>
      <Text>World Clock</Text>
    </View>
  )
}

export default World_Clock_Top_Bar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
    },
    topBar: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        color: '#f39c12',
    },
    edit: {
        textAlign:'left',
    },
    plus: {
        textAlign: "right",
    }
})

