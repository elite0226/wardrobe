import React from 'react';

import Item from './Item';
import { ListType, ItemType } from '../../types';

type CollectionProps = {
  items: ListType;
  getSize: (item: ItemType) => React.ReactNode;
  onDelete: (
    id: number,
  ) => (event?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

const Collection: React.FunctionComponent<CollectionProps> = ({
  items,
  getSize,
  onDelete,
}) => {
  return (
    <div className="collection">
      {items.map((item: ItemType) => (
        <Item
          key={item.id}
          item={item}
          size={getSize(item)}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Collection;
