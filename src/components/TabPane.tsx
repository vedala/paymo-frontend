import React, { ReactElement } from "react";

type Props = {
  title: string;
  children: ReactElement | ReactElement[];
};

const TabPane = ({children}: Props) => {
  return (
    <div>{children}</div>
  );
};

export default TabPane;
