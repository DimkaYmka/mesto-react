
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


      {/* <div className="popup popup_profile">
        <div className="popup__container">
          <button className="button" type="button">
            <img src="<%=require('./images/Close.svg')%>" alt="Крест для закрытия" className="popup__close-popup" />
          </button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form name="form" className="popup__form popup__form-profile" novalidate>
            <input className="popup__input" id="input-name" minlength="2" maxlength="40" required type="text" name="name"
              placeholder="Ваше имя" />
            <span className="popup__input-error input-name-error"></span>
            <input className="popup__input" id="input-info" minlength="2" maxlength="200" required type="text" name="about"
              placeholder="Пара слов о себе" />
            <span className="popup__input-error input-info-error"></span>
            <button className="popup__button popup__save-btn" type="submit">Сохранить</button>
          </form>
        </div>
      </div> */}

      {/* <div className="popup popup_card">
        <div className="popup__container">
          <button className="button" type="button">
            <img src="<%=require('./images/Close.svg')%>" alt="Крест для закрытия"
              className="popup__close-popup popup__close-card-popup" />
          </button>
          <h3 className="popup__title">Новое место</h3>
          <form name="form" className="popup__form popup__form-card" noValidate>
            <input id="input-name-card" className="popup__input popup__input-name" minLength="2" maxLength="30" required
              type="text" name="name" placeholder="Название" />
            <span className="popup__input-error input-name-card-error"></span>
            <input id="input-url" className="popup__input popup__input-link" required type="url" name="link"
              placeholder="Ссылка" />
            <span className="popup__input-error input-url-error"></span>
            <button className="popup__button popup__save-btn" type="submit">Создать</button>
          </form>
        </div>
      </div> */}

      <div className="popup popup_image">
        <div className="popup__big">
          <button className="button" type="button">
            <img src="<%=require('./images/Close.svg')%>" alt="Крест для закрытия"
              className="popup__close-popup popup__close-popup-big" />
          </button>
          <img src="#" alt="" className="popup__big-image" />
          <h3 className="popup__big-title">#</h3>
        </div>
      </div>


      <template className="card" id="card">
        <li className="elements__card">
          <img src="#" alt="" className="elements__image" />
          <button className="button" type="button">
            <img src="<%=require('./images/Trash.svg')%>" alt="лайк" className="elements__delete-button elements__delete-button_hidden" />
          </button>
          <h2 className="elements__title">#</h2>
          <button className="button" type="button">
            <img src="<%=require('./images/Vector.svg')%>" alt="лайк" className="elements__vector" />
            <span className="elements__likes-number">0</span>
          </button>
        </li>
      </template>

      {/* <div className="popup popup_avatar">
        <div className="popup__container">
          <button className="button" type="button">
            <img src="<%=require('./images/Close.svg')%>" alt="Крест для закрытия"
              className="popup__close-popup popup__close-card-popup" />
          </button>
          <h3 className="popup__title">Обновите аватар</h3>
          <form name="form" className="popup__form popup__form-avatar" noValidate>
            <input id="input-url-avatar" className="popup__input popup__input-link" required type="url" name="link"
              placeholder="Ссылка" />
            <span className="popup__input-error input-url-avatar-error popup__input-error-avatar"></span>
            <button className="popup__button popup__save-btn" type="submit">Сохранить</button>
          </form>
        </div>
      </div> */}



      <div className="popup popup_delete">
        <div className="popup__container">
          <button className="button" type="button">
            <img src="<%=require('./images/Close.svg')%>" alt="Крест для закрытия"
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
