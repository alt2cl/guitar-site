
function Banner({curso}) {

    const {titulo, contenido, imagen} = curso
    return (
        <section className="banner">
            <style jsx>
                {
                    `.banner{
                        background-image: linear-gradient(to right, rgb(0 0 0 / .8), rgb(0 0 0 / .7)), url(${imagen.data.attributes.formats.large.url})
                    }`
                }

            </style>
             <div className="contenedor flex">
                <div className="contenido text-white">
                    <h3>{titulo}</h3>
                    <p>{contenido}</p>
                </div>
            </div>
        </section>
       
    );
}

export default Banner;