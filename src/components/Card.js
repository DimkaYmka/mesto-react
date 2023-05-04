function Card(card) {

  const handleClick = () => {
    card.onCardClick(card);
  }

  return (

    <li className="elements__card">
      <img  className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick} />
      <button className="button" type="button">
        <img src="<%=require('./images/Trash.svg')%>" alt="лайк" className="elements__delete-button elements__delete-button_hidden" />
      </button>
      <h2 className="elements__title">{card.name}</h2>
      <button className="button" type="button">
        <img src="<%=require('./images/Vector.svg')%>" alt="лайк" className="elements__vector" />
        <span className="elements__likes-number">{card.counter}</span>
      </button>
    </li>
  )
};

export default Card;