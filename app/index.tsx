import { router } from "expo-router";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function Home() {
  return (
    <View style={s.container}>
      <Image
        style={s.logo}
        source={require("../assets/images/logoProtecSul1.png")}
      />
      <View style={s.card}>
        <Text>Bem Vindo a ProtecSul EPI’S! O que deseja fazer?</Text>
      </View>
      <TouchableOpacity
        style={s.btnL}
        onPress={() => router.push("/explore.tsx")}
      >
        <Text style={s.btnText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {},

  logo: {},

  card: {},

  btnL: {},

  btnText: {},
});
