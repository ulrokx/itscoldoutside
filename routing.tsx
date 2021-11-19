import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContextProvider, AuthData } from "./state/authState";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Weather from "./screens/Weather";
import { useFonts } from "expo-font";
import { Kalam_400Regular } from "@expo-google-fonts/kalam";
import { Rubik_300Light, Rubik_700Bold } from "@expo-google-fonts/rubik";
import AppLoading from "expo-app-loading";
export default function Routing() {
    const Stack = createNativeStackNavigator();

    const state = React.useContext(AuthData);

    let [fontsLoaded] = useFonts({
        Kalam_400Regular,
        Rubik_300Light,
        Rubik_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
                <Stack.Navigator>
                    {state.isSignout ? (
                        <>
                            <Stack.Screen
                                name="Login"
                                component={Login}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="Register"
                                component={Register}
                                options={{ headerShown: false }}
                            />
                        </>
                    ) : (
                        <Stack.Screen
                            name="Weather"
                            component={Weather}
                            options={{ headerShown: false }}
                        />
                    )}
                </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
