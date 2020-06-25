import { useMutation } from "@apollo/react-hooks";
import { useForm } from "../../../hooks/useForm";
import { REGISTER_MUTATION } from "../../../utility/mutations/doRegister";

export const useRegister = () => {
  const [register] = useMutation(REGISTER_MUTATION);
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit: ({ repeatPassword, ...values }) => {
      console.log("REGISTER", values);
      return register({
        variables: {
          input: values,
        },
      }).then(({data}) => {
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
