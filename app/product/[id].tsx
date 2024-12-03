import { router, Stack, useLocalSearchParams } from "expo-router"
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button } from "../../components/button"
import { getProductById } from "../../services/product";

export default function Screen() {
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string)

    const product = getProductById(idProduct)
    if (!product) return router.back()

    const handleBuyButton = () => {
        alert(`${product.title} - ${product.price}`)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: '' }} />
            <ScrollView style={styles.area}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.img}
                    resizeMode='cover'
                />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.priceArea}>
                    <Text style={styles.price}>{product.price.toFixed(2)}$</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonArea}>
                <Button title="Comprar agora!" onPress={handleBuyButton} />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    area: {
        flex: 1,
        padding: 10,
    },
    buttonArea: {
        padding: 10
    },
    img: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 15
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 22,
        color: '#555',
        marginBottom: 20
    },
    price: {
        textAlign: 'center',
        fontSize: 22
    },
    priceArea: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ccc'
    }
})