import React from 'react';
import '../card.css';

const Cardlist =(props) => {
  return (
    <>
    {props.details.map((value,index)=>(
    <div className='card' key={index}>
        <div className='heading'>
            <h1>{value.heading}</h1>
        </div>
        <div className='para'>
            <p>{value.para}</p>
        </div>
    </div>
    ))};
    </>
  );
};

export default Cardlist;