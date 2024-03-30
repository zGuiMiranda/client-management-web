import React, { ReactNode, createContext, useContext, useState } from "react";

type Entity = {
  entity: any;
};

type PropsEntityContext = {
  state: Entity;
  setState: React.Dispatch<React.SetStateAction<Entity>>;
};

const DEFAULT_VALUE = {
  state: {
    entity: {},
  },
  setState: () => {},
};

export const EntityContext = createContext<PropsEntityContext>(DEFAULT_VALUE);

export const EntityContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <EntityContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </EntityContext.Provider>
  );
};

export const useEntityContext = () => useContext(EntityContext);
