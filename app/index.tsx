import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen() {
    const HandleStart = () => {
        router.replace('/home')
    }


    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.img} source={require('../assets/logo.png')}
                resizeMode="cover"
            />
            <Text style={styles.h1}>Loja do Fulano</Text>
            <Text style={styles.h2}>Aqui você encontra tudo que quiser</Text>
            <Button title="Começar as compras" onPress={HandleStart} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    h2: {
        fontSize: 16,
        marginBottom: 10
    }
})