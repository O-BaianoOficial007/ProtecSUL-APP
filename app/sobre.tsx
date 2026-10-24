import { router } from "expo-router";
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



export default function SobrePag() {
    const [open, setOpen] = useState(false)


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
                <Text style={s.title} >SOBRE NÓS</Text>

                <Text style={s.paragrafo} >A ProtecSul EPI's nasceu com o propósito de oferecer soluções em Equipamentos de Proteção Individual (EPIs), contribuindo para a segurança, o bem-estar e a qualidade de vida dos profissionais nos mais diversos ambientes de trabalho.<br/><br/>Ao longo de sua trajetória, a empresa vem construindo sua atuação com base em princípios como qualidade, responsabilidade, comprometimento e confiança, buscando entender as necessidades de cada cliente e oferecer produtos adequados às diferentes atividades e níveis de proteção exigidos</Text>

                <Text style={s.paragrafo} >Nossa missão vai além da comercialização de equipamentos. A ProtecSul EPI's acredita que a segurança deve fazer parte da rotina de todas as empresas e profissionais. Por isso, trabalhamos para disponibilizar produtos que auxiliem na prevenção de acidentes e na proteção dos trabalhadores, sempre prezando pela qualidade e pela confiabilidade.<br/><br/>Contamos com um portfólio desenvolvido para atender diferentes segmentos e necessidades, oferecendo soluções em proteção individual para empresas, indústrias, comércios, profissionais autônomos e demais clientes que valorizam a segurança no ambiente de trabalho.</Text>

                <Text style={s.subtitle}>Nossos Compromissos</Text>

                <Text style={s.paragrafo}>Na ProtecSul EPI's, cada cliente é tratado como um parceiro. Nosso compromisso é oferecer atendimento próximo, produtos de qualidade e soluções eficientes, ajudando empresas e profissionais a encontrarem os equipamentos mais adequados para suas atividades.<br/><br/>Buscamos constantemente aprimorar nossos produtos, serviços e atendimento, acompanhando as necessidades do mercado e mantendo o foco naquilo que realmente importa: proteger pessoas e contribuir para ambientes de trabalho mais seguros</Text>

                <Text style={s.subtitle}>Nossa Visão</Text>

                <Text style={s.paragrafo}>Ser reconhecida como uma empresa de referência em soluções de proteção individual, destacando-se pela qualidade dos produtos, excelência no atendimento e compromisso com a segurança de seus clientes.</Text>

                <Text style={s.subtitle}>Nossos Valores</Text>

                <Text style={s.paragrafo}>Segurança: colocamos a proteção das pessoas em primeiro lugar. Qualidade: buscamos oferecer produtos confiáveis e adequados às necessidades de nossos clientes. Compromisso: trabalhamos com responsabilidade e dedicação em cada atendimento. Confiança: construímos relacionamentos duradouros e transparentes com nossos clientes e parceiros. Responsabilidade: acreditamos na importância de contribuir para ambientes de trabalho cada vez mais seguros.</Text>
            </ScrollView>
        </View>
    );
}


const s = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
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

    subtitle:{
        fontFamily: 'Inria Serif',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 27,
        marginBottom: 20
    },
    
    paragrafo: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#FFD400',
        padding: 4,
        marginBottom: 10,
        paddingHorizontal: 7,
        borderRadius: 10,
        marginHorizontal: 54,
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