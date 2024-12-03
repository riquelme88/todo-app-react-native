import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { getAllProducts, getProductByCategoryId } from "../../../services/product";
import { ProductItem } from "../../../components/productitem";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategoryById } from "../../../services/category";


export default function Screen() {
    const { id } = useLocalSearchParams();
    const idCategory = parseInt(id as string)

    const category = getCategoryById(idCategory)
    if (!category) return router.back();

    const products = getProductByCategoryId(idCategory)

    return (
        <SafeAreaView style={styles.container} >
            <Stack.Screen options={{ title: category.title }} />
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
