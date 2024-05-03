import React from "react";
import Input from "../Input/Input";
import ButtonPrimary from "../../buttonPrimary/ButtonPrimary";
import ButtonSecondary from "../../buttonSecondary/ButtonSecondary";
import { useNavigate } from "react-router-dom";
import styles from "../formLogin/formLogin.module.css";

import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseLocalStorage } from "../../../hooks/useLocalStorage";
import UserServices from "../../../services/UserService";

const userService = new UserServices();

const loginUserFormSchema = z.object({
  /* Aqui com o Zod é onde acontece a validação */
  email: z
    .string()
    .min(1, { message: "O email é obrigatório" })
    .refine((email) => {
      return email.endsWith("@consultoriafocus.com");
    }, "Formato de email invalido"),
  password: z.string().min(1, { message: "A senha é obrigatória" }),
});

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver:
      zodResolver(loginUserFormSchema) /* integrando o zod com o useForm */,
  });

  const navigate = useNavigate();
  const handlePage = () => {
    return navigate("/password");
  };

  const onSubmit = async (data) => {
    try {
      const response = await userService.login(data);
      console.log(response);
    } 
    catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <Input label="Email" id="email" type="email" {...register("email")} />
          {/* exibição da mensagem de erro */}
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>
        <div className={styles.inputs}>
          <Input
            label="Senha"
            id="senha"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
        </div>
        <div className={styles.button}>
          <ButtonPrimary text="Entrar" type="submit" />
          <ButtonSecondary text="Trocar Senha" onClick={handlePage} />
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default FormLogin;
