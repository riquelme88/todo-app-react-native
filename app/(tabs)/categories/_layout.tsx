import { Stack } from "expo-router";

export default function CategoryLayout() {
    return (
        <Stack screenOptions={{ headerTitleAlign: 'center' }}>
            <Stack.Screen name="list" options={{ title: 'Categorias' }} />
            <Stack.Screen name="[id]" />
        </Stack>
    )
}