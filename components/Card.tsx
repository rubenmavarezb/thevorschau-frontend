interface Card {
    card: {
      id:number
      img:string
      gender: string
      category:string
    }
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