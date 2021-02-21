import { Cards } from '../interfaces';

interface Card {
    card: Cards
}

export default function Card({card}: Card) {
  
    const { img, gender, category } = card;

    return (
      <div className={img}>
        <h1>{gender}</h1>
        <h2>{category}</h2>
      </div> 
    )
}