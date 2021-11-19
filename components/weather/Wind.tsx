import React, { SetStateAction, useEffect, useState } from "react";

import {StyleSheet,  ActivityIndicator, FlatList, Text, View } from "react-native";
import getWind from "../../api/getWind";
import { Feather} from '@expo/vector-icons'

const getRotation = (deg: number) => {
    return `${(deg + 180) % 360}deg`;
}

export default function Wind() {
  const [isLoading, setLoading] = useState(false);
  const [windStats, setWindStats] = useState([]);
  const [degrees, setDegrees] = useState("0deg");
  useEffect(() => {
    const grabWindStats = async () => {
      const temp: SetStateAction<any> = await getWind();
      
      if (temp) {
        setLoading(false);
      }
      setWindStats(temp);
    };
    grabWindStats();
    setDegrees(getRotation(windStats[1]).toString());
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
        <Text style = {[styles.windspeed, ]}>{windStats[0]} mph</Text>
        <Feather name="arrow-up" size = {34} color = "black" style = {{transform: [{rotate: degrees}]}}/>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  windspeed: {
    fontSize: 34,
    fontFamily: "Rubik_300Light"
  },
  container: {
    flex: .3,
    justifyContent: 'center',
    alignItems: "baseline",
    flexDirection: 'row',
  }
})