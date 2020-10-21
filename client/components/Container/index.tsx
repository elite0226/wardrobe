import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      <h2 className="title">Wardrobe</h2>
      <main>{children}</main>
    </div>
  );
};

export default Container;
