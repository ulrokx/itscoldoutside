import React, { SetStateAction, useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, FlatList, Text, View } from "react-native";
import getSunTimes from "../../api/getSunTimes";
import { Feather } from '@expo/vector-icons'
export default function SunTimes() {
  const [isLoading, setLoading] = useState(true);
  const [sunTimes, setSunTimes] = useState([]);
  useEffect(() => {
    const grabSunTimes = async () => {
      const temp: SetStateAction<any> = await getSunTimes();
      if (temp) {
        setLoading(false);
      }
      setSunTimes(temp);
    };
    grabSunTimes();
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
        <Feather name="sunrise" size={34} color="black"/>
        <Text style = {styles.text}>{sunTimes[0]}</Text>
        <Feather name="sunset" size={34} color="black"/>
        <Text style = {styles.text}>{sunTimes[1]}</Text>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    paddingHorizontal: 15,
    fontFamily: 'Rubik_300Light'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',


  }
}
)
