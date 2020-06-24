import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AsyncStorage } from 'react-native';
import { useForm } from '../../../hooks/useForm';

const LOGIN_MUTATION = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {      
      ok,
      error,
      user {
        id,
        fullname,
        email,
        password,
        token
      }
    }
  }
`;

export const useLogin = () => {
    const [login] = useMutation(LOGIN_MUTATION);
    const { state, handleChange, handleSubmit } = useForm({
      onSubmit: ({ ...values }) => {
        return login({
          variables: {
            input: values
          },
        }).then(({ data }) => {
          return data;
        });
      },
      initialValues: {
        password: '',
        email: ''
      }
    });
    return {
      state,
      handleChange,
      handleSubmit
    };
}