import iconDone from '../images/Done.svg';
import iconError from '../images/Error.svg';
import ClosePopup from '../images/Close.svg';


//   function InfoTooltip({ isOpen, onClose, error }) {

//   return (
//     <div className={isOpen ? "popup popup_opened" : "popup"} >
//       <div className="popup__container">

//         <img src={ClosePopup} alt='close'>
//         <button className="button" type="button" onClick={onClose}/>
//         </img>
          // <img
          //   src={error ? iconError : iconDone}
          //   alt={
          //     error ? 'Регистрация прошла успешно' : 'Регистрация не прошла'
          //   }
          //   className="popup__signup-icon"
          // />
//           <h2 className="popup__signup-title">
//             {error
//               ? 'Что-то пошло не так! Попробуйте ещё раз.'
//               : 'Вы успешно зарегистрировались!'}
//           </h2>
//       </div>
//     </div>
//   )
// }
// export default InfoTooltip



function InfoTooltip({ onClose, isOpen, isSuccess }) {
  return (
    <div className={`popup  ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">

          <button className="button popup__close-button" type="button" onClick={onClose} />
  
        <img
            src={isSuccess ? iconError : iconDone}
            alt={
              isSuccess ? 'Регистрация прошла успешно' : 'Регистрация не прошла'
            }
            className="popup__signup-icon"
          />

        <h2
          className="popup__title">
          {isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте еще раз."}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip
