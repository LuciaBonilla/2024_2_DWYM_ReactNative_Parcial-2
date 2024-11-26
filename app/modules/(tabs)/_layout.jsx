import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "blue",
                tabBarHideOnKeyboard: true,
            }}>
            <Tabs.Screen
                name="DestinationsIndexScreen"
                options={{
                    title: "DESTINOS",
                    tabBarIcon: () => <MaterialIcons name="place" size={24} color="black" />,
                }}
            />
            <Tabs.Screen
                name="CreateDestinationScreen"
                options={{
                    title: "CREAR DESTINO",
                    tabBarIcon: () => <FontAwesome size={28} name="plus" color="black" />,
                }}
            />
        </Tabs>
    );
}