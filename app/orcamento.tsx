import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    TextInput,
} from "react-native";
import { useState } from "react";
import { Menu } from "./components/menu";

export default function OrcamentoPag(){
    const [open, setOpen] = useState(false)

    return(
        <View>
            <View style={s.cabecaralho}>
                <Image source={require('../assets/images/logoProtecSul2.png')}/>
                <TouchableOpacity style={s.imgMenu} onPress={() => setOpen((prev) => !prev)}>
                    <Image source={require('../assets/images/Menu.png')}/>
                </TouchableOpacity>
            </View>                      
            {open ? <Menu/> : ''}
            <Text style={s.title}>Orçamento</Text>
            <Text>E-mail:</Text>
            <View>
                <TextInput id="email" placeholder="Digite seu e-mail" style={s.input}/>
            </View>

            <View>
                <Text>Nome/sobrenome completo</Text>
                <TextInput id="nome" placeholder="Digite seu nome/sobrenome completo" style={s.input}/>
            </View>

            <View>
                <Text>Empresa</Text>
                <TextInput id="empresa" placeholder="Digite nome da sua empresa" style={s.input}/>
            </View>

            <View>
                <Text>Telefone</Text>
                <TextInput id="telefone" placeholder="Digite seu telefone" style={s.input}/>
            </View>

            <View>
                <Text>Mensagem</Text>
                <TextInput id="mensagem" placeholder="Digite sua Mensagem" style={s.input}/>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    cabecaralho:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 29,
        width: 402,
        height:65,
        backgroundColor: '#000000'
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

    imgMenu: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFD400',
        zIndex: 999,
        padding: 6,
        width: 46,
        height: 40,
        borderRadius: 4,
       
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
})