import { useLocalSearchParams } from "expo-router"
import EditDestinationForm from "../../../components/EditDestinationForm";
import { SafeAreaView } from "react-native";

export default function EditDestinationDetailsScreen() {
    const { destinationID } = useLocalSearchParams();

    return (
        <SafeAreaView style={{flex: 1}}>
            <EditDestinationForm destinationID={destinationID} />
        </SafeAreaView>
    )
}