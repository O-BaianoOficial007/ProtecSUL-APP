import { StyleSheet, Text, View } from 'react-native'

export const Menu = () => {
    return(
        <View style={s.wrapMenu}>
            <Text>avestruz</Text>
            <Text>avestruz</Text>
            <Text>avestruz</Text>
            <Text>avestruz</Text>
            <Text>avestruz</Text>
            <Text>avestruz</Text>
            <Text>avestruz</Text>
        </View>
    )
}


const s = StyleSheet.create({
wrapMenu:{
    gap: 10,
    width: 200,
    height: '100%',
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 900
}
})

