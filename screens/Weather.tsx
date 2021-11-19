import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import Greeting from "../components/weather/Greeting";
import MinMax from "../components/weather/MinMax";
import Temperature from "../components/weather/Temperature";
import Wrapper from "../components/weather/Wrapper";
import { StatusBar } from "expo-status-bar";
import Wind from "../components/weather/Wind";
import SunTimes from "../components/weather/SunTimes";

const image = {}

export default function Weather() {
    const unitobj = {
        f: "F",
        c: "C",
    };
    const [units, setUnits] = useState(unitobj.f);
    const handleUnitChange = () => {
        if (units === unitobj.f) {
            setUnits(unitobj.c);
        } else {
            setUnits(unitobj.f);
        }
    };
    return (
        <SafeAreaView
            style={[styles.safearea, { backgroundColor: "lightblue" }]}
        >
                <Wrapper>
                    <View style={styles.container}>
                        <Greeting />
                        <View style={{ flex: 0.3, flexDirection: "row", flexWrap: 'nowrap' }}>
                            <Temperature dUnit={units} />
                            <MinMax
                                dUnit={units}
                                onUnitChange={() => handleUnitChange()}
                            />
                        </View>
                        <View style={{flex: .2}}>
                            <Wind />
                            <SunTimes />
                        </View>
                        <StatusBar style="auto" />
                    </View>
                </Wrapper>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safearea: {
        flex: 1,
    },
});
