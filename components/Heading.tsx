import { Typography } from '../interfaces'

export default function Heading({css, text}:Typography) {
    return (
            <div className="heading">
                <h1 className={css}>{text}</h1>
            </div>
    )
}