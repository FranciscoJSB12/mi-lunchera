import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../../util";

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  value: string;
}

export const Input = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = () => {
    setIsFocused(true);
  };

  const endEditingHandler = () => {
    setIsFocused(false);
  };

  const inputStyles = isFocused
    ? [styles.input, { borderColor: colors.blue, borderWidth: 2 }]
    : styles.input;

  return (
    <TextInput
      style={inputStyles}
      onFocus={focusHandler}
      onEndEditing={endEditingHandler}
      autoCorrect={false}
      autoComplete="off"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "95%",
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    fontSize: 14,
  },
});
