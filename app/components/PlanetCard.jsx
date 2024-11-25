import { ScrollView, StyleSheet, Text, Image, Pressable, FlatList, View, ListView } from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";

// DIMENSIONES
import { useWindowDimensions } from "../../context-providers/WindowDimensionsProvider";
import BackendCaller from "../../auxiliar-classes/BackendCaller";

// RUTAS.
import NAVIGATION_CONSTANTS from "../../constants/navigation";
const PLANET_INDEX_ROUTE = NAVIGATION_CONSTANTS.TAB_ROUTES.PLANET_INDEX_ROUTE;
const EDIT_PLANET_DETAILS_ROUTE = NAVIGATION_CONSTANTS.PLANETS_ROUTES.EDIT_PLANET_DETAILS_ROUTE;

export default function PlanetCard({ planetData }) {
    // Para estilos.
    const { width, height } = useWindowDimensions();
    const [styles, setStyles] = useState(createStyles(width, height));

    useEffect(() => {
        setStyles(createStyles(width, height))
    }, [width, height]);

    // Para navegación.
    const router = useRouter();

    function handleOpenEditPlanetModal() {
        router.push(EDIT_PLANET_DETAILS_ROUTE.replace("[planetID]", planetData.id));
    }

    async function handleDeletePlanet() {
        const response = await BackendCaller.deletePlanet(planetData.id);

        if (response.statusCode === 200) {
            router.replace(PLANET_INDEX_ROUTE);
        }
    }

    return planetData ? (
        <ScrollView contentContainerStyle={styles.rootView}>
            {/* Nombre. */}
            <Text style={styles.planetName}>{planetData.name}</Text>

            {/* Imagen. */}
            <Image
                source={planetData.image ? { uri: planetData.image } : null}
                style={styles.planetImage}
            />

            {/* Descripción. */}
            <Text style={styles.planetDescription}>{planetData.description}</Text>

            {/* Cantidad de lunas. */}
            <Text>Cantidad de lunas: {planetData.moons}</Text>

            {/* Lista de lunas. */}
            <Text>Lunas:</Text>
            <FlatList
                scrollEnabled={false}
                data={planetData.moon_names}
                renderItem={({ item }) => (
                    <Text>- {item}</Text>
                )}
            />

            {/* Botones. */}
            <Pressable style={styles.button} onPress={() => handleOpenEditPlanetModal()}>
                <Text>EDITAR</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => handleDeletePlanet()}>
                <Text>ELIMINAR</Text>
            </Pressable>
        </ScrollView>
    ) : null;
}

function createStyles(width, height) {
    return StyleSheet.create(
        {
            rootView: {
                alignItems: "center"
            },
            planetName: {
                fontSize: 32
            },
            planetDescription: {
                textAlign: "center",
            },
            planetImage: {
                width: width * 0.85,
                height: width * 0.85
            },
            moonListView: {
                flex: 1,
                height: height * 0.5
            },
            button: {
                alignSelf: "center"
            }
        }
    );
}