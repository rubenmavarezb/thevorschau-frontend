interface Cards {
    id:number
    img:string
    gender: string
    category:string
  }

export default function Card({img,gender,category}:Cards) {
    return (
               <div className={img}>
                        <h1>{gender}</h1>
                        <h2>{category}</h2>
                </div> 
    )
}