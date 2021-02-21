export default function Heading({css, text}) {
    return (
            <div className="heading">
                <h1 className={css}>{text}</h1>
            </div>
    )
}