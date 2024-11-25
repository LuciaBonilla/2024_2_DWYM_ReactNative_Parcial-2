import { useEffect, useState, useCallback } from "react";
import { Pressable, Text, StyleSheet, Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import { useRouter, useFocusEffect } from "expo-router";

// COMPONENTES.
import NormalTextInput from "./NormalTextInput";

// CLASES AUXILIARES.
import BackendCaller from "./../../auxiliar-classes/BackendCaller"

// PROVEEDOR DE CONTEXTO.
import { useWindowDimensions } from "@/context-providers/WindowDimensionsProvider";

// RUTAS.
import NAVIGATION_CONSTANTS from "../../constants/navigation";
const PLANET_INDEX_ROUTE = NAVIGATION_CONSTANTS.TAB_ROUTES.PLANET_INDEX_ROUTE;

export default function CreatePlanetForm() {
    // Para estilos.
    const { width, height } = useWindowDimensions();
    const [styles, setStyles] = useState(createStyles(width, height));

    useEffect(() => {
        setStyles(createStyles(width, height))
    }, [width, height]);

    // Para cambiar de ruta.
    const router = useRouter();

    // Detalles a agregar.
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantityMoons, setQuantityMoons] = useState("");
    const [moonNames, setMoonNames] = useState("");
    const [imageURL, setImageURL] = useState("");

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

    async function handleCreatePlanet() {
        const moonNamesArray = await moonNames.split(","); // Separa el string por comas.
        await setQuantityMoons(moonNamesArray.length);
        const response = await BackendCaller.postPlanet(name, description, quantityMoons, moonNamesArray, imageURL);

        if (response.statusCode === 201) {
            router.replace(PLANET_INDEX_ROUTE);
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
                    inputName="create-planet-name"
                    textInputStyle={styles.textInput}
                    viewStyle={styles.inputView}
                    setState={setName}
                    value={name}
                />

                <NormalTextInput
                    inputTitle="DESCRIPCIÓN"
                    inputName="create-planet-description"
                    textInputStyle={styles.textInput}
                    viewStyle={styles.inputView}
                    setState={setDescription}
                    value={description}
                />

                <NormalTextInput
                    inputTitle="NOMBRES DE LUNAS (separe los nombres por coma)"
                    inputName="create-planet-moon-names"
                    textInputStyle={styles.textInput}
                    viewStyle={styles.inputView}
                    setState={setMoonNames}
                    value={moonNames}
                />

                <NormalTextInput
                    inputTitle="IMAGEN URL"
                    inputName="create-planet-image-url"
                    textInputStyle={styles.textInput}
                    viewStyle={styles.inputView}
                    setState={setImageURL}
                    value={imageURL}
                />

                <Pressable onPress={() => handleCreatePlanet()}>
                    <Text>CREAR PLANETA</Text>
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
            rowGap: 20,
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
        }
    })
};