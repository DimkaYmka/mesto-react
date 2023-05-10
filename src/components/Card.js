import Trash from '../images/Trash.svg'
import Heart from '../images/Vector.svg'
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(card) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = currentUser._id === card.id
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `elements__vector ${isLiked && 'elements__vector_active'}` 
  );

  const handleClick = () => {
    card.onCardClick(card);
  }

  return (

    <li className="elements__card">
      <img className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick} />
     { isOwn && <button className="button" type="button">
        <img src={Trash} alt="лайк" className="elements__delete-button elements__delete-button_hidden" />
      </button>}
      <h2 className="elements__title">{card.name}</h2>
      <button className="button" type="button">
        <img src={Heart} alt="лайк" className={cardLikeButtonClassName} />
        <span className={'elements__likes-number'}>{card.likes.length}</span>
      </button>
    </li>
  )
};

export default Card;