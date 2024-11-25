import { useLocalSearchParams } from "expo-router"
import EditPlanetForm from "../../../components/EditPlanetForm";
import { SafeAreaView } from "react-native";

export default function EditPlanetDetailsScreen() {
    const { planetID } = useLocalSearchParams();

    return (
        <SafeAreaView style={{flex:1}}>
            <EditPlanetForm planetID={planetID} />
        </SafeAreaView>
    )
}