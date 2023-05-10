import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api.js';
import Card from "./Card.js";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
      .then(cardsArray => {
        setCards(cardsArray);
      })
      .catch(err => console.error(err));
  },[]);




  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button" onClick={props.onEditAvatar}>
          <img src={currentUser.avatar} alt="аватар" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button type="button" className="profile__edit-button"
              onClick={props.onEditProfile}
            >

            </button>
          </div>
          <p className="profile__text">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
          {/* <img src="<%=require('./images/Vector2.svg')%>" alt="" className="profile__add-vector-button" /> */}
        </button>
      </section>



      <section className="elements">
        <ul className="elements__list">
          {cards.map(card => (
            <Card
              card={card}
              onCardClick={props.onCardClick}
              key={card._id}
              id={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
            />
          ))}
        </ul>
      </section>


    </main>
  )
};

export default Main;