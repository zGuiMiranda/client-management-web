import { Center, Flex } from "@chakra-ui/react";
import { CardMolecule } from "../../molecules/card-molecule";
import { TextInputMolecule } from "../../molecules/text-input";
import { CreateEntityTemplate } from "../../templates/create-entity-template";
import { FormMolecule } from "../../molecules/form-molecule";
import { saveClient } from "@/services/clients/clients";
import { GridMolecule } from "../../molecules/grid-molecule";
import { ButtonMolecule } from "@/components/molecules/button-molecule";
import { Client } from "../../../shared/interfaces";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export const CreateClientPage = () => {
  const router = useRouter();

  const registerClient = async (data: Client) => {
    try {
      const response = await saveClient(data as Client);
      if (response.status === 200) {
        toast.success("Ação concluída com sucesso!");
        router.push(`/client`);
      }
    } catch (error) {}
  };

  return (
    <CreateEntityTemplate
      entityCreationComponent={
        <Flex
          width={"100vw"}
          height={"100vh"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Center>
            <CardMolecule
              text="Formulário de cadastro de cliente"
              footer={
                <ButtonMolecule
                  name="saveClient"
                  buttonColor="teal"
                  size="md"
                  text="Salvar"
                  type="submit"
                  formName="saveClient"
                ></ButtonMolecule>
              }
            >
              <FormMolecule
                id="saveClient"
                onSubmit={(data) => registerClient(data as Client)}
              >
                <GridMolecule
                  templateColumns="repeat(1, 1fr)"
                  gap={6}
                  w="100%"
                  h="10"
                  name="gridMolecule"
                >
                  <TextInputMolecule
                    isRequired
                    name="name"
                    text="Nome"
                    size="1px"
                  />
                  <TextInputMolecule
                    name="mother_name"
                    text="Nome da mãe"
                    size="1px"
                    isRequired
                  />
                  <TextInputMolecule
                    name="father_name"
                    text="Nome do pai"
                    size="1px"
                    isRequired
                  />
                  <TextInputMolecule
                    name="phone"
                    text="Celular"
                    size="1px"
                    mask={"+55 (**) *****-****"}
                    isRequired
                  />
                </GridMolecule>
              </FormMolecule>
            </CardMolecule>
          </Center>
        </Flex>
      }
    />
  );
};
