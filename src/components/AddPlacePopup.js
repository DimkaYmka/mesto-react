import { useState } from "react";
import PopupWithForm from './PopupWithForm';

function AddPlacePopup ({isOpen, onClose, onAddPlace}) {

const [name, setName] = useState('');
const [link, setLink] = useState('');



function handleNameChange (evt) {
  setName(evt.target.value);
}

function handleLinkChange (evt) {
  setLink(evt.target.value);
}

function handleSubmit (evt) {
  evt.preventDefault();
  onAddPlace({name, link});
}

return (
  <PopupWithForm name='profileEditPopup' title='Новое место' btnText='Создать' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}
  children={<>
    <input id="input-name-card" className="popup__input popup__input-name" minLength="2" maxLength="30" required
      type="text" name="name" placeholder="Название" onChange={handleNameChange} />
    <span className="popup__input-error input-name-card-error"></span>
    <input id="input-url" className="popup__input popup__input-link" required type="url" name="link"
      placeholder="Ссылка" onChange={handleLinkChange} />
    <span className="popup__input-error input-url-error"></span></>
  } />
)
}


export default AddPlacePopup;