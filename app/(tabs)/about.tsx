import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Screen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Sobre mim</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})