import React from 'react';
import { Address, Restaurant } from '../model/restaurant';

interface OwnProps {
  info: Restaurant;
  changeAddress(address: Address): void;
}

const Store: React.FC<OwnProps> = ({ info: { name, category, address: { city, detail, zipCode } }, changeAddress }) => {

  return (
    <div>
      <div>이름: {name}</div>
      <div>분류: {category}</div>
      <div>지역: {city}</div>
      <div>상세: {detail}</div>
      <div>주소: {zipCode}</div>
      <button type='button'>주소 변경</button>
    </div >
  );
};

export default Store;