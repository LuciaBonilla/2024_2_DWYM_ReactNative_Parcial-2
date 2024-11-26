import { useRouter } from "expo-router";
import { Text, FlatList, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

// DIMENSIONES.
import { useWindowDimensions } from "../../context-providers/WindowDimensionsProvider";

import DestinationCard from "./DestinationCard";

export default function DestinationList({ data, fetchAllDestinations }) {
    // Para estilos.
    const { width, height } = useWindowDimensions();
    const [styles, setStyles] = useState(createStyles(width, height));

    useEffect(() => {
        setStyles(createStyles(width, height))
    }, [width, height]);

    return (
        (data.length > 0) ? (
            <FlatList
                data={data}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <DestinationCard
                        destination={item}
                        fetchAllDestinations={fetchAllDestinations}
                    />
                )}
            />
        ) : (
            <Text>No hay destinos</Text>
        )
    );
}

function createStyles(width, height) {
    return StyleSheet.create(
        {
            list: {
                alignItems: "center",
                backgroundColor: "#84a",
                rowGap: 20,
                width: width*0.85,
                paddingVertical: 10,
            },
        }
    );
}