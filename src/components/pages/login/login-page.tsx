import { Center, Flex } from "@chakra-ui/react";
import { CardMolecule } from "../../molecules/card-molecule";
import { CreateEntityTemplate } from "../../templates/create-entity-template";
import { FormMolecule } from "../../molecules/form-molecule";
import { GridMolecule } from "../../molecules/grid-molecule";
import { ButtonMolecule } from "@/components/molecules/button-molecule";
import { login } from "@/services/login/login";
import { User } from "@/shared/interfaces";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { TextInputWithButtonMolecule } from "@/components/molecules/text-input-with-button";
import { IconAtom } from "@/components/atoms/icon-atom";
import { FaUser } from "react-icons/fa";
import { PiPassword } from "react-icons/pi";
import { useState } from "react";
import toast from "react-hot-toast";

export const LoginPage = () => {
  const [showPassword, setPassword] = useState(false);

  const router = useRouter();

  const doLogin = async (data: User) => {
    const response = await login(data);
    if (response.status === 200) {
      setCookie("access-token", response.data, { sameSite: true });
      router.push(`/client`);
    } else {
      toast.error(response.data);
    }
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
              text="Login"
              footer={
                <ButtonMolecule
                  name="login"
                  buttonColor="teal"
                  size="md"
                  text="Login"
                  type="submit"
                  formName="login"
                  width="full"
                ></ButtonMolecule>
              }
            >
              <FormMolecule
                id="login"
                onSubmit={(data) => doLogin(data as User)}
              >
                <GridMolecule
                  templateColumns="repeat(1, 1fr)"
                  gap={6}
                  w="100%"
                  h="10"
                  name="gridMolecule"
                >
                  <TextInputWithButtonMolecule
                    isRequired
                    name="login"
                    placeholder="Username"
                    size="1px"
                    mask={"***.***.***-**"}
                    leftElement={<IconAtom icon={FaUser}></IconAtom>}
                  />
                  <TextInputWithButtonMolecule
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    size="1px"
                    isRequired
                    leftElement={<IconAtom icon={PiPassword}></IconAtom>}
                    rightElement={
                      <ButtonMolecule
                        type="button"
                        text={showPassword ? "Hide" : "Show"}
                        name="show password"
                        size="sm"
                        h="1.75rem"
                        buttonColor="gray"
                        mr="1"
                        onClick={() => setPassword(!showPassword)}
                      />
                    }
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
