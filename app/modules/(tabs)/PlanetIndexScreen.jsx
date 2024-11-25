import { useEffect, useState, useCallback } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "expo-router";

// CLASES AUXILIARES.
import BackendCaller from "../../../auxiliar-classes/BackendCaller";

// DIMENSIONES
import { useWindowDimensions } from "../../../context-providers/WindowDimensionsProvider";

// COMPONENTES.
import PlanetsList from "../../components/PlanetsList";

export default function PlanetIndexScreen() {
    // Para estilos.
    const { width, height } = useWindowDimensions();
    const [styles, setStyles] = useState(createStyles(width, height));

    useEffect(() => {
        setStyles(createStyles(width, height))
    }, [width, height]);

    // Planetas.
    const [planets, setPlanets] = useState([]);

    // Para controlar la carga.
    const [isLoading, setIsLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            async function fetchAllPlanets() {
                setIsLoading(true); // Muestra el indicador de carga
                const response = await BackendCaller.getAllPlanets();
    
                if (response.data) {
                    setPlanets(response.data);
                }
                setIsLoading(false); // Oculta el indicador de carga al finalizar
            }
    
            fetchAllPlanets(); // Llama a la función asincrónica al enfocar la pantalla
        }, []) // La dependencia vacía asegura que solo se ejecute al enfocar
    );

    return (
        <SafeAreaView>
            {
                !isLoading ? (
                        <PlanetsList
                            data={planets}
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
                flex: 1
            }
        }
    );
}