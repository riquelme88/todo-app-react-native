import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function tabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerTitleAlign: 'center' }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={32}
                        name="home"
                        color={color}
                    />
                }}
            />
            <Tabs.Screen
                name="categories"
                options={{
                    title: 'Categorias',
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={32}
                        name="archive"
                        color={color}

                    />,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre mim',
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={32}
                        name="user"
                        color={color}
                    />
                }}
            />
        </Tabs>

    )
}