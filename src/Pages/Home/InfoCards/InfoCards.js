import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import markar from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoCards = () => {

  const cardData = [
    {
      id: 1,
      title: "Opening Hours",
      describtion: "Open 9:00 AM to 6:00 PM every single day",
      icon: clock,
      bgClass: "bg-primary",
    },
    {
      id: 2,
      title: "Our Location",
      describtion: "Open 9:00 AM to 6:00 PM every single day",
      icon: markar,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      title: "Contact Us",
      describtion: "Open 9:00 AM to 6:00 PM every single day",
      icon: phone,
      bgClass: "bg-primary",
    },
  ];


  return (
    <div>
        {
          cardData.map(card => <InfoCards
            key = {card.id}
            card = {card}
          ></InfoCards>)
        }
    </div>
  );
};

export default InfoCards;