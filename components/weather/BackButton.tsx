import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import * as RN from 'react-native'
import React from 'react'
const BackButton = ({
    onPress
}) => {
    return (
        <Pressable
        onPress={onPress}
        style = {styles.float}
        >
            <View>
<Ionicons name="arrow-back" size={50} color="black" />
            </View>
        </Pressable>
    )
}

export default BackButton;

const styles = StyleSheet.create({
    float: {
        position: 'absolute',
        top: '3%',
        left: '4%',
        borderWidth:5,
        borderColor: 'lightblue',
        borderRadius: 25
    }
})
