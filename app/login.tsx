import { Label } from "expo-router";
import { Text, TextInput, View, Image, StyleSheet } from "react-native";

export default function Explore() {
    return(
        <View style={s.container}>
            <View style={s.cabecaralho}></View>
            <Image style={s.logo} source={require("../assets/images/logoProtecSul1.png")}/>
            <Text style={s.title} >LOGIN</Text>
            <View>
                <Text>E-mail:</Text>
                <TextInput id="email" placeholder="Digite seu e-mail" style={s.input}/>
            </View>
            <View>
                <Text>Senha</Text>
                <TextInput id="senha" placeholder="Digite sua senha" style={s.input}/>
            </View>
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
        borderColor: '#000000'
    },

    input:{},

})