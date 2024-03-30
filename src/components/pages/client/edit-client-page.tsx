import { ButtonMolecule } from "@/components/molecules/button-molecule";
import { CardMolecule } from "@/components/molecules/card-molecule";
import { FormMolecule } from "@/components/molecules/form-molecule";
import { GridMolecule } from "@/components/molecules/grid-molecule";
import { TextInputMolecule } from "@/components/molecules/text-input";
import { EditEntityTemplate } from "@/components/templates/edit-entity-template";
import { editClient, getClientById } from "@/services/clients/clients";
import { Flex, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Client } from "../../../shared/interfaces";
import { useEntityContext } from "@/contexts/entity-context";
import toast from "react-hot-toast";

export const EditClientPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { setState } = useEntityContext();
  const [ok, setOk] = useState(false);

  function instanceOfA(data: any): data is string {
    return typeof data === "string";
  }

  useEffect(() => {
    (async () => {
      if (!id || !setState) return;
      const response = await getClientById(id.toString());
      if (response.status !== 200)
        return toast.error(
          (instanceOfA(response.data) && response.data) ||
            "Erro ao buscar cliente"
        );
      setState({ entity: response.data });
      setOk((ok) => !ok);
    })();

    return () => {};
  }, [id, setState]);

  const updateClient = async (data: Client) => {
    try {
      const response = await editClient(data as Client);
      if (response.status === 200) {
        toast.success("Ação concluída com sucesso!");
        router.push(`/client`);
      }
    } catch (error) {}
  };

  return (
    <>
      {ok && (
        <EditEntityTemplate
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
                      name="editClient"
                      buttonColor="teal"
                      size="md"
                      text="Salvar"
                      type="submit"
                      formName="editClient"
                      width="full"
                    ></ButtonMolecule>
                  }
                >
                  <FormMolecule
                    id="editClient"
                    onSubmit={(data) => updateClient({ id, ...data } as Client)}
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
      )}
    </>
  );
};
