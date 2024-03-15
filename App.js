import { StyleSheet, View, Text, Image } from "react-native";
import LoginComponent from "./src/componentes/LoginComponent";
import ImgButtonComponent from "./src/componentes/ImgButtonComponent";
import SigInComponent from "./src/componentes/SigInComponent";

function App() {
  return (
    <View style={styles.container}>
      <LoginComponent>
      <Text>Login</Text>
      </LoginComponent>
      <ImgButtonComponent>
      <Image source={require('./src/imagens/login.png')} resizeMode='contain' style={{ height: 100, width: 100}} />
      </ImgButtonComponent>
      <SigInComponent>
      <Text>SigIn</Text>
      </SigInComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default App;
