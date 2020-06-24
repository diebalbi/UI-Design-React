import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useForm } from '../../../../../hooks/useForm';

const REVIEW_MUTATION = gql`
    mutation Review($input: RegisterReview!)  {
        registerReview(input: $input)
        {
            id,
            description,
            rating,
            placeId,
            userId
        }
    }
`;

export const useReview = ({ placeId, userId }) => {
    const [addReview] = useMutation(REVIEW_MUTATION);
    const { state, handleChange, handleSubmit } = useForm({
      onSubmit: ({ ...values }) => {
        console.log("Valores", values);
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