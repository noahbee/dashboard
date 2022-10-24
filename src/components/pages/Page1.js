import React from 'react';

import CardData from './CardData';
import Cardlist from './Cardlist';

const Page1 =() => {
  return (
    <>
    <div className='home-card'>
        <Cardlist details={CardData} />
    </div>
    </>
  );
};

export default Page1;