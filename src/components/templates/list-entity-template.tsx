import { ReactElement } from "react";

interface ListEntityTemplateProps {
  entityCreationComponent: ReactElement;
}

export const ListEntityTemplate = ({
  entityCreationComponent,
}: ListEntityTemplateProps) => {
  return <>{entityCreationComponent}</>;
};
