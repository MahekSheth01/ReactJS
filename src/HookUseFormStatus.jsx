import React from 'react';
import { useFormStatus } from 'react-dom';

const HookUseFormStatus = () => {

  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Form submitted");
  };

  const FormStatus = () => {
    const { pending } = useFormStatus();

    return (
      <div>
        <input type="text" placeholder="Enter Name" /><br /><br />
        <input type="password" placeholder="Enter Password" /><br /><br />

        <button type="submit" disabled={pending}>
          {pending ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>useFormStatus Hook in React 19</h1>
      <form action={handleSubmit}>
        <FormStatus />
      </form>
    </div>
  );
};

export default HookUseFormStatus;
