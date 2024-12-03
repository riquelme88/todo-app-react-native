import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { Product } from "../types/product"
import { Link } from "expo-router"

type Props = {
    data: Product
}


export const ProductItem = ({ data }: Props) => {
    return (
        <ScrollView style={styles.body}>
            <Link href={`/product/${data.id}`} asChild>
                <Pressable style={styles.container}>
                    <Image
                        style={styles.img}
                        source={{ uri: data.image }}
                        resizeMode="cover"
                    />
                    <View style={styles.info}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.description}>{data.description}</Text>
                        <Text style={styles.price}>{data.price.toFixed(2)}$</Text>
                    </View>
                </Pressable>
            </Link>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    container: {
        flexDirection: 'row',
        marginBottom: 20
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#ccc'
    },
    info: {
        flex: 1,
        marginLeft: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    description: {
        fontSize: 16,
        color: '#555'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right'
    }
})