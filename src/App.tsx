import React, { useEffect, useState } from 'react';
import Store from './pages/Store';
import BestMenu from './pages/BestMenu';
import { restaurant } from './model/initialize';
import { Address, Restaurant } from './model/restaurant';

const App: React.FC = () => {

  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(restaurant);

  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
    alert(`변경 확인`);
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  useEffect(() => {
    fetch(`/data/restaurant.json`)
      .then(res => res.json())
      .then(res => setMyRestaurant(res));
  }, []);

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />
    </div>
  );
};

export default App;
