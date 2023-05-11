import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {


  const ref = useRef();

   function handleSubmit(evt) {
     evt.preventDefault();
     onUpdateAvatar({avatar: ref.current.value });
   }

  return (

    <PopupWithForm name='profileEditPopup' title='Обновите аватар' btnText='Сохранить' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}
    children={<>
      <input id="input-url-avatar" className="popup__input popup__input-link" required type="url" name="link"
        placeholder="Ссылка" ref={ref} />
      <span className="popup__input-error input-url-avatar-error popup__input-error-avatar"></span></>
    } />
  )

}

export default EditAvatarPopup