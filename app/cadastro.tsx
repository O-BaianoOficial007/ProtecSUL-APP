import { Label, router } from "expo-router";
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { salvar, aviso } from "./utils/storage";
import { useState } from "react";


export default function CadastroPag() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [telefone, setTelefone] = useState("");

    async function fazerCadastro() {
        if (!email || !senha || !nome || !empresa || !telefone) {
            aviso("Atenção", "Preencha todos os campos.");
            return;
        }

        const usuario = { email, senha, nome, empresa, telefone };

        try {
            await salvar("usuario", JSON.stringify(usuario));
            aviso("Sucesso", "Cadastro realizado!");
            router.replace('/login');
        } catch (erro) {
            aviso("Erro", "Não foi possível salvar o cadastro.");
        }
    }
    return(
        <ScrollView>
            <View style={s.container}>
                <View style={s.cabecaralho}></View>
                <Image style={s.logo} source={require("../assets/images/logoProtecSul1.png")}/>
                <Text style={s.title}>CADASTRO</Text>

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
                    />
                </View>

                <View>
                    <Text>Nome/sobrenome completo</Text>
                    <TextInput 
                        placeholder="Digite seu nome/sobrenome completo" 
                        style={s.input}
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

                <View>
                    <Text>Empresa</Text>
                    <TextInput 
                        placeholder="Digite nome da sua empresa" 
                        style={s.input}
                        value={empresa}
                        onChangeText={setEmpresa}
                    />
                </View>

                <View>
                    <Text>Telefone</Text>
                    <TextInput 
                        placeholder="Digite seu telefone" 
                        style={s.input}
                        value={telefone}
                        onChangeText={setTelefone}
                        keyboardType="phone-pad"
                    />
                </View>

                <TouchableOpacity style={s.btnC}>
                        <Text style={s.btnText} onPress={fazerCadastro}>FAZER CADASTRO</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
        marginTop: 20,
        marginBottom: 15,
    },

    btnText: {
        fontSize: 15,
        fontFamily: 'Inria Serif',
        fontWeight: 'bold'
    },
})