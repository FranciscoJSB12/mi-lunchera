import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, PrimaryButton } from "../components";

export const SignUpScreen = () => {
  const [inputs, setInputs] = useState({});

  const changeTextHandler = (name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Nombre"
        onChangeText={(value) => changeTextHandler("nombre", value)}
      />
      <Input
        placeholder="Apellido"
        onChangeText={(value) => changeTextHandler("appelido", value)}
      />
      <Input
        placeholder="Correo electrónico"
        onChangeText={(value) => changeTextHandler("correo", value)}
      />
      <Input
        placeholder="Contraseña"
        onChangeText={(value) => changeTextHandler("contraseña", value)}
        secureTextEntry={true}
      />
      <PrimaryButton pressHandler={() => console.log(inputs)}>
        Crear cuenta
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
