import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [submit, setSubmit] = useState(false);

  const doneSubmit = (data) => {
    console.log(data);
    setSubmit(true);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(doneSubmit)} className="form">
          {submit ? <h1>Registration Successful!!!</h1> : <h1>Register Now!!</h1>}
          <div className="Input-section">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input"
              {...register("Name", { required: "Enter your Name",minLength: {
                value: 3,
                message: "Name must be more than 4 characters",
              },
              maxLength: {
                value: 30,
                message: "Name cannot be more than 20 characters",
              }, })}
            ></input>
            <span>{errors.Name?.message}</span>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("Email", {
                required: "Enter your Email",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
            ></input>
            <span>{errors.Email?.message}</span>
            <label>Password</label>
            <input
  type="password"
  placeholder="Password"
  className="input"
  {...register("Password", {
    required: "Enter Password",
    pattern: {
      value: /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
      message: "Password must contain at least one special character",
    },
    minLength: {
      value: 10,
      message: "Password must contain atleast 10 characters",
    },
  })}
></input>

            <span>{errors.Password?.message}</span>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter Password"
              className="input"
              {...register("RePassword", {
                required: "Re-Enter your Password",
                validate: (value) =>
                  value === watch("Password") || "Password does not match",
              })}
            ></input>
            <span>{errors.RePassword?.message}</span>
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
