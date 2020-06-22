import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AsyncStorage } from 'react-native';
import { useForm } from "../../../hooks/useForm";

const REGISTER_MUTATION = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      id
      fullname
      email
      token
    }
  }
`;

export const useRegister = () => {
  const [register] = useMutation(REGISTER_MUTATION);
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit: ({ repeatPassword, ...values }) => {
      console.log("REGISTER", values);
      return register({
        variables: {
          input: values,
        },
      }).then(async ({data}) => {
        console.log("Data", { data });
        const token = data.register.token;
        await AsyncStorage.setItem("token", token);
        return data;
      });
    },
    initialValues: {
      password: '',
      email: '',
      fullname: ''
    }
  });
  return {
    state,
    handleChange,
    handleSubmit,
  };
};
