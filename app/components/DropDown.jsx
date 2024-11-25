import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function DropDown({ options, onValueChange, placeholder = "Selecciona una opción" }) {
    const [selectedValue, setSelectedValue] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Selecciona una opción:</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => {
                    setSelectedValue(itemValue);
                    if (onValueChange) {
                        onValueChange(itemValue);
                    };
                }}
                style={styles.picker}
            >
                <Picker.Item key={placeholder} label={placeholder} value="" />
                {options.map((option) => (
                    <Picker.Item key={option} label={option} value={option} />
                ))}
            </Picker>
            {selectedValue !== "" && (
                <Text style={styles.selectedText}>Seleccionado: {selectedValue}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        padding: 8,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 8,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: "#333",
    },
    picker: {
        height: 50,
        color: "#000",
    },
    selectedText: {
        marginTop: 8,
        fontSize: 14,
        color: "#555",
    },
});
