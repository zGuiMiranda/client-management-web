import { ToastAtom } from "@/components/atoms/toast-atom";
import { EntityContextProvider } from "@/contexts/entity-context";
import customTheme from "@/themes/theme";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <EntityContextProvider>
        <Component {...pageProps} />
      </EntityContextProvider>
      <ToastAtom position="top-right" />
    </ChakraProvider>
  );
}

export default MyApp;
