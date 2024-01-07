import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { getAPIs, logInWithEmailAndPassword } from "../../../api/firebase";
import { useAppDispatch } from "../../../hooks/redux";
import { useChangeLanguage } from "../../../hooks/useChangeLanguage";
import { useLocalization } from "../../../hooks/useLocalization";
import { apiSlice } from "../../../store/reducers/ApiSlice";
import { LoginType } from "../../../types/forms";
import Button from "../../../UI/button/Button";
import { validationSchemaLogin } from "../util/validationSchema";
import classes from "./form.module.scss";
import CustomInput from "./input/CustomInput";

type controlsType = "email" | "password";

const Login = () => {
  const dictionary = useLocalization();
  const { language } = useChangeLanguage();
  const validationSchema = validationSchemaLogin(dictionary.validation);
  const dispatch = useAppDispatch();
  const { setApiList } = apiSlice.actions;

  const formMethods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const { formState } = formMethods;

  useEffect(() => {
    const keys = Object.keys(formState.dirtyFields);
    keys.forEach((key) => {
      const controlName = key as controlsType;
      formMethods.trigger(controlName);
    });
  }, [language]);

  const onSubmit = async (data: LoginType) => {
    const isLogined = await logInWithEmailAndPassword(
      data,
      dictionary.auth_messages,
    );
    if (isLogined) {
      const listFromDB = await getAPIs();
      if (listFromDB.lenght !== 0) {
        dispatch(setApiList(listFromDB));
        localStorage.setItem("APIS", JSON.stringify(listFromDB));
      }
    }
  };

  return (
    <div className={classes.wrapForm}>
      <h4 className={classes.title}>{dictionary.navigation.login}</h4>
      <FormProvider {...formMethods}>
        <form
          className={classes.form}
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          <CustomInput
            label={dictionary.forms.email}
            name="email"
            type={"email"}
          />
          <CustomInput
            label={dictionary.forms.password}
            name="password"
            type={"password"}
          />
          <Button
            type="submit"
            btnStyle={"primary"}
            btnType="rectangle"
            className={classes["submit-btn"]}
          >
            {dictionary.navigation.login}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
