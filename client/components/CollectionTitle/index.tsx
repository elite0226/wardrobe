import React from 'react';

const CollectionTitle: React.FunctionComponent<React.ReactNode> = ({
  children,
}) => {
  return <div className="collection-title">{children}</div>;
};

export default CollectionTitle;
