import React, { useEffect, useState } from 'react';
import { Address, Restaurant } from './model/restaurant';
import Store from './pages/Store';
import BestMenu from './pages/BestMenu';

const App: React.FC = () => {

  // 변수
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>({
    name: ``,
    category: ``,
    address: {
      city: ``,
      detail: ``,
      zipCode: 0
    },
    menu: [],
  });

  // 함수
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
    return true;
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  // 이펙
  useEffect(() => {
    fetch(`/data/restaurant.json`)
      .then(res => res.json())
      .then(res => setMyRestaurant(res));
  }, []);

  // 렌더
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />
    </div>
  );
};

export default App;
