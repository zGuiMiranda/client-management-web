import { ReactElement } from "react";

interface CreateEntityTemplateProps {
  entityCreationComponent: ReactElement;
}

export const CreateEntityTemplate = ({
  entityCreationComponent,
}: CreateEntityTemplateProps) => {
  return <>{entityCreationComponent}</>;
};
