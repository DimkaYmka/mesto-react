import ClosePopup from '../images/Close.svg';

function ImagePopup(props) {

  return (
    <div className={!props.card
      ? "popup popup_image"
      : "popup popup_image popup_opened"}>
      <div className="popup__big">
        <button className="button" type="button" onClick={() => props.onClose()}>
          <img src={ClosePopup} alt="Крест для закрытия"
            className="popup__close-popup popup__close-popup-big" />
        </button>
        <img src={props.card.link} alt={props.card.name} className="popup__big-image" />
        <h3 className="popup__big-title">{props.card.name}</h3>
      </div>
    </div>


  )
}

export default ImagePopup;

