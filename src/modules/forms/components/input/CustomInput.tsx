import { FieldError, useFormContext } from "react-hook-form";
import { useState } from "react";
import { VisibilityIcon } from "../visibility/visibilityIcon";
import classes from "./customInput.module.scss";

export type CustomInputProps = {
  label: string;
  name: string;
  type: string;
  errors?: string | undefined;
};

const CustomInput = ({ label, name, type }: CustomInputProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [typeInput, setTypeInput] = useState<string>(type);

  const handleVisibility = () => {
    setPasswordVisibility((prev: boolean) => !prev);
    setTypeInput(passwordVisibility ? type : "text");
  };
  const {
    formState: { errors: hookFormErrors },
    register,
  } = useFormContext();
  const errorMessage = (hookFormErrors[name] as FieldError)?.message;

  return (
    <div className={classes.field}>
      <label className={classes.label} htmlFor={name}>
        {label}:
      </label>
      <input
        className={`${classes.input} ${errorMessage ? classes.errorInput : ""}`}
        {...register(name)}
        id={name}
        type={typeInput}
        name={name}
      />
      {type === "password" && (
        <VisibilityIcon
          handleVisibility={handleVisibility}
          passwordVisibility={passwordVisibility}
        />
      )}
      <span className={classes.error}>{errorMessage}</span>
    </div>
  );
};

export default CustomInput;
