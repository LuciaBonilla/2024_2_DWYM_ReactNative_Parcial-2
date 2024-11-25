import { useRouter } from "expo-router";
import { Text, FlatList, Pressable, StyleSheet, Image } from "react-native";
import { useState, useEffect } from "react";

// RUTAS.
import NAVIGATION_CONSTANTS from "../../constants/navigation";

// DIMENSIONES.
import { useWindowDimensions } from "../../context-providers/WindowDimensionsProvider";

const USED_ROUTE_1 = NAVIGATION_CONSTANTS.PLANETS_ROUTES.PLANET_DETAILS_ROUTE;

export default function PlanetsList({ data }) {
    // Para estilos.
    const { width, height } = useWindowDimensions();
    const [styles, setStyles] = useState(createStyles(width, height));

    useEffect(() => {
        setStyles(createStyles(width, height))
    }, [width, height]);

    // Para navegación.
    const router = useRouter()

    function handleGoToPlanetDetailsScreen(planetID) {
        router.push(USED_ROUTE_1.replace("[planetID]", planetID));
    }

    return (
        (data.length > 0) ? (
            <FlatList
                data={data}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <Pressable onPress={() => handleGoToPlanetDetailsScreen(item.id)}>
                        <Text style={styles.planetName}>{item.name}</Text>
                        <Image source={item.image ? { uri: item.image } : null} style={styles.planetImage} />
                    </Pressable>
                )}
            />
        ) : (
            <Text>No hay planetas</Text>
        )
    );
}

function createStyles(width, height) {
    return StyleSheet.create(
        {
            list: {
                alignItems: "center",
                backgroundColor: "#64a",
                rowGap: 20,
                paddingVertical: 20
            },
            planetImage: {
                width: width * 0.85,
                height: width * 0.30,
                borderRadius: 10
            },
            planetName: {
                fontSize: 16,
                color: "#fff",
                padding: 10,
                backgroundColor: "#64c",
                borderRadius: 5,
            }
        }
    );
}