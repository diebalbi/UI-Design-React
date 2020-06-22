import * as React from "react";

export const useForm = ({ onSubmit, initialValues }) => {
    const [state, setState] = React.useState(initialValues);
    const handleChange = (key) => (value) => {
      setState({
        ...state,
        [key]: value,
      });
    };
  
    const handleSubmit = async () => {
      return onSubmit(state);
    };
  
    return {
      state,
      handleChange,
      handleSubmit,
    };
};