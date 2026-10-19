import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView
} from "react-native";

import { Menu } from "./components/menu";
import { useState } from "react";


export default function FavoritosPag(){
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
            <Text>Favoritos</Text>
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
})