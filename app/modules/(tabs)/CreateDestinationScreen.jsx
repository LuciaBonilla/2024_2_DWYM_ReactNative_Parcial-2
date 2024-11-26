import { SafeAreaView } from "react-native-safe-area-context";
import CreateDestinationForm from "../../components/CreateDestinationForm";

export default function CreateDestinationScreen() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <CreateDestinationForm/>
        </SafeAreaView>
    );
}