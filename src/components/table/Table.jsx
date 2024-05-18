import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import styles from "../table/Table.module.css";
import UserServices from "../../services/UserService";

//sai depois
const getLocalStorageData = () => {
  return [
    {
      name: "João Almeida",
      email: "joao@consultoriafocus.com",
      password: "5Stododia",
    },
    {
      name: "Maria Bonita",
      email: "maria@consultoriafocus.com",
      password: "5Stododia",
    },
  ];
};

const userService = new UserServices();

const TableUser = () => {
  //sai depois
  const data = getLocalStorageData();

  async function DeleteUser() {
    try {
      const response = await userService.deleteUser();
      console.log(response);
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }

  return (
    <>
      <Flex className={styles.flex}>
        <Box className={styles.box}>
          <Box overflowY="auto" height="100%">
            <Table className={styles.table}>
              <Thead>
                <Tr>
                  <Th fontSize="20px">Nome</Th>
                  <Th fontSize="20px">E-Mail</Th>
                  <Th fontSize="20px">Senha</Th>
                  <Th padding="0px"></Th>
                  <Th padding="0px"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map(({ name, email, password }, index) => (
                  <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                    <Td>{name}</Td>
                    <Td>{email}</Td>
                    <Td>{password}</Td>
                    <Td p={0}>{/*  <EditIcon /> */}</Td>
                    <Td p={0}>
                      <DeleteIcon onClick={() => DeleteUser()} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default TableUser;
