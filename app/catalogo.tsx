import { StyleSheet, Text, View, FlatList } from "react-native";
import { Item } from '../app/components/item';
import  dados  from './constants/mock'

export default function CatalogoPag(){
    return(
        <View>
            <FlatList data={dados} renderItem={({item}) => (
                    <Item picture={item.imagem} title={item.nome} preco={item.preco} />
                )} style={s.prdts}>
            </FlatList>
        </View>
    )
}

const s = StyleSheet.create({
    prdts: {
        
    }
})