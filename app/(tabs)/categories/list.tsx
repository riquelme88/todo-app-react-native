import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/categoryItem";


export default function Screen() {
    const categories = getAllCategories()

    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryItem data={item} />}
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
