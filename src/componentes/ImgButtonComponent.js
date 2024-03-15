import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

 function ImgButtonComponent({children}) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert("Imagem clicada!");
        }}
      >
      {children}
      </TouchableOpacity>
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

export default ImgButtonComponent;