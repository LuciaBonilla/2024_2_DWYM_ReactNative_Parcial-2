import NAVIGATION_CONSTANTS from "@/constants/navigation";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function DestinationsLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="EditDestinationDetailsScreen/[destinationID]"
                options={{
                    presentation: "modal",
                    headerTitle: "EDITAR DESTINO"
                }}
            />
        </Stack>
    );
}