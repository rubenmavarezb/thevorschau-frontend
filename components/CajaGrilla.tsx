import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

export default function CajaGrilla() {

    interface GrillaCategory {
        id: number,
        category: string,
        img: String
    }

    const grillaCategory: GrillaCategory[] = [
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
                {grillaCategory.map((grilla: GrillaCategory) => (
                    <div className="grilla__card--grilla" >
                        <p>hola</p>
                        <img src={`/${grilla.img}`} alt={grilla.category} />
                    </div>
                ))}
            </div>
        </div>
    )
}