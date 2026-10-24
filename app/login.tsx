import { Label, router } from "expo-router";
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ler, aviso } from "./utils/storage";
import { useState } from "react";


export default function LoginPag() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function fazerLogin() {
        if (!email || !senha) {
            aviso("Atenção", "Preencha e-mail e senha.");
            return;
        }

        try {
            const dados = await ler("usuario");

            if (!dados) {
                aviso("Erro", "Nenhum cadastro encontrado. Faça seu cadastro primeiro.");
                return;
            }

            const usuario = JSON.parse(dados);

            const emailCorreto = usuario.email.trim().toLowerCase() === email.trim().toLowerCase();
            const senhaCorreta = usuario.senha === senha;

            if (emailCorreto && senhaCorreta) {
                router.replace("/explore");
            } else {
                aviso("Erro", "E-mail ou senha incorretos.");
            }
        } catch (erro) {
            aviso("Erro", "Não foi possível verificar o login.");
        }
    }

    return(
        <View style={s.container}>
            <View style={s.cabecaralho}></View>
            <Image style={s.logo} source={require("../assets/images/logoProtecSul1.png")}/>
            <Text style={s.title} >LOGIN</Text>
            <View>
                <Text>E-mail:</Text>
                <TextInput 
                    placeholder="Digite seu e-mail" 
                    style={s.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View>
                <Text>Senha</Text>
                <TextInput 
                    placeholder="Digite sua senha" 
                    style={s.input}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
            </View>
            <TouchableOpacity style={s.btnC} onPress={fazerLogin}>
                <Text style={s.btnText}>FAZER LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const s = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    cabecaralho: {
        width: 402,
        height:65,
        backgroundColor: '#000000'
    },

    logo: { 
        marginVertical: 20,
        paddingHorizontal: 69,
    },

    title: {
        display: 'flex',
        width: 229,
        height: 41,
        backgroundColor: '#ADADAD',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        fontSize: 30,
        fontFamily: 'Inria Serif',
        fontWeight: 'bold',
        borderColor: '#000000',
        marginBottom: 50,
        borderWidth: 1,
    },

    input:{
        width: 290,
        height: 32,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        paddingHorizontal: 17,
        paddingVertical: 6,
        marginBottom: 15,
    },
    btnC: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFD400',
        width: 177,
        height: 35,
        borderRadius: 5,
        marginTop: 30
    },

    btnText: {
        fontSize: 15,
        fontFamily: 'Inria Serif',
        fontWeight: 'bold'
    },
})