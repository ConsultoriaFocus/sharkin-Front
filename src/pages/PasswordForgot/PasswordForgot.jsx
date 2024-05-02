import React from "react";
import Card from "../../components/form/card/Card";
import Title from "../../components/title/Title";
import Input from "../../components/form/Input/Input";
import ButtonPrimary from "../../components/buttonPrimary/ButtonPrimary";
import styles from "../PasswordForgot/Password.module.css";

import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseLocalStorage } from "../../hooks/useLocalStorage";

const PasswordFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O email é obrigatório" })
    .refine((email) => {
      return email.endsWith("@consultoriafocus.com");
    }, "Formato de email invalido"),
  password1: z.string().min(1, { message: "A nova senha é obrigatória" }),
  confirmpassword: z.string().min(1, { message: "A nova senha é obrigatória" }),
});

const PasswordForgot = () => {
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password1: "",
      confirmpassword: "",
    },
    resolver: zodResolver(PasswordFormSchema),
  });

  const onSubmit = async (data) => {
    if (data.password1 !== data.confirmpassword) {
      setError("confirmpassword", {
        type: "manual",
        message: "As senhas devem ser iguais",
      });
    } else { //No momento estou usando o localhost pra guardar essa alteração pois a api pra isso não está funcionando
      
      const { setItem, getItem } = UseLocalStorage("db_user", data);
      const { name } = getItem();
      const { password1, email } = data; 
      setItem({'name': name, 'password': password1, 'email': email});
    }

  };

  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <Card>
          <div className={styles.container}>
            <div className={styles.title}>
              <Title title="Troca senha" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.labels}>
                <div>
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
                <div>
                  <Input
                    label="Nova senha"
                    id="password1"
                    type="text"
                    {...register("password1")}
                  />
                  {errors.password1 && (
                    <span className={styles.error}>
                      {errors.password1.message}
                    </span>
                  )}
                </div>
                <div>
                  <Input
                    label="Nova senha"
                    id="confirmpassword"
                    type="text"
                    {...register("confirmpassword")}
                  />
                  {errors.confirmpassword && (
                    <span className={styles.error}>
                      {errors.confirmpassword.message}
                    </span>
                  )}
                </div>
              </div>
              <div className={styles.button}>
                <ButtonPrimary text="Salvar" type="submit" />
              </div>
            </form>
          </div>
        </Card>
      </div>
      <DevTool control={control} />
    </div>
  );
};

export default PasswordForgot;
