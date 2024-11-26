import { useEffect, useState, useCallback } from "react";
import { Pressable, Text, StyleSheet, Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import { useRouter, useFocusEffect } from "expo-router";

// COMPONENTES.
import NormalTextInput from "./NormalTextInput";
import DropDown from "./DropDown";

import BackendCaller from "../../auxiliar-classes/BackendCaller"

// PROVEEDOR DE CONTEXTO.
import { useWindowDimensions } from "@/context-providers/WindowDimensionsProvider";

// RUTAS.
import NAVIGATION_CONSTANTS from "../../constants/navigation";
const DESTINATIONS_INDEX_ROUTE = NAVIGATION_CONSTANTS.TABS_ROUTES.DESTINATIONS_INDEX_ROUTE;

export default function EditDestinationForm({ destinationID }) {
    // Para estilos.
    const { width, height } = useWindowDimensions();
    const [styles, setStyles] = useState(createStyles(width, height));

    useEffect(() => {
        setStyles(createStyles(width, height))
    }, [width, height]);

    // Para cambiar de ruta.
    const router = useRouter();

    // Detalles a editar.
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [favourite, setFavourite] = useState("");

    useFocusEffect(
        useCallback(() => {
            async function clearInputs() {
                setName("");
                setDescription("");
                setQuantityMoons("");
                setMoonNames("");
                setImageURL("");
            }
    
            clearInputs(); // Llama a la función asincrónica al enfocar la pantalla
        }, []) // La dependencia vacía asegura que solo se ejecute al enfocar
    );

    async function handleEditDestination() {
        if (name !== "" && description !== "" && difficulty !== "" && favourite !== "") {
            const response = await BackendCaller.putDestination(destinationID, name, description, difficulty, favourite === "Favorito" ? true : false);

            if (response.statusCode === 200) {
                router.replace(DESTINATIONS_INDEX_ROUTE);
            }
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView
                style={styles.rootView}
                contentContainerStyle={styles.rootViewContainerStyle}
                keyboardShouldPersistTaps="handled"
            >
                <NormalTextInput
                    inputTitle="NOMBRE"
                    inputName="edit-destination-name"
                    textInputStyle={styles.textInput}
                    viewStyle={styles.inputView}
                    setState={setName}
                    value={name}
                />

                <NormalTextInput
                    inputTitle="DESCRIPCIÓN"
                    inputName="edit-destination-description"
                    textInputStyle={styles.textInput}
                    viewStyle={styles.inputView}
                    setState={setDescription}
                    value={description}
                />

                <DropDown
                    options={["hard", "easy", "medium"]}
                    onValueChange={setDifficulty}
                    placeholder="Selecciona una dificultad"
                />

                <DropDown
                    options={["Favorito", "No favorito"]}
                    onValueChange={setFavourite}
                    placeholder="¿Favorito?"
                />

                <Pressable onPress={() => handleEditDestination()} style={styles.button}>
                    <Text>EDITAR DESTINO</Text>
                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

function createStyles(width, height) {
    return StyleSheet.create({
        rootView: {
            flex: 1,
            padding: 20,
            flexDirection: "column",
            height: height,
            paddingBottom: 150, // Espacio suficiente para el teclado
        },
        rootViewContainerStyle: {
            alignItems: "center",
            justifyContent: "space-between",
            rowGap: 10,
            flexGrow: 1,
            paddingBottom: 20, // Espacio adicional para el teclado
            rowGap: 20,
        },
        textInput: {
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 30,
            fontFamily: "Segoe",
            fontWeight: "bold",
        },
        inputView: {
            position: "relative",
            width: width * 0.85,
        },
        button: {
            backgroundColor: "#280",
            padding: 10,
        }
    })
};