import React, { useState } from "react";

const Faq = () => {
  const data = [
    {
      question: "What is Galaxy Travel?",
      answers:
        "Galaxy Travel ek futuristic space tourism company hai jo logon ko different galaxies aur planets tak travel karne ka moka deti hai. Yah advanced spacecrafts aur AI-based navigation system ka use karti hai.",
    },
    {
      question: "How safe is galaxy travel for humans?",
      answers:
        "Galaxy Travel mein safety sabse pehla priority hoti hai. Har spacecraft me multi-layer shield protection, emergency AI control system, aur oxygen regeneration pods hote hain jo har situation me traveler ko safe rakhte hain.",
    },
    {
      question: "Which planets can we visit with Galaxy Travel?",
      answers:
        "Galaxy Travel abhi Mars, Jupiter ke moons, aur Alpha Centauri ke habitable zone tak tours organize karta hai. Future plans me Saturn aur Kepler planets ka inclusion bhi hai.",
    },
    {
      question: "How much does a galaxy trip cost?",
      answers:
        "Galaxy Travel ke packages alag-alag destinations ke hisaab se vary karte hain. Average trip cost 5 million dollars se start hoti hai aur luxury cosmic cruise 20 million dollars tak ja sakti hai.",
    },
    {
      question: "What are the facilities inside the spacecraft?",
      answers:
        "Spacecraft ke andar luxury cabins, zero-gravity lounges, holographic entertainment rooms, aur AI personal assistants hote hain. Har traveler ke liye personalized meal aur health monitoring system bhi available hota hai.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (i) => {
    if(selected ===i){
      return setSelected(null)
    }
    setSelected(i);

  };

  return (
    <>
      <h1 className="heading">FAQs</h1>
      <section className="faq">
        <div className="item">
          
          {data.map((item, i) => {
            return (
              <div className="wrapper" key={i} >
                <div className="question" onClick={() => handleSelect(i)}>
                  <h3>{item.question}</h3>
                  <img src={require("../../../assets/up arrow.png")} alt="" className={selected===i ? "reverse" :""} />
                </div>
                <div className={selected === i ? "answers show" : "answers"}>
                  <p>{item.answers}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;
