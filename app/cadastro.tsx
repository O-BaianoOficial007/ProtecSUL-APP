import { Label, router } from "expo-router";
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function CadastroPag() {
    return(
        <ScrollView>
            <View style={s.container}>
                <View style={s.cabecaralho}></View>
                <Image style={s.logo} source={require("../assets/images/logoProtecSul1.png")}/>
                <Text style={s.title}>CADASTRO</Text>

                <View>
                    <Text>E-mail:</Text>
                    <TextInput id="email" placeholder="Digite seu e-mail" style={s.input}/>
                </View>

                <View>
                    <Text>Senha</Text>
                    <TextInput id="senha" placeholder="Digite sua senha" style={s.input}/>
                </View>

                <View>
                    <Text>Nome/sobrenome completo</Text>
                    <TextInput id="nome" placeholder="Digite seu nome/sobrenome completo" style={s.input}/>
                </View>

                <View>
                    <Text>Empresa</Text>
                    <TextInput id="senha" placeholder="Digite nome da sua empresa" style={s.input}/>
                </View>

                <View>
                    <Text>Telefone</Text>
                    <TextInput id="senha" placeholder="Digite seu telefone" style={s.input}/>
                </View>

                <TouchableOpacity style={s.btnC} onPress={() => router.push("/explore")}>
                        <Text style={s.btnText}>FAZER LOGIN</Text>
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