import React, { SetStateAction, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import getTemperature from '../../api/getTemperature'
export default function Temperature ({dUnit}) {
  const [isLoading, setLoading] = useState(true);
const [temperature, setTemperature] = useState(0);
  useEffect(() => {
      const grabTemperature = async () => {
      const temp = await getTemperature();
      if(temp) {
        setLoading(false);
      }
      setTemperature(temp);
    }
    grabTemperature();
  })  

  

  return (
    <View style={styles.wrapper}>
      {isLoading ? <ActivityIndicator/> : (
        <>
        <Text style ={styles.temperature}
        adjustsFontSizeToFit>{
        (dUnit === "F")
        ? temperature
        : ((temperature - 32) * (5/9)).toFixed(1) 
        }</Text>
        <Text style = {styles.degree}
        adjustsFontSizeToFit>°{dUnit}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: '2%',
    justifyContent: 'center',
   flexDirection: 'row',
   
  },
  temperature: {
    fontSize: 130,
    fontWeight: 'bold',
    fontFamily: 'Rubik_700Bold'
  },
  degree: {
    fontSize: 30,
    marginTop: '5%',
    fontFamily: 'Rubik_300Light'
  }
})