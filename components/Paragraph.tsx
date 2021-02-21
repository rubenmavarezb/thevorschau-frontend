interface Paragraph {
    css:string,
    text:string
  }
export default function Paragraph({css,text}:Paragraph) {
    return (
            <div className="paragraph">
                <p className={css}>{text}</p>
            </div>
    )
}