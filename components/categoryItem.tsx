import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Category } from "../types/category"
import { router } from "expo-router"

type Props = {
    data: Category
}

export const CategoryItem = ({ data }: Props) => {
    const handleClick = () => {
        router.push(`/categories/${data.id}`)
    }
    return (
        <Pressable onPress={handleClick} style={styles.container}>
            <Image
                style={styles.img}
                source={{ uri: data.cover }}
                resizeMode="cover"
            />
            <View style={styles.bg}>
                <Text style={styles.imgText}>{data.title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        backgroundColor: '#333',
        borderRadius: 10
    },
    img: {
        width: '100%',
        height: 180,
        borderRadius: 10
    },
    bg: {
        height: 180,
        backgroundColor: 'black',
        opacity: 0.6,
        marginTop: -180,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    }
})