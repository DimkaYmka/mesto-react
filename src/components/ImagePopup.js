
function ImagePopup() {
  return (
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
  )
}

export default ImagePopup;