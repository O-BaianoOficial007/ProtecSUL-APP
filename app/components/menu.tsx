import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { router } from "expo-router";


export const Menu = () => {


    return(
        <View style={s.wrapMenu}>
            <View style={s.cabecaralho}>
                <TouchableOpacity style={s.imgMenu}>
                    <Image source={require('@/assets/images/Menu.png')}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={s.botao} onPress={() => router.push('../sobre')}>
                <Text style={s.Txtbotao}>Sobre Nós</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={s.botao} onPress={() => router.push('../explore')}>
                <Text style={s.Txtbotao}>Página Inicial</Text>
            </TouchableOpacity>
                
            <TouchableOpacity style={s.botao} onPress={() => router.push('../catalogo')}>
                <Text style={s.Txtbotao}>Catálogo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={s.botao} onPress={() => router.push('../orcamento')}>
                <Text style={s.Txtbotao}>Orçamento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={s.botao} onPress={() => router.push('../favoritos')}>
                <Text style={s.Txtbotao}>Favoritos</Text>
            </TouchableOpacity>
            
        </View>
    )
}


const s = StyleSheet.create({
    wrapMenu:{
        gap: 10,
        width: 200,
        height: '100%',
        backgroundColor: '#000000e5',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 900
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

    cabecaralho:{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 29,
        width: 200,
        height:65,
        backgroundColor: '#000000'
    },

    botao: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    Txtbotao: {
        color: '#ffffff',
        fontFamily: 'Inria Serif',
        fontWeight: 'bold',
        fontSize: 20
    }

})

