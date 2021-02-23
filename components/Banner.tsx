interface Banner{
    h2: string;
    p: string;
}

export default function Banner({h2, p}:Banner) {
    return(
        <div className="banner">
           <div className="contenido--banner container">
                <h2>{h2}</h2>
                <p>{p}</p>
           </div>
        </div>
    )
}