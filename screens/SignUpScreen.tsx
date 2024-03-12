import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, PrimaryButton } from "../components";
import { colors } from "../util";

interface Inputs {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export const SignUpScreen = () => {
  const [inputs, setInputs] = useState({} as Inputs);

  const changeTextHandler = (name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Nombre"
        onChangeText={(value) => changeTextHandler("name", value)}
        value={inputs.name || ""}
      />
      <Input
        placeholder="Apellido"
        onChangeText={(value) => changeTextHandler("lastName", value)}
        value={inputs.lastName || ""}
      />
      <Input
        placeholder="Correo electrónico"
        onChangeText={(value) => changeTextHandler("email", value)}
        value={inputs.email || ""}
      />
      <Input
        placeholder="Contraseña"
        onChangeText={(value) => changeTextHandler("password", value)}
        secureTextEntry={true}
        value={inputs.password || ""}
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
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
