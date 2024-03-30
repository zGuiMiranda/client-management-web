import { Toast, useToast } from "@chakra-ui/react";
import { ToastPosition, Toaster } from "react-hot-toast";

interface ToastAtomProps {
  position: ToastPosition;
}

export const ToastAtom = ({ position }: ToastAtomProps) => {
  return <Toaster position={position} />;
};
