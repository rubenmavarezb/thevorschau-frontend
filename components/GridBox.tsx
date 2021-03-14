import Heading from './Heading';
import Paragraph from './Paragraph';

interface GridCategory {
    id: number;
    category: string;
    img: string;
    text: string;
    price: number;
}

export default function CajaGrilla() {

    const gridCategory: GridCategory[] = [
        {
            id: 1,
            category: "Mas vendido",
            img: "card-1.png",
            text: "Nike blue sport sneakers",
            price: 60,

        },
        {
            id: 2,
            category: "Mas vendido",
            img: "card-2.png",
            text: "Line long sleeve shirt",
            price: 15,
        },
        {
            id: 3,
            category: "Mas vendido",
            img: "card-3.png",
            text: "Squared white grey pants",
            price: 25,
        },
        {
            id: 4,
            category: "Mas vendido",
            img: "card-4.png",
            text: "Jean mom black",
            price: 30,
        },
        {
            id: 5,
            category: "Mas vendido",
            img: "card-1.png",
            text: "Adidas superstar white",
            price: 80,
        },
        {
            id: 6,
            category: "Mas vendido",
            img: "card-2.png",
            text: "Magic poison shirt",
            price: 13,
        }
    ]


    return(
        <div className="componente-grilla container">
            <Heading
                css="heading-headline"
                text="LASTEST PRODUCTS"/>
            <Paragraph
                css="paragraph-headline"
                text="lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum"/>
            <div className="grilla">
                {gridCategory.map((grid: GridCategory) => (
                    <div className="grilla__card--grilla" key={grid.id}>
                        <p>hola</p>
                        <img src={`/${grid.img}`} alt={grid.category} />
                    </div>
                ))}
            </div>
        </div>
    )
}