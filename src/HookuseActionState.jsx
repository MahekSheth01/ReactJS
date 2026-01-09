import React, { useActionState } from "react";

const HookuseActionState = () => {

  const handleSubmit = async (prevState, formData) => {
    const name = formData.get("name");
    const password = formData.get("password");

    await new Promise((res) => setTimeout(res, 2000));

    if (!name || !password) {
      return { error: "Please enter all fields",name,password };
    }

    return { message: "Data Submitted!!",name,password };
  };

  const [data, action, pending] = useActionState(handleSubmit, null);

  return (
    <div>
      <h1>useActionState Hook</h1>

      <form action={action}>
        <input defaultValue={data?.name} type="text" name="name" placeholder="Enter name" />
        <br /><br />

        <input defaultValue={data?.password} type="password" name="password" placeholder="Enter password" />
        <br /><br />

        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit data"}
        </button>

        <br /><br />

        {data?.error && <span style={{ color: "red" }}>{data.error}</span>}
        {data?.message && <span style={{ color: "green" }}>{data.message}</span>}
      </form>

      <hr />
      <h2>Name : {data?.name}</h2>
      <h2>Password : {data?.password}</h2>
    </div>
  );
};

export default HookuseActionState;
