import React from 'react';

import Item from './Item';
import { ListType, ItemType } from '../../types';

type CollectionProps = {
  items: ListType;
  getSize: (item: ItemType) => React.ReactNode;
};

const Collection: React.FunctionComponent<CollectionProps> = ({
  items,
  getSize,
}) => {
  return (
    <div className="collection">
      {items.map((item: ItemType) => (
        <Item key={item.id} item={item} size={getSize(item)} />
      ))}
    </div>
  );
};

export default Collection;
