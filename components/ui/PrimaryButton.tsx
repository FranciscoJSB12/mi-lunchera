import { ReactNode } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

interface Props {
  pressHandler: () => void;
  children: ReactNode;
}

export const PrimaryButton = ({ pressHandler, children }: Props) => {
  return (
    <Pressable style={styles.container} onPress={pressHandler}>
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1d4ed8",
    width: "95%",
    padding: 14,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFF",
    fontWeight: "500",
  },
});
