import { Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// CLASES AUXILIARES.
import BackendCaller from "../../../../auxiliar-classes/BackendCaller";

// DIMENSIONES.
import { useWindowDimensions } from "../../../../context-providers/WindowDimensionsProvider";

// COMPONENTES.
import PlanetCard from "../../../components/PlanetCard";

export default function PlanetDetailsScreen() {
    // Para estilos.
    const { width, height } = useWindowDimensions();
    const [styles, setStyles] = useState(createStyles(width, height));

    useEffect(() => {
        setStyles(createStyles(width, height))
    }, [width, height]);

    // Info del planeta.
    const { planetID } = useLocalSearchParams();
    const [planetData, setPlanetData] = useState();

    useEffect(() => {
        async function fetchPlanetData() {
            const response = await BackendCaller.getPlanetByID(planetID);
            if (response.data) {
                setPlanetData(response.data);
            }
        }
        fetchPlanetData();
    }, []);

    return (
        <SafeAreaView>
                {
                    (planetData) ? (
                        <PlanetCard
                            planetData={planetData}
                        />
                    ) : (
                        <Text>No hay información de este planeta.</Text>
                    )
                }
        </SafeAreaView>
    );
}

function createStyles(width, height) {
    return StyleSheet.create(
        {
        }
    );
}