// rnfes

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View style={styles.item}>
      {/* <Text>This is a {props.text}</Text> */}

      {/* Square icon to the left */}
      <View style={styles.itemLeft}>
        <View style={styles.squareIcon}>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
      </View>

      {/* Circular icon to the right */}
      <View style={styles.circularIcon}>

      </View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        // Makes the text go to the next line so it doesn't overlap the right
        // icon VVVVV
        flexWrap: 'wrap',
    },
    squareIcon:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText:{
        maxWidth: "80%",
    },
    circularIcon:{
        // To make circle, start with a square and use borderRadius
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderRadius: 5,
        borderWidth: 2,
    },
})