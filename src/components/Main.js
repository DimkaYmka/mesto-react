// import Avatar from '../images/avatar.png'
import { useEffect, useState } from "react";
import api from '../utils/Api.js';

function Main(props) {

  const [userAvatar, setUserAvatar] = useState(null),
    [userName, setUserName] = useState(null),
    [userDescription, setUserDescription] = useState(null);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserData()
      .then(userData => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setCards(cardsArray);
      })
      .catch(err => console.log(err));
  })


  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button" onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="аватар" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-button"
              onClick={props.onEditProfile}
            >

            </button>
          </div>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
          {/* <img src="<%=require('./images/Vector2.svg')%>" alt="" className="profile__add-vector-button" /> */}
        </button>
      </section>



       <section className="elements">
        <ul className="elements__list">
        {cards.map(card => (
          <Card
            key={card._id}
            id={card._id}
            link={card.link}
            name={card.name}
            counter={card.likes.length}
            onCardClick={props.onCardClick}
          />
          ))}
          </ul>
        </section> 


    </main>
  )
};

export default Main;