import React from 'react';
import { Address, Restaurant } from '../model/restaurant';

interface OwnProps {
  info: Restaurant;
  changeAddress(address: Address): void;
}

const Store: React.FC<OwnProps> = ({ info: { name } }) => {

  // 렌더
  return (
    <div>{name}</div>
  );
};

export default Store;