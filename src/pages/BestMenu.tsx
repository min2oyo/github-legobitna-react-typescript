import React from 'react';
import { Menu } from '../model/restaurant';

type OwnProps = Omit<Menu, `price`> & {  // type
  showBestMenuName(name: string): string;
};

// interface OwnProps extends Omit<Menu, `price`> {  // interface
//   showBestMenuName(name: string): string;
// }

const BestMenu: React.FC<OwnProps> = ({ name, category, showBestMenuName }) => {

  // 렌더
  return (
    <div>{name}</div>
  );
};

export default BestMenu;