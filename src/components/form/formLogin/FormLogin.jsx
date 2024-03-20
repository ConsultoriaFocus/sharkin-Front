import React from "react";
import Input from "../formInput/Input";
import ButtonPrimary from "../../buttonPrimary/ButtonPrimary";
import ButtonSecondary from "../../buttonSecondary/ButtonSecondary";
import styles from "../formLogin/formLogin.module.css";

import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* const userFormSchema = z.object({
    email: z.string().min(2, { message: "o email é obrigatório" }),
    password: z.string().min(6, { message: "o password é obrigatório" }),
  }); */

const FormLogin = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" id="email" type="email" {...register("email")} />
        <Input
          label="Senha"
          id="senha"
          type="password"
          {...register("password")}
        />

        <div className={styles.button}>
          <ButtonPrimary text="Entrar" type="submit" />
          <ButtonSecondary text="Trocar Senha" />
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default FormLogin;
