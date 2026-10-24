import { Platform, Alert } from "react-native";
import * as SecureStore from "expo-secure-store";

export async function salvar(chave: string, valor: string) {
    if (Platform.OS === "web") {
        localStorage.setItem(chave, valor);
    } else {
        await SecureStore.setItemAsync(chave, valor);
    }
}

export async function ler(chave: string) {
    if (Platform.OS === "web") {
        return localStorage.getItem(chave);
    }
    return await SecureStore.getItemAsync(chave);
}

export function aviso(titulo: string, mensagem: string, aoConfirmar?: () => void) {
    if (Platform.OS === "web") {
        window.alert(`${titulo}\n${mensagem}`);
        aoConfirmar?.();
    } else {
        Alert.alert(titulo, mensagem, [{ text: "OK", onPress: aoConfirmar }]);
    }
}