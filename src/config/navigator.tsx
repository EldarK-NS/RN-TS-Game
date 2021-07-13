import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/home";
import Game from "../screens/game/game";

export type StackNavigatorParams = {
    Home: undefined;
    Game: { gameId: string };
};

const Stack = createStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }} >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Game" component={Game} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
