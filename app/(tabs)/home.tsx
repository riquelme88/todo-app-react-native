import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/productitem";

export default function Screen() {
    const products = getAllProducts()

    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem data={item} />}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20
    }
})
