import { StyleSheet, View } from 'react-native';
import React from 'react';

export default function Wrapper ({children}: {children:any}) {
    return(
        <View style = {styles.wrapper}>{children}</View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'lightblue',
        flex: 1,
        padding: 22,
        paddingTop: '10%',
    }
})