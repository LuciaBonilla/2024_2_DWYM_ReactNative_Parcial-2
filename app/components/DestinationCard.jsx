import { StyleSheet, Text, Pressable, View, Platform } from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";

// ÍCONOS.
import AntDesign from '@expo/vector-icons/AntDesign';

// DIMENSIONES
import { useWindowDimensions } from "../../context-providers/WindowDimensionsProvider";
import BackendCaller from "../../auxiliar-classes/BackendCaller";

// RUTAS.
import NAVIGATION_CONSTANTS from "../../constants/navigation";
const DESTINATIONS_INDEX_ROUTE = NAVIGATION_CONSTANTS.TABS_ROUTES.DESTINATIONS_INDEX_ROUTE;
const EDIT_DESTINATION_DETAILS_ROUTE = NAVIGATION_CONSTANTS.DESTINATIONS_ROUTES.EDIT_DESTINATION_DETAILS_ROUTE;

export default function DestinationCard({ destination, fetchAllDestinations }) {
    // Para estilos.
    const { width, height } = useWindowDimensions();
    const [styles, setStyles] = useState(createStyles(width, height, destination.difficulty));

    useEffect(() => {
        setStyles(createStyles(width, height, destination.difficulty))
    }, [width, height]);

    // Para navegación.
    const router = useRouter();

    function handleOpenEditDestinationModal() {
        router.push(EDIT_DESTINATION_DETAILS_ROUTE.replace("[destinationID]", destination.id));
    }

    async function handleDeleteDestination() {
        const response = await BackendCaller.deleteDestination(destination.id);

        if (response.statusCode === 200) {
            router.push(DESTINATIONS_INDEX_ROUTE);
            fetchAllDestinations();
        }
    }

    // Estado local de la tarjeta.
    const [icon, setIcon] = useState(getFavouriteIcon(destination.favourite));
    const [favourite, setFavourite] = useState(destination.favourite);

    function getFavouriteIcon(favouriteState) {
        if (favouriteState === true) {
            if (Platform.OS === "android") {
                return (<AntDesign name="star" size={32} color="#f5ec42" />)
            } else {
                if (Platform.OS === "ios") {
                    return (<AntDesign name="heart" size={32} color="#f54242" />)
                }
            }
        } else {
            if (Platform.OS === "android") {
                return (<AntDesign name="staro" size={32} color="#f5ec42" />)
            } else {
                if (Platform.OS === "ios") {
                    return (<AntDesign name="hearto" size={32} color="#f54242" />)
                }
            }
        }
    }

    async function switchFavouriteState() {
        const response = await BackendCaller.putDestination(
            destination.id,
            destination.name,
            destination.description,
            destination.difficulty,
            !favourite
        )

        if (response.statusCode === 200) {
            setIcon(getFavouriteIcon(!favourite));
            setFavourite(!favourite)
        }
    }

    return destination ? (
        <View style={styles.rootView}>
            <Text style={styles.destinationName}>{destination.name}</Text>
            <Text>{destination.description}</Text>
            <Text style={styles.tagStyle}>{destination.difficulty}</Text>
            <Text>{(favourite) ? "Favorito" : "No favorito"}</Text>
            
            <Pressable onPress={() => switchFavouriteState()}>
                {icon}
            </Pressable>
            
            <Pressable style={styles.button} onPress={() => handleOpenEditDestinationModal()}>
                <Text>EDITAR</Text>
            </Pressable>
            
            <Pressable style={styles.button} onPress={() => handleDeleteDestination()}>
                <Text>ELIMINAR</Text>
            </Pressable>
        </View>
    ) : null;
}

function createStyles(width, height, difficulty) {
    return StyleSheet.create(
        {
            rootView: {
                alignItems: "center",
                backgroundColor: "#fff",
                width: width*0.85,
                borderRadius: 10,
                padding: 10,
                rowGap: 10,
            },
            destinationName: {
                fontSize: 32
            },
            tagStyle: {
                backgroundColor: (difficulty === "easy") ? "#26bd53" : ((difficulty === "medium") ? "#f54242" : "#f54242"),
                padding: 5,
                borderRadius: 5,
            },
            button: {
                alignSelf: "center",
                backgroundColor: "#ccf",
                padding: 10,
            }
        }
    );
}