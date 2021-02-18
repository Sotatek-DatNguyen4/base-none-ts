import React from 'react';
import { useForm } from 'react-hook-form';

const withReactHookForm = (config) => (Component) => {
  return (props) => {
    const formConfig = config || { mode: 'onChange' };
    const { handleSubmit, ...res } = useForm(formConfig);

    return (
      <Component
        handleSubmit={handleSubmit}
        {...res}
        {...props}
      />
    )
  };
};

export default withReactHookForm;