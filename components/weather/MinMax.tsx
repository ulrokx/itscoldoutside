import React, { SetStateAction, useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
    ActivityIndicator,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import getMinMax from "../../api/getMinMax";
export default function MinMax({ dUnit, onUnitChange }) {
    const [isLoading, setLoading] = useState(true);
    const [minMax, setMinMax] = useState([]);
    useEffect(() => {
        const grabMinMax = async () => {
            const temp: SetStateAction<any> = await getMinMax();
            if (temp) {
                setLoading(false);
            }
            setMinMax(temp);
        };
        grabMinMax();
    });

    return (
        <View style={styles.wrapper}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <>
                    <Text style={styles.text}
                    adjustsFontSizeToFit>
                        {dUnit === "F"
                            ? minMax[0]
                            : ((minMax[0] - 32) * (5 / 9)).toFixed(1)}
                        °{dUnit}
                    </Text>
                    <Pressable
                        onPress={onUnitChange}
                        hitSlop = {{top: 15, bottom: 15, left: 15, right: 15}}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? "darkblue" : "lightblue",
                            },
                            styles.button,
                        ]}
                        
                    >
                        <Entypo
                            name="dots-three-vertical"
                            size={28}
                            color="black"
                        />
                    </Pressable>
                    <Text style={styles.text}
                    adjustsFontSizeToFit>
                        {dUnit === "F"
                            ? minMax[1]
                            : ((minMax[1] - 32) * (5 / 9)).toFixed(1)}
                        °{dUnit}
                    </Text>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Rubik_300Light",
    },
    wrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        borderRadius: 8,
    },
});
