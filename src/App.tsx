import React, { useState } from 'react';
import Store from './Store';
import BestMenu from './BestMenu';
import { Address, Restaurant } from './model/restaurant';
import './App.css';

let data: Restaurant = {
  name: `누나네 식당`,
  category: `western`,
  address: {
    city: `incheon`,
    detail: `somewhere`,
    zipCode: 23425634
  },
  menu: [
    {
      name: "rose pasta",
      price: 2000,
      category: 'PASTA'
    },
    {
      name: 'garlic steak',
      price: 3000,
      category: `PASTA`
    }
  ]
};

const App: React.FC = () => {

  // 변수
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);

  // 함수
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
    return true;
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  // 렌더
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />
    </div>
  );
};

export default App;
