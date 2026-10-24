import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Item } from '../app/components/item';
import  dados  from './constants/mock';
import { Menu } from "./components/menu";
import { useState } from "react";

export default function CatalogoPag(){
    const [open, setOpen] = useState(false)

    const [busca, setBusca] = useState('')

    const dadosFiltrados = dados.filter((produto) =>
        produto.nome.toLowerCase().includes(busca.toLowerCase().trim())
    )

    return(
        <View style={s.container}>
            <View style={s.cabecaralho}>
                <Image source={require('../assets/images/logoProtecSul2.png')}/>
                <TouchableOpacity style={s.imgMenu} onPress={() => setOpen((prev) => !prev)}>
                    <Image source={require('../assets/images/Menu.png')}/>
                </TouchableOpacity>
            </View>
            {open ? <Menu/> : ''}
            <ScrollView>
                <Text style={s.title} >Catálogo</Text>
                <View style={s.contBusca}>
                    <Image source={require('../assets/images/lupa.png')} style={s.lupa}/>
                    <TextInput
                            style={s.busca}
                            placeholder="Pesquisar produto..."
                            placeholderTextColor="#666666"
                            value={busca}
                            onChangeText={setBusca}
                        />
                </View>
                <View style={s.conteudo}>
                    <FlatList
                        data={dadosFiltrados}
                        renderItem={({item}) => (
                            <Item picture={item.imagem} title={item.nome} preco={item.preco} />
                        )}
                        ListEmptyComponent={<Text>Nenhum produto encontrado</Text>}
                        style={s.prdts}
                    >
                    </FlatList>
                </View>
            </ScrollView>
        </View>
    )
}

const s = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    prdts: {
    },

    conteudo: {
    },

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
        alignSelf: 'center',
        borderRadius: 2,
        fontSize: 30,
        fontFamily: 'Inria Serif',
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#000000',
        marginBottom: 35,
        textAlign:'center',
        marginTop: 25
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

    busca: {
        width: 228,
        height: 32,
        paddingHorizontal: 12,
        backgroundColor: '#D9D9D9',
        borderRadius: 20
    },

    contBusca:{
        display: 'flex',
        width: 268,
        flexDirection: 'row',
        height: 32,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        paddingLeft: 5,
        alignItems: 'center'
    },

    lupa: {
        width: 34,
        height: 25
    },
})