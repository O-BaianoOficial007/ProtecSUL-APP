import { router } from "expo-router";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function Explore() {
  return (
    <View style={s.container}>
      <View style={s.cabecaralho}></View>
      <Image
        style={s.logo}
        source={require("../assets/images/logoProtecSul1.png")}
      />
      <View style={s.card}>
        <Text style={s.cardT}>Bem Vindo a ProtecSul EPIs! O que deseja fazer?</Text>
      </View>
      <TouchableOpacity style={s.btnL} onPress={() => router.push("/sobre")}>
        <Text style={s.btnText}>SOBRE NÓS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.btn} onPress={() => router.push("/catalogo")}>
        <Text style={s.btnText}>CATÁLOGO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.btn} onPress={() => router.push("/orcamento")}>
        <Text style={s.btnText}>ORÇAMENTO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.btn} onPress={() => router.push("/favoritos")}>
        <Text style={s.btnText}>FAVORITOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 69,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: { 
    marginVertical: 20,
  },

  card: {
   backgroundColor: '#FFD400',
   width: 270,
   height: 47,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 4
  },

  cardT:{
    fontSize: 15,
    fontFamily: 'Inria Serif',
    paddingHorizontal: 11
  },

  btnL: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD400',
    width: 177,
    height: 35,
    borderRadius: 5,
    marginTop: 46
  },

  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD400',
    width: 177,
    height: 35,
    borderRadius: 5,
    marginTop: 30
  },

  cabecaralho:{
    width: 402,
    height:65,
    backgroundColor: '#000000'
  },

  btnText: {
    fontSize: 15,
    fontFamily: 'Inria Serif',
    fontWeight: 'bold'
  },
});