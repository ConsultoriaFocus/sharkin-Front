import React from "react";
import Card from "../../components/form/card/Card";
import Title from "../../components/title/Title";
import Input from "../../components/form/Input/Input";
import ButtonPrimary from "../../components/buttonPrimary/ButtonPrimary";
import styles from "../AddUser/AddUser.module.css";

import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import UserServices from "../../services/UserService";
import { useToast } from "@chakra-ui/react";

const userService = new UserServices();

const AddUserFormSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  email: z
    .string()
    .min(1, { message: "O email é obrigatório" })
    .refine((email) => {
      return email.endsWith("@consultoriafocus.com");
    }, "Formato de email invalido"),
  password: z.string().min(1, { message: "A senha é obrigatória" }),
  passwordConfirmation: z
    .string()
    .min(1, { message: "Confirmar a senha é obrigatória" }),
});

const AddUser = () => {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: zodResolver(AddUserFormSchema),
  });

  const toast = useToast();

  const onSubmit = async (data) => {
    if (data.password !== data.passwordConfirmation) {
      setError("passwordConfirmation", {
        type: "manual",
        message: "As senhas devem ser iguais",
      });
    } else {
      try {
        const response = await userService.register(data);

        if (response === true) {
          toast({
            title: "Usuário cadastrado com sucesso",
            position: "top-right",
            variant: "left-accent",
            status: "success",
            isClosable: true,
          });
        }
      } catch (err) {
        alert(err.message);
      }
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.title}>
          <Title title="Cadastro" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.labels}>
            <div className={styles.inputs}>
              <Input label="Nome" id="nome" type="text" {...register("name")} />
              {errors.name && (
                <span className={styles.error}>{errors.name.message}</span>
              )}
            </div>
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
                id="password"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <span className={styles.error}>{errors.password.message}</span>
              )}
            </div>
            <div className={styles.inputs}>
              <Input
                label="Confirme a senha"
                id="passwordConfirmation"
                type="passwordConfirmation"
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
            <ButtonPrimary text="Confirmar" type="submit" />
          </div>
        </form>
      </div>
      <DevTool control={control} />
    </div>
  );
};

export default AddUser;
