import { useMutation } from "@apollo/react-hooks";
import { useForm } from '../../../hooks/useForm';
import { LOGIN_MUTATION } from "../../../utility/mutations/doLogin";

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