export default function Paragraph({css,text}) {
    return (
            <div className="paragraph">
                <p className={css}>{text}</p>
            </div>
    )
}