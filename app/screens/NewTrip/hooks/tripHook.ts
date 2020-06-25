import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useForm } from '../../../hooks/useForm';

const TRIP_MUTATION = gql`
    mutation RegisterTrip($input: RegisterTrip!) {
        registerTrip(input: $input)
        {
            ok,
            error,
            trip {
                id,
                name,
                userId
            }
        }
    }
`;

export const useTrip = ({ userId }) => {
    const [newTrip] = useMutation(TRIP_MUTATION);
    const { state, handleChange, handleSubmit } = useForm({
      onSubmit: ({ ...values }) => {
        return newTrip({
          variables: {
            input: values
          },
        }).then(({ data }) => {
          return data;
        });
      },
      initialValues: {
        name: '',
        userId: userId
      }
    });
    return {
      state,
      handleChange,
      handleSubmit
    };
}