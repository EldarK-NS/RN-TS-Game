import React, { ReactElement } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../../config/navigator";

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                title="Game"
                onPress={() => {
                    navigation.navigate("Game", { gameId: "222" });
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
