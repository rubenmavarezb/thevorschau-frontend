import Heading from './Heading';
import Paragraph from './Paragraph';

interface GridCategory {
    id: number,
    category: string,
    img: String
}

export default function CajaGrilla() {

    const gridCategory: GridCategory[] = [
        {
            id: 1,
            category: "Mas vendido",
            img: "card-2.png"
        },
        {
            id: 2,
            category: "Mas vendido",
            img: "card-2.png"
        },
        {
            id: 3,
            category: "Mas vendido",
            img: "card-2.png"
        },
        {
            id: 4,
            category: "Mas vendido",
            img: "card-2.png"
        },
        {
            id: 5,
            category: "Mas vendido",
            img: "card-2.png"
        },
        {
            id: 6,
            category: "Mas vendido",
            img: "card-2.png"
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