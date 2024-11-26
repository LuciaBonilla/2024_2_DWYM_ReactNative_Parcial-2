import { useEffect, useState, useCallback } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "expo-router";

// CLASES AUXILIARES.
import BackendCaller from "../../../auxiliar-classes/BackendCaller";

// DIMENSIONES
import { useWindowDimensions } from "../../../context-providers/WindowDimensionsProvider";

// COMPONENTES.
import DestinationList from "../../components/DestinationList";
import { Zocial } from "@expo/vector-icons";

export default function DestinationsIndexScreen() {
    // Para estilos.
    const { width, height } = useWindowDimensions();
    const [styles, setStyles] = useState(createStyles(width, height));

    useEffect(() => {
        setStyles(createStyles(width, height))
    }, [width, height]);

    // Destinos.
    const [destinations, setDestinations] = useState([]);

    // Para controlar la carga.
    const [isLoading, setIsLoading] = useState(true);

    function sortDestinations(destinations) {
        return destinations.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }

    async function fetchAllDestinations() {
        setIsLoading(true); // Muestra el indicador de carga
        const response = await BackendCaller.getAllDestinations();

        if (response.data) {
            setDestinations(sortDestinations(response.data));
        }
        setIsLoading(false); // Oculta el indicador de carga al finalizar
    }

    useFocusEffect(
        useCallback(() => {
            fetchAllDestinations(); // Llama a la función asincrónica al enfocar la pantalla
        }, []) // La dependencia vacía asegura que solo se ejecute al enfocar
    );

    return (
        <SafeAreaView style={styles.rootView}>
            {
                !isLoading ? (
                    <DestinationList
                        data={destinations}
                        fetchAllDestinations={fetchAllDestinations}
                    />
                ) : (
                    <Text>CARGANDO...</Text>
                )
            }
        </SafeAreaView>
    );
}

function createStyles(width, height) {
    return StyleSheet.create(
        {
            rootView: {
                flex: 1,
                alignItems: "center",
                backgroundColor: "#84a",
            }
        }
    );
}