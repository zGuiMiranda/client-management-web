import React from "react";
import { Grid, GridItem, Wrap, WrapItem } from "@chakra-ui/react";
import { ReactHookFormInterface } from "../../shared/interfaces";

export interface GridMoleculeProps extends ReactHookFormInterface {
  templateColumns: string;
  children: React.ReactNode;
  w: string;
  h: string;
  gap?: number;
}

export const GridMolecule = ({
  children,
  register,
  control,
  errors,
  templateColumns,
  w,
  h,
  gap = 0,
}: GridMoleculeProps) => {
  const style = {
    ul: {
      width: "100%",
      margin: 0,
    },
  };

  return (
    <Grid templateColumns={templateColumns} gap={gap}>
      {React.Children.map(children, (child: any) => {
        return (
          child.$$typeof && (
            <GridItem w={w} h={h}>
              {React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: register,
                  errors: errors,
                  control: control,
                },
              })}
            </GridItem>
          )
        );
      })}
    </Grid>
  );
};
