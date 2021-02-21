import { Typography } from '../interfaces';

export default function Paragraph({css,text}:Typography) {
    return (
            <div className="paragraph">
                <p className={css}>{text}</p>
            </div>
    )
}