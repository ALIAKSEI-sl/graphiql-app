import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import PlusIcon from "../../../../assets/icons/plus.svg?react";
import { useLocalization } from "../../../../hooks/useLocalization";
import Button from "../../../../UI/button/Button";
import CustomInput from "../../../forms/components/input/CustomInput";
import useAddingApi from "../../hooks/useAddingApi";
import { validationSchemaNewApi } from "../../util/validationSchema";
import classes from "./style.module.scss";

const ApiForm: FC = () => {
  const dictionary = useLocalization().api_widget;
  const validationSchema = validationSchemaNewApi(dictionary);
  const { handleAddNewApi, isLoading } = useAddingApi();
  const formMethods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  return (
    <FormProvider {...formMethods}>
      <form
        className={classes.form}
        onSubmit={formMethods.handleSubmit(handleAddNewApi)}
      >
        <CustomInput label={"New API"} name={"api"} type={"text"} />
        <Button
          type="submit"
          btnStyle={"primary"}
          btnType={"round"}
          className={classes.button}
          active={isLoading}
          data-testid="add-api-button"
        >
          <PlusIcon />
        </Button>
      </form>
    </FormProvider>
  );
};

export default ApiForm;
