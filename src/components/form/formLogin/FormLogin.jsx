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
import { IsAuthenticated } from "../../../auth/isAuthenticated";

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
    /*     const { getItem } = UseLocalStorage("db_user");
        const local = getItem();
        console.log(IsAuthenticated(data, local)); */
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro na requisição");
      }

      const responseData = await response.json();
      console.log(responseData);

      const { setItem } = UseLocalStorage("token");
      setItem(responseData.token);

      //console.log(IsAuthenticated(responseData.token));
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
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
