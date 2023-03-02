
function Banner({curso}) {

    const {titulo, contenido, imagen} = curso

    return (
        <>

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



            <section style={{backgroundImage: `url(${imagen.data.attributes.formats.large.url})`}} class={`relative bg-cover bg-center bg-no-repeat rounded`}>
                <div
                    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
                ></div>

                <div
                    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-96 lg:items-center lg:px-8">
                    <div class="max-w-2xl text-center sm:text-left">
                    <h1 class="text-3xl font-extrabold sm:text-5xl">
                        Encuentra la guitarra perfecta...

                        <strong class="block font-extrabold text-rose-700">
                        con la mejor asesoria.
                        </strong>
                    </h1>

                    <p class="mt-4 max-w-2xl sm:text-xl sm:leading-relaxed">
                        Contámos con un servicio de asesoria especilizada para que encuentres a tu compañera perfecta, contáctanos y agenda una visita.
                    </p>

                    <div class="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                        href="#"
                        class="block w-full rounded bg-rose-600 px-12 py-3 text-xl font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                        Contáctanos
                        </a>

                        <a
                        href="#"
                        class="block w-full rounded bg-white px-12 py-3 text-xl font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                        Saber más
                        </a>
                    </div>
                    </div>
                </div>
            </section>

        </>
        
       
    );
}

export default Banner;