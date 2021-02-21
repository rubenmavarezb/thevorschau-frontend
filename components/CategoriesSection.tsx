import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Card from '../components/Card';

interface Cards {
  id: number
  img:string
  gender: string
  category:string
}

export default function Categories() {

  const cards: Cards[] = [
    {
        id: 1,
        img:"card card-1",
        gender: "Men",
        category:"clothes"
    },
    {
        id: 2,
        img:"card card-2",
        gender: "Men",
        category:"shoes"
    },
    {
      id: 3,
      img:"card card-3",
      gender: "Women",
      category:"clothes"
    },
    {
        id: 4,
        img:"card card-4",
        gender: "Women",
        category:"shoes"
      }
  ]

  return (
    <div className="container padding-top-bottom">
      <Heading
      css="heading-headline"
      text="shop by categories"/>
      <Paragraph
      css="paragraph-headline"
      text="lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum"/>
      <div className="card-categories padding-top-bottom">
      {cards.map((card:Cards) => (
          <Card
            card={card}
          />
        ))}
      </div>
    </div>
  )
}
