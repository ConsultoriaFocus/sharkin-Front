import React from "react";
import Input from "../Input/Input";
import ButtonPrimary from "../../buttonPrimary/ButtonPrimary";
import ButtonSecondary from "../../buttonSecondary/ButtonSecondary";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../formLogin/formLogin.module.css";

import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import UserServices from "../../../services/UserService";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const userService = new UserServices();

const loginUserFormSchema = z.object({
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
    return navigate("/cadastro");
  };

  const onSubmit = async (data) => {
    try {
      const response = await userService.login(data);

      if (response === true) {
        navigate("/home");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const clientId = "SUA_CLIENT_ID";
  const onSuccess = (response) => {
    console.log("Login realizado com sucesso:", response);
    // Envie o token para o backend para autenticar o usuário
  };

  const onFailure = (error) => {
    console.log("Falha no login:", error);
  };

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <Input
              label="Email"
              id="email"
              type="email"
              {...register("email")}
            />
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
            <ButtonSecondary text="Cadastro" onClick={handlePage} />
          </div>
            <GoogleLogin onSuccess={onSuccess} onError={onFailure} className={styles.googleLogin}/>
        </form>
        <DevTool control={control} />
      </GoogleOAuthProvider>
    </>
  );
};

export default FormLogin;
