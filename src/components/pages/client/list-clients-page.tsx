import { TableOrganism } from "@/components/organisms/table-organism";
import { ListEntityTemplate } from "@/components/templates/list-entity-template";
import { getAllClients } from "@/services/clients/clients";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Client } from "../../../shared/interfaces";
import { useRouter } from "next/router";

export const ListClientsPage = () => {
  const [clients, setClients] = useState([] as Client[]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const clients = await getAllClients([]);
      clients?.length && setClients(clients);
    })();

    return () => {};
  }, []);

  function instanceOfA(client: any): client is Client {
    return "father_name" in client && "mother_name" in client;
  }

  const onRowClick = (client: unknown) => {
    const id = instanceOfA(client) ? client.id : "";
    router.push(`/${router.pathname}/edit/${id}`);
  };

  return (
    <ListEntityTemplate
      entityCreationComponent={
        <Flex
          width={"100vw"}
          height={"100vh"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <TableOrganism
            onRowClick={onRowClick}
            columns={[
              { name: "Nome", selector: (row) => row.name },
              { name: "Nome da Mãe", selector: (row) => row.mother_name },
              { name: "Nome do Pai", selector: (row) => row.father_name },
              { name: "Celular", selector: (row) => row.phone },
            ]}
            data={clients}
          />
        </Flex>
      }
    />
  );
};
