import iconDone from '../images/icon-done.svg';
import iconError from '../images/icon-error.svg';

function InfoTooltip({ isOpenStatus, onClose }) {

  return (
    <section
      className={`info-tooltip ${isOpenStatus.isOpen ? 'info-tooltip_opened' : ''}`}
      onClick={({ target }) => {
        if (target.classList.contains('info-tooltip_opened') || target.classList.contains('info-tooltip__close')) {
          onClose();
        }
      }}>
      <div className="info-tooltip__container">
        <button type="button" onClick={onClose} className="info-tooltip__close" />
        <img src={isOpenStatus.status ? iconDone : iconError} className="info-tooltip__img" alt=""></img>
        <p className="info-tooltip__text">{isOpenStatus.status ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</p>
      </div>
    </section>
  )
}

export default InfoTooltip