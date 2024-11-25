import NAVIGATION_CONSTANTS from "@/constants/navigation";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function PlanetsLayout() {
    return (
        <Stack>
            <Stack.Screen name="PlanetDetailsScreen/[planetID]" options={{ headerTitle: "DETALLES DEL PLANETA" }} />
            <Stack.Screen
                name="EditPlanetDetailsScreen/[planetID]"
                options={{
                    presentation: "modal",
                    headerTitle: "EDITAR PLANETA"
                }}
            />
        </Stack>
    );
}