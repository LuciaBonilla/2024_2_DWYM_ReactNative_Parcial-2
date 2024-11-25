import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "blue",
                tabBarHideOnKeyboard: true, // Oculta las Tabs automáticamente
            }}>
            <Tabs.Screen
                name="PlanetIndexScreen"
                options={{
                    title: "PLANETARIO",
                    tabBarIcon: ({ color }) => <Ionicons name="planet" size={24} color="black" />,
                }}
            />
            <Tabs.Screen
                name="CreatePlanetScreen"
                options={{
                    title: "CREAR PLANETA",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} />,
                }}
            />
            <Tabs.Screen
                name="TestScreen"
                options={{
                    title: "prueba",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} />,
                }}
            />
        </Tabs>
    );
}