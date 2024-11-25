import { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import DropDown from "../../components/DropDown";

export default function TestScreen() {
    const [nombre, setNombre] = useState("aaa")

    return (
        <SafeAreaView>
            <Text>TESTS</Text>
            <Text>NOMBRE: {nombre}</Text>

            <DropDown
                options={["hola", "mundo", "a"]}
                onValueChange={setNombre}
            />
        </SafeAreaView>
    )
}