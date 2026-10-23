import { ImageSourcePropType, View, Text, Image, StyleSheet } from "react-native";


export const Item = ({picture, title, preco} : {picture: ImageSourcePropType | undefined, title: string, preco: number}) => {
    return(
        <View style={s.card}>
            <Image source={picture}/>
            <View style={s.content}>
                <Text style={s.title}>{title}</Text>
                <Text>{preco}</Text>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    card:{
        display: 'flex',
        backgroundColor: '#D9D9D9',
        margin: 30,
        borderRadius: 10,
    },
    content:{
        padding: 10,
        gap: 5
    },
    title:{
        fontWeight: 'bold',
        color: '#4C4C4C'
    },
    
})
