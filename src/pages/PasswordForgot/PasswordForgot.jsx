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
import { useToast } from '@chakra-ui/react';
import UserServices from "../../services/UserService";

const PasswordFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O email é obrigatório" })
    .refine((email) => {
      return email.endsWith("@consultoriafocus.com");
    }, "Formato de email invalido"),
  password: z.string().min(1, { message: "A nova senha é obrigatória" }),
  passwordConfirmation: z
    .string()
    .min(1, { message: "A nova senha é obrigatória" }),
});

const userService = new UserServices();

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
      password: "",
      passwordConfirmation: "",
    },
    resolver: zodResolver(PasswordFormSchema),
  });

  const toast = useToast();

  const onSubmit = async (data) => {
    /* console.log(data); */
    if (data.password !== data.passwordConfirmation) {
      setError("passwordConfirmation", {
        type: "manual",
        message: "As senhas devem ser iguais",
      });
    } else {
      const response = await userService.edit(data);
      console.log(response);
      if(response){
        toast({
          title: 'Senha alterada com sucesso',
          position: 'top-right',
          variant: 'left-accent',
          status: 'success',
          isClosable: true,
        })
      }
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
                    id="password"
                    type="text"
                    {...register("password")}
                  />
                  {errors.password && (
                    <span className={styles.error}>
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div>
                  <Input
                    label="Nova senha"
                    id="passwordConfirmation"
                    type="text"
                    {...register("passwordConfirmation")}
                  />
                  {errors.passwordConfirmation && (
                    <span className={styles.error}>
                      {errors.passwordConfirmation.message}
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
