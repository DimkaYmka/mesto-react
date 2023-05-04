function Card(props) {

  const handleClick = () => {
    props.onCardClick(props.card);
  }

  return (

    <li className="elements__card">
      <img  className="elements__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick} />
      <button className="button" type="button">
        <img src="<%=require('./images/Trash.svg')%>" alt="лайк" className="elements__delete-button elements__delete-button_hidden" />
      </button>
      <h2 className="elements__title">{props.card.name}</h2>
      <button className="button" type="button">
        <img src="<%=require('./images/Vector.svg')%>" alt="лайк" className="elements__vector" />
        <span className="elements__likes-number">{props.card.likes.length}</span>
      </button>
    </li>
  )
};

export default Card;