import { useMutation } from "@apollo/react-hooks";
import { useForm } from '../../../hooks/useForm';
import { GET_TRIPS } from "../../../utility/querys/getTrips";
import { TRIP_MUTATION } from "../../../utility/mutations/addTrip";

export const useTrip = ({ userId }) => {
    const [newTrip] = useMutation(TRIP_MUTATION, {
      refetchQueries: [
        {query: GET_TRIPS, variables: { userId } }
      ]
    });
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
