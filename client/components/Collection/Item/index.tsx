import React from 'react';

import { ItemType } from '../../../types';

type ItemProps = {
  item: ItemType;
  size: React.ReactNode;
};

const Item: React.FunctionComponent<ItemProps> = ({ item, size }) => {
  return (
    <div>
      <div
        className="collection-item"
        style={{ backgroundColor: item.color }}
      />
      <div className="collection-item__caption">
        <span className="collection-item__label">{item.name}</span>
        <span className="collection-item__size">{size}</span>
      </div>
    </div>
  );
};

export default Item;
