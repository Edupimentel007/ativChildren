import { StyleSheet, Text, TouchableOpacity} from "react-native";

 function SigInComponent({children}) {
  return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert("SigIn efetuado");
        }}
      >
        {children}
      </TouchableOpacity>   
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

export default SigInComponent;