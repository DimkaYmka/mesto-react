
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from './ImagePopup.js';

function App() {


  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(false);

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

    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
        <Footer />
      </div>


      <PopupWithForm name='profileEditPopup' title='Редактировать профиль' btnText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
        children={<>
          <input className="popup__input" id="input-name" minLength="2" maxLength="40" required type="text" name="name"
            placeholder="Ваше имя" />
          <span className="popup__input-error input-name-error"></span>
          <input className="popup__input" id="input-info" minLength="2" maxLength="200" required type="text" name="about"
            placeholder="Пара слов о себе" />
          <span className="popup__input-error input-info-error"></span></>
        } />

      <PopupWithForm name='profileEditPopup' title='Новое место' btnText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
        children={<>
          <input id="input-name-card" className="popup__input popup__input-name" minLength="2" maxLength="30" required
            type="text" name="name" placeholder="Название" />
          <span className="popup__input-error input-name-card-error"></span>
          <input id="input-url" className="popup__input popup__input-link" required type="url" name="link"
            placeholder="Ссылка" />
          <span className="popup__input-error input-url-error"></span></>
        } />

      <PopupWithForm name='profileEditPopup' title='Обновите аватар' btnText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
        children={<>
          <input id="input-url-avatar" className="popup__input popup__input-link" required type="url" name="link"
            placeholder="Ссылка" />
          <span className="popup__input-error input-url-avatar-error popup__input-error-avatar"></span></>
        } />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />


    

      <div className="popup popup_image">
        <div className="popup__big">
          <button className="button" type="button">
            <img src="true" alt="Крест для закрытия"
              className="popup__close-popup popup__close-popup-big" />
          </button>
          <img src="#" alt="" className="popup__big-image" />
          <h3 className="popup__big-title">#</h3>
        </div>
      </div>




    



      <div className="popup popup_delete">
        <div className="popup__container">
          <button className="button" type="button">
            <img src="true"  alt="Крест для закрытия"
              className="popup__close-popup popup__close-card-popup" />
          </button>
          <form action="#" className="popup__form">
            <h3 className="popup__title popup__title-delete">Вы уверены?</h3>
            <button className="popup__button popup__save-btn popup__button-delete" type="submit">Да</button>
          </form>
        </div>
      </div>
    </div>


  );
}

export default App;
