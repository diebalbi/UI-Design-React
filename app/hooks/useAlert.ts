import { Alert } from "react-native";

export const useAlert = ({titleError, errorMessage}) => {
    Alert.alert(
      titleError,
      errorMessage,
      [
        { text: "OK"}
      ],
      { cancelable: false }
    );
};
