import React from 'react'
import SingleCard from './SingleCard'

const Card = () => {
  const data = [
    {
      id: 1,
      heading: "Basic",
      line1: "5 Lakhs",
      line2: "No unlimited access",
      line3: "No food",
    },
    {
      id: 2,
      heading: "Medium",
      line1: "10 Lakhs",
      line2: "No unlimited access",
      line3: "No food",
    },
    {
      id: 3,
      heading: "Premium",
      line1: "20 Lakhs",
      line2: "No unlimited access",
      line3: "No food",
    },
  ];
  return (
    <>
      <h1 className="heading">pricing</h1>
      <section className="cards">
        {data.map((item) => {
          const {id, heading, line1, line2, line3 } = item;
          return(<SingleCard heading ={heading} line1={line1} line2={line2} line3={line3}/>)
        })}
      </section>
    </>
  );
}

export default Card
