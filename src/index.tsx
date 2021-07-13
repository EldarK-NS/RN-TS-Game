import { StatusBar } from "expo-status-bar";
import React, { ReactElement } from "react";
import { StyleSheet } from "react-native";
import AppBootstrap from "./components/app-bootstrap/app-bootstrap";
import Navigator from "./config/navigator";

export default function App(): ReactElement {
    return (
        <AppBootstrap>
            <StatusBar />
            <Navigator />
        </AppBootstrap>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center"
//     }
// });
