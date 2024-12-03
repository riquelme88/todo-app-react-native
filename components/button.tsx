import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    title: string,
    onPress: () => void;
}

export const Button = ({ title, onPress }: Props) => {
    return (
        <Pressable onPress={onPress} style={sytles.button}>
            <Text style={sytles.buttonText}>{title}</Text>
        </Pressable>
    )
}

const sytles = StyleSheet.create({
    button: {
        backgroundColor: '#164E85',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})