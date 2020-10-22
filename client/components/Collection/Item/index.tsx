import React, { useState } from 'react';

import { ItemType } from '../../../types';

type ItemProps = {
  item: ItemType;
  size: React.ReactNode;
  onDelete: (
    id: number,
  ) => (event?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

const Item: React.FunctionComponent<ItemProps> = ({ item, size, onDelete }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleHover = () => setIsHover(true);

  const handleBlur = () => setIsHover(false);

  return (
    <div>
      <div
        className="collection-item"
        onMouseEnter={handleHover}
        onMouseLeave={handleBlur}
        style={{ backgroundColor: item.color }}
      >
        {isHover && (
          <>
            <span className="close" onClick={onDelete(item.id)}>
              ✖
            </span>
            <div className="close-overlay"></div>
          </>
        )}
      </div>
      <div className="collection-item__caption">
        <span className="collection-item__label">{item.name}</span>
        <span className="collection-item__size">{size}</span>
      </div>
    </div>
  );
};

export default Item;
