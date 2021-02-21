interface Heading {
    css:string,
    text:string
  }
export default function Heading({css, text}:Heading) {
    return (
            <div className="heading">
                <h1 className={css}>{text}</h1>
            </div>
    )
}