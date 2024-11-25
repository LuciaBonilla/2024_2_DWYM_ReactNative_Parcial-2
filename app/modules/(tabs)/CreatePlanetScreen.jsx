import { SafeAreaView } from "react-native-safe-area-context";
import CreatePlanetForm from "../../components/CreatePlanetForm";

export default function CreatePlanetScreen() {
    return (
        <SafeAreaView style={{flex: 1}} >
            <CreatePlanetForm/>
        </SafeAreaView>
    );
}