import ClosePopup from '../images/Close.svg';

function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? "popup popup_opened" : "popup"} id={props.name}>
      <div className="popup__container">
        <button className="button" type="button" onClick={props.onClose}>
          <img src={ClosePopup} alt="Крест для закрытия"
            className="popup__close-popup popup__close-card-popup" />
        </button>
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
        <form action="#" name="form" className="popup__form popup__form-card" noValidate>
          <button className="popup__button popup__save-btn" type="submit">{props.btnText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;