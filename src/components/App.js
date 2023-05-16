
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
// import PopupWithForm from "./PopupWithForm";
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";

import { Navigate, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [cards, setCards] = useState([]);//
  const [currentUser, setCurrentUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true); //false по умолчанию

  useEffect(() => {

    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(res => {
        const [userData, cardsArray] = res;
        setCards(cardsArray);
        setCurrentUser(userData);
      })
      .catch(err => console.error(err));
  }, []);


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(isLiked, card.id)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card.id ? newCard : c));
      })
      .catch(err => console.log(err));
  }


  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
      .then(() => setCards(cards.filter(c => c._id !== cardId)))
      .catch(err => console.log(err));
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);

  }

  function handleCardClick(card) {
    setSelectedCard(card)

  }

  const handleUpdateUser = (userInfo) => {
    api.editUserData(userInfo)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  const handleUpdateAvatar = (avatarUrl) => {
    api.editUserAvatar(avatarUrl)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }
  const handleAddCard = (cardData) => {
    api.createCard(cardData)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Routes>
            
            <Route path='/'
              element={
                <ProtectedRoute
                  element={Main}
                  cards={cards}
                  onEditAvatar={handleEditAvatarClick}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} /> 
          </Routes>
          {loggedIn && <Footer />}
        </div>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddCard} />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />



        {/* <div className="popup popup_delete">
          <div className="popup__container">
            <button className="button" type="button">
              <img src="true" alt="Крест для закрытия"
                className="popup__close-popup popup__close-card-popup" />
            </button>
            <form action="#" className="popup__form">
              <h3 className="popup__title popup__title-delete">Вы уверены?</h3>
              <button className="popup__button popup__save-btn popup__button-delete" type="submit">Да</button>
            </form>
          </div>
        </div> */}
      </div>
    </CurrentUserContext.Provider>

  );

}
export default App;


