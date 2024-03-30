import { ReactElement } from "react";

interface EditEntityTemplateProps {
  entityCreationComponent: ReactElement;
}

export const EditEntityTemplate = ({
  entityCreationComponent,
}: EditEntityTemplateProps) => {
  return <>{entityCreationComponent}</>;
};
