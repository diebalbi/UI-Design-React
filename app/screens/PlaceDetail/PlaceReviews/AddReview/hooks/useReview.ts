import { useMutation } from "@apollo/react-hooks";
import { useForm } from '../../../../../hooks/useForm';
import { GET_PLACE } from "../../../../../utility/querys/getPlace";
import { REVIEW_MUTATION } from "../../../../../utility/mutations/addReview";

export const useReview = ({ placeId, userId }) => {
    const [addReview] = useMutation(REVIEW_MUTATION, {
      refetchQueries: [
        {query: GET_PLACE, variables: {placeId} }
      ]
    });
    const { state, handleChange, handleSubmit } = useForm({
      onSubmit: ({ ...values }) => {
        return addReview({
            variables: {
                input: values
            },
        }).then(({ data }) => {
            return data;
        });
      },
      initialValues: {
        rating: 0,
        placeId: placeId,
        userId: userId,
        description: ''
      }
    });
    return {
      state,
      handleChange,
      handleSubmit
    };
}